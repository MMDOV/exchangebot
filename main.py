import sys
import os
from selenium import webdriver
from selenium.webdriver.chrome import service
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, TimeoutException, NoSuchWindowException
import ttkbootstrap as ttk
from ttkbootstrap.dialogs.dialogs import Messagebox
from random import choice
import threading

# TODO: test the whole program its done imo just needs bug fixes
DOLKHANI_LINK = r'https://dolkhaniexchange.ir/appointment/'
ARYA_LINK = r'https://exarya.ir/appointment/'
WEBDRIVER_PATH = r"chromedriver.exe"
if getattr(sys, 'frozen', False):
    WEBDRIVER_PATH = os.path.join(sys._MEIPASS, "files/chromedriver.exe")
else:
    WEBDRIVER_PATH = r"files/chromedriver.exe"


class Main:
    """
    the main class does everything
    """
    def __init__(self, name_last_name, phone_number, the_link):
        self.name_last_name = name_last_name
        self.phone_number = phone_number
        self.the_link = the_link
        ser = service.Service(executable_path=WEBDRIVER_PATH)
        option = Options()
        option.add_experimental_option("detach", True)
        option.page_load_strategy = "none"
        self.driver = webdriver.Chrome(service=ser, options=option)
        self.wait = WebDriverWait(self.driver, 20)
        self.first_step()

    def first_step(self):
        """
        The first step of the process!
        returns None
        """
        try:
            self.driver.get(r'file:///V:/PycharmProjects/bot-sarafi/page_1_a.html')
            # Refreshes the window until it can start
            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'page-title')))
                    images = self.driver.find_elements(By.TAG_NAME, "img")
                    if self.driver.find_element(By.CSS_SELECTOR, "option[value = '0']"):
                        break
                    if len(images) <= 1:
                        raise NoSuchElementException
                    break
                except NoSuchElementException:
                    self.driver.refresh()
                except TimeoutException:
                    continue

            self.wait.until(ec.element_to_be_clickable((By.CSS_SELECTOR, "option[value = '0']")))
            self.driver.execute_script("window.stop();")

            # Picks "نوبت دهی" and clicks "بعدی"
            select_element = Select(self.driver.find_element(By.TAG_NAME, "select"))
            select_element.select_by_value('1')
            next_button = self.driver.find_element(By.CLASS_NAME, 'bookly-next-step')
            next_button.click()
            self.second_step()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مرورگر بسته شده و یا وجود ندارد")

    def second_step(self):
        """
        the second step of the process
        :return: None
        """
        try:
            self.driver.get(r'file:///V:/PycharmProjects/bot-sarafi/page_2.html')  # Temporary

            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.CLASS_NAME, 'bookly-hour')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")

            # Gets all the available appointment times and puts them in a list
            # TODO: multiple processes can pick the same time needs fixing
            book_column = self.driver.find_element(By.CLASS_NAME, r'bookly-column')
            available_times = []
            for available_time in book_column.find_elements(By.CLASS_NAME, 'bookly-hour'):
                if available_time.is_enabled():
                    available_times.append(available_time)
            # Clicks a random appointment time
            if available_times:
                random_choice = choice(available_times)
                random_choice.click()
                available_times.remove(random_choice)
                self.third_step()
            else:
                Messagebox.show_error(message="!نوبتی موجود نیست")
                sys.exit()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مرورگر بسته شده و یا وجود ندارد")

    def third_step(self):
        """
        the third step of the process
        :return: None
        """
        try:
            # Temporary
            self.driver.get(
                r'file:///V:/PycharmProjects/bot-sarafi/%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D9%87%20%D9%86%D9%88%D8%A8%D8'
                r'%AA%20%D8%AF%D9%87%DB%8C%20%D8%B5%D8%B1%D8%A7%D9%81%DB%8C%20%D8%AF%D9%88%D9%84%D8%AE%D8%A7%D9%86%DB'
                r'%8C%20%E2%80%93%20%D8%B5%D8%B1%D8%A7%D9%81%DB%8C%20%D8%AF%D9%88%D9%84%D8%AE%D8%A7%D9%86%DB%8C3.html')

            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'bookly-js-full-name')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")

            # Enters the name, last name also the phone number and puts focus on the captcha input for user input
            name_input = self.driver.find_element(By.CLASS_NAME, r'bookly-js-full-name')
            name_input.clear()
            name_input.send_keys(self.name_last_name)
            phone_number_input = self.driver.find_element(By.CLASS_NAME, r'bookly-js-user-phone-input')
            phone_number_input.clear()
            phone_number_input.send_keys(self.phone_number)
            captcha_input = self.driver.find_element(By.CLASS_NAME, r'bookly-captcha')
            captcha_input.click()
            self.wait.until(ec.invisibility_of_element_located((By.CLASS_NAME, r'bookly-captcha')))
            try:
                self.driver.find_element(By.CLASS_NAME, r'bookly-column')
                self.second_step()
            except NoSuchElementException:
                sys.exit()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مرورگر بسته شده و یا وجود ندارد")


def validate_phone_number(x) -> bool:
    """Validates that the input is a phone number"""
    if x.isdigit() and len(x) == 11:
        return True
    elif x == "":
        return True
    else:
        return False


def validate_number(x) -> bool:
    """Validates that the input is a number and is within the accepted range"""
    if x.isdigit() and 8 >= int(x) > 0:
        return True
    elif x == "":
        return False
    else:
        return False


def get_all_the_info():
    """
    gets the amount from main window and creates a new window to collect all the info needed
    :return: a list of all the information that is passed to another function via the button
    """
    all_info = []
    if not validate_number(number_of_appointment_entry.get()):
        Messagebox.show_error(message="لطفا یک شماره بین صفر تا هشت وارد کنید")
        return None
    amount = int(number_of_appointment_entry.get())
    sarafi = var.get()
    for widget in window.winfo_children():
        widget.destroy()
    phone_number_func = window.register(validate_phone_number)

    name_and_last_name_label = ttk.Label(text=":نام و نام خانوادگی ", padding=10, justify="right")
    name_and_last_name_label.grid(row=1, column=amount + 1)

    phone_number_label = ttk.Label(text=":شماره موبایل", padding=10, justify="right")
    phone_number_label.grid(row=2, column=amount + 1)

    if getattr(sys, 'frozen', False):
        photo1 = ttk.PhotoImage(file=os.path.join(sys._MEIPASS, "files/question.png"), width=16, height=16)
    else:
        photo1 = ttk.PhotoImage(file=r"files/question.png", width=16, height=16)
    help_button_2 = ttk.Button(window, text="کمک", image=photo1, bootstyle='light', width=5,
                               command=lambda: show_help(2))
    help_button_2.grid(row=0, column=amount + 1)

    for i in range(amount):
        number_label = ttk.Label(text=i + 1, padding=10)
        number_label.grid(row=0, column=amount - i - 1)

        name_and_last_name_entry = ttk.Entry(width=20, justify="right")
        name_and_last_name_entry.grid(row=1, column=i)

        phone_number_entry = ttk.Entry(width=20, validate="focus", validatecommand=(phone_number_func, '%P'))
        phone_number_entry.grid(row=2, column=i)

        all_info.append((name_and_last_name_entry, phone_number_entry))

    start_button = ttk.Button(text="شروع", width=20, bootstyle='dark',
                              command=lambda: iterate_through(all_info, variable=sarafi))
    start_button.config(padding=10)
    start_button.grid(row=3, column=0, columnspan=amount + 1)
    window.mainloop()


def iterate_through(information, variable):
    """
    iterates through the list of info and gets an appointment for each one
    :param variable: determines which link to use
    :param information: all the information including names and phone numbers
    :return: None
    """
    information.reverse()
    if variable == 1:
        the_link = DOLKHANI_LINK
    else:
        the_link = ARYA_LINK
    processes = []
    user_information = [(info[0].get(), info[1].get()) for info in information]
    if __name__ == '__main__':
        for info in user_information:
            if not validate_phone_number(info[1]):
                Messagebox.show_error(message="یکی از شماره موبایل ها اشتباه است")
                sys.exit()
            p = threading.Thread(target=Main, args=(info[0], info[1], the_link))
            p.start()
            processes.append(p)
        for p in processes:
            p.join()


def show_help(x):
    if x == 1:
        Messagebox.show_info(title="کمک", message="""صرافی مورد نظر را انتخاب کنید و تعداد نوبتی که نیاز دارید را هم 
        وارد کنید توجه شود که تعداد بالای نوبت نیازمند کامپیوتر قوی ای است و در حال حاضر محدودیت هشت تایی روی تعداد 
        اعمال شده است که هنوز هم زیاد است""")
    else:
        Messagebox.show_info(title="کمک", message="""نام و نام خانوادگی و همچنین شماره موبایل ها را وارد کنید توجه 
        کنید که شماره های بالا فقط برای معلوم بودن هر نوبت می باشد و تاثیری در ترتیب ندارد لازم به ذکر است که در این 
        پنجره میتوانید چیزی وارد نکنید ولی در مرحله آخر اطلاعات باید دستی وارد شود""")


# ----------------------------------------------UI------------------------------------------------ #
if __name__ == '__main__':
    window = ttk.Window()
    window.title("ربات گرفتن نوبت صرافی")
    window.config(pady=20, padx=40)

    var = ttk.IntVar()
    digit_func = window.register(validate_number)

    number_of_appointment_label = ttk.Label(text=":تعداد نوبت ها", padding=10, justify="right")
    number_of_appointment_label.grid(row=1, column=2)

    number_of_appointment_entry = ttk.Entry(width=20, validate="focus", validatecommand=(digit_func, '%P'))
    number_of_appointment_entry.grid(row=1, column=0, columnspan=2)

    radio1 = ttk.Radiobutton(window, text="دولخانی", variable=var, value=1, padding=10)
    radio1.grid(row=0, column=0)

    radio2 = ttk.Radiobutton(window, text="آریا", variable=var, value=2, padding=10)
    radio2.grid(row=0, column=1)

    if getattr(sys, 'frozen', False):
        photo = ttk.PhotoImage(file=os.path.join(sys._MEIPASS, "files/question.png"), width=16, height=16)
    else:
        photo = ttk.PhotoImage(file=r"files/question.png", width=16, height=16)
    help_button_1 = ttk.Button(window, text="کمک", image=photo, width=5, bootstyle="light",
                               command=lambda: show_help(1))
    help_button_1.grid(row=0, column=2)

    button = ttk.Button(text="بعدی", width=20, bootstyle='dark', command=get_all_the_info)
    button.config(padding=10)
    button.grid(row=4, column=0, columnspan=3)

    window.mainloop()
