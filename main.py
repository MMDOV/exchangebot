import sys
import os
import winsound
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
import multiprocessing

# TODO: add new arya and armaghan
# TODO: figure out the layout you want to do this in
# TODO: probably add a new class for the new process
# TODO: or maybe just add/rename some functions in the current class
DOLKHANI_LINK = r'https://dolkhaniexchange.com/appointment/'
ARYA_LINK = r'https://exarya.ir/appointment/'
route = r'files/chromedriver.exe'
if getattr(sys, 'frozen', False):
    WEBDRIVER_PATH = os.path.join(sys._MEIPASS, route)
else:
    WEBDRIVER_PATH = route


class MainProcess:
    """
    the main class does everything
    """

    def __init__(self, name, last_name, melli, hessab, phone_number, email_add, the_link, index, img_len):
        self.name = name
        self.last_name = last_name
        self.melli = melli
        self.hessab = hessab
        self.phone_number = phone_number
        self.email_add = email_add
        self.the_link = the_link
        self.index = index
        self.img_len = img_len
        ser = service.Service(executable_path=WEBDRIVER_PATH)
        option = Options()
        option.add_experimental_option("detach", True)
        option.page_load_strategy = "none"
        self.driver = webdriver.Chrome(service=ser, options=option)
        self.wait = WebDriverWait(self.driver, 20)
        self.first_step_2()

    def first_step_1(self):
        """
        The first step of the process reloads the page until it can start and goes to the next step
        returns None
        """
        try:
            self.driver.get(self.the_link)

            # Refreshes the window until it can start
            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'page-title')))
                    images = self.driver.find_elements(By.TAG_NAME, "img")
                    if len(images) <= self.img_len:
                        raise NoSuchElementException
                    elif len(images) > self.img_len:
                        break
                    if self.driver.find_element(By.CSS_SELECTOR, "option[value = '0']"):
                        break
                except NoSuchElementException:
                    self.driver.refresh()
                except TimeoutException:
                    continue
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CSS_SELECTOR, "option[value = '0']")))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")
            # Picks "نوبت دهی" and clicks "بعدی"
            select_element = Select(self.driver.find_element(By.TAG_NAME, "select"))
            try:
                select_element.select_by_value('1')
            except NoSuchElementException:
                self.first_step_1()
            next_button = self.driver.find_element(By.CLASS_NAME, 'bookly-next-step')
            next_button.click()
            winsound.PlaySound('*', winsound.SND_ASYNC)
            while True:
                try:
                    self.wait.until(ec.invisibility_of_element_located((By.CLASS_NAME, 'bookly-next-step')))
                    break
                except TimeoutException:
                    continue
            self.second_step_1()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def first_step_2(self):
        try:
            self.driver.get(r'file:///V:/PycharmProjects/bot-sarafi/page_1.html')
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-book-button')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")

            first_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-book-button')
            first_button.click()
            self.second_step_2()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def second_step_1(self):
        """
        the second step of the process if available picks a time and goes to the next step otherwise either goes back to
        the first step or raises an error
        :return: None
        """
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.TAG_NAME, 'button')))
                    self.driver.find_element(By.CLASS_NAME, r'bookly-column')
                    break
                except TimeoutException:
                    continue
                except NoSuchElementException:
                    self.first_step_1()
            self.driver.execute_script("window.stop();")
            # Gets all the available appointment times and puts them in a list
            available_times = []
            book_column = self.driver.find_element(By.CLASS_NAME, r'bookly-column')
            for available_time in book_column.find_elements(By.CLASS_NAME, 'bookly-hour'):
                if available_time.is_enabled():
                    available_times.append(available_time)
            # Clicks a random appointment time
            if available_times:
                random_choice = choice(available_times)
                random_choice.click()
                available_times.remove(random_choice)
                self.third_step_1()
            else:
                Messagebox.show_error(message="!نوبتی موجود نیست", title=f'{self.index} پنجره ')
                sys.exit()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def second_step_2(self):
        try:
            # Temporary
            self.driver.get(r'file:///C:/Users/moham/OneDrive/Desktop/'
                            r'New%20folder/%D9%85%D8%B1%D8%AD%D9%84%D9%87%201.html')
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'os-service-selector')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")
            second_button = self.driver.find_element(By.CLASS_NAME, r'os-service-selector')
            second_button.click()
            self.third_step_2()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def third_step_1(self):
        """
        the third step of the process fills in the information needed and waits for user to put in Captcha and hits next
        after that checks to see if its back on the second window or not if so it repeats second step otherwise ends
        the program
        :return: None
        """
        try:
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
            try:
                checkbox = self.driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']")
                checkbox.click()
            except NoSuchElementException:
                pass
            captcha_input = self.driver.find_element(By.CLASS_NAME, r'bookly-captcha')
            captcha_input.click()
            while True:
                try:
                    length_of_captcha = len(captcha_input.get_attribute("value"))
                    if length_of_captcha == 5:
                        break
                except TypeError:
                    continue
            next_button = self.driver.find_element(By.CLASS_NAME, 'bookly-next-step')
            next_button.click()
            try:
                next_button.click()
            except NoSuchElementException:
                pass

            while True:
                try:
                    self.wait.until(ec.invisibility_of_element_located((By.CLASS_NAME, r'bookly-captcha')))
                    break
                except TimeoutException:
                    continue
            try:
                self.driver.find_element(By.CLASS_NAME, r'bookly-column')
                self.second_step_1()
            except NoSuchElementException:
                sys.exit()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def third_step_2(self):
        try:
            self.driver.get(r'file:///C:/Users/moham/OneDrive/Desktop/'
                            r'New%20folder/%D9%85%D8%B1%D8%AD%D9%84%D9%87%202.html')

            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.ID, r'booking_custom_fields_cf_lmplf0az')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")

            melli_input = self.driver.find_element(By.ID, r'booking_custom_fields_cf_lmplf0az')
            hessab_input = self.driver.find_element(By.ID, r'booking_custom_fields_cf_oystg78e')
            checkmark = self.driver.find_element(By.ID, r'booking_custom_fields_cf_xrp7bvqj')
            next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-btn')
            melli_input.send_keys(self.melli)
            hessab_input.send_keys(self.hessab)
            checkmark.click()
            next_button.click()
            self.fourth_step_2()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def fourth_step_2(self):
        try:
            # Temporary
            self.driver.get(r'file:///C:/Users/moham/OneDrive/Desktop/5.html')

            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'os-months')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script('window.stop();')

            months = self.driver.find_element(By.CLASS_NAME, r'os-months')
            for day in months.find_elements(By.CLASS_NAME, r'os-day'):
                if 'os-not-available' not in day.get_attribute('class').split(' '):
                    day.click()
            hours = self.driver.find_element(By.CLASS_NAME, r'timeslots')
            times_available = []
            for time in hours.find_elements(By.CLASS_NAME, r'dp-timeslot'):
                if 'is-booked' not in time.get_attribute('class').split(' '):
                    times_available.append(time)
            choice(times_available).click()

            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-next-btn')))
                    break
                except TimeoutException:
                    continue

            next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
            next_button.click()
            self.fifth_step_2()

        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def fifth_step_2(self):
        try:
            # Temporary
            self.driver.get(r'file:///C:/Users/moham/OneDrive/Desktop/7.html')

            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.ID, r'customer_first_name')))
                    break
                except TimeoutException:
                    continue

            self.driver.execute_script("window.stop();")

            name_input = self.driver.find_element(By.ID, r'customer_first_name')
            last_name_input = self.driver.find_element(By.ID, r'customer_last_name')
            phone_number_input = self.driver.find_element(By.ID, r'customer_phone')
            email_input = self.driver.find_element(By.ID, r'customer_email')
            name_input.send_keys(self.name)
            last_name_input.send_keys(self.last_name)
            phone_number_input.send_keys(self.phone_number)
            email_input.send_keys(self.email_add)

            next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
            next_button.click()
            self.sixth_step_2()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def sixth_step_2(self):
        try:
            # Temporary
            self.driver.get(r'file:///C:/Users/moham/OneDrive/Desktop/8.html')

            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-next-btn')))
                    break
                except TimeoutException:
                    continue
            self.driver.execute_script("window.stop();")

            self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn').click()

        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()


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
    also determines which link to use
    :return: a list of all the information that is passed to another function via the button
    """
    all_info = []
    if not validate_number(number_of_appointment_entry.get()):
        Messagebox.show_error(message="لطفا یک شماره بین صفر تا هشت وارد کنید", title=f'ارور')
        return None
    amount = int(number_of_appointment_entry.get())
    variable = var.get()
    if variable == 2:
        the_link = ARYA_LINK
    elif variable == 1:
        the_link = DOLKHANI_LINK
    else:
        Messagebox.show_error(message="لطفا یکی از صرافی ها را انتخاب کنید", title="ارور")
        return None
    for widget in window.winfo_children():
        widget.destroy()
    phone_number_func = window.register(validate_phone_number)

    name_label = ttk.Label(text=":نام ", padding=10, justify="right")
    name_label.grid(row=1, column=amount + 1)

    last_name_label = ttk.Label(text=":نام خانوادگی ", padding=10, justify="right")
    last_name_label.grid(row=2, column=amount + 1)

    melli_code_label = ttk.Label(text=":کد ملی ", padding=10, justify="left")
    melli_code_label.grid(row=3, column=amount + 1)

    hessab_label = ttk.Label(text=":شماره حساب ارزی ", padding=10, justify="left")
    hessab_label.grid(row=4, column=amount + 1)

    phone_number_label = ttk.Label(text=":شماره موبایل", padding=10, justify="right")
    phone_number_label.grid(row=5, column=amount + 1)

    email_label = ttk.Label(text=":ایمیل ", padding=10, justify="left")
    email_label.grid(row=6, column=amount + 1)

    help_button_2 = ttk.Button(window, text="کمک", image=photo, bootstyle='light', width=5,
                               command=lambda: show_help(2))
    help_button_2.grid(row=0, column=amount + 1)

    for i in range(amount):
        number_label = ttk.Label(text=i + 1, padding=10)
        number_label.grid(row=0, column=amount - i - 1)

        name_entry = ttk.Entry(width=20, justify="right")
        name_entry.grid(row=1, column=i)

        last_name_entry = ttk.Entry(width=20, justify="right")
        last_name_entry.grid(row=2, column=i)

        melli_code_entry = ttk.Entry(width=20, justify="left")
        melli_code_entry.grid(row=3, column=i)

        hessab_entry = ttk.Entry(width=20, justify="left")
        hessab_entry.grid(row=4, column=i)

        phone_number_entry = ttk.Entry(width=20, validate="focus", validatecommand=(phone_number_func, '%P'))
        phone_number_entry.grid(row=5, column=i)

        email_entry = ttk.Entry(width=20, justify="left")
        email_entry.grid(row=6, column=i)

        all_info.append((name_entry, last_name_entry, melli_code_entry, hessab_entry, phone_number_entry, email_entry))

    start_button = ttk.Button(text="شروع", width=20, bootstyle='dark',
                              command=lambda: iterate_through(all_info, link=the_link))
    start_button.config(padding=10)
    start_button.grid(row=7, column=0, columnspan=amount + 1)


def iterate_through(information, link):
    """
    iterates through the list of info and gets an appointment for each one
    :param link: the link to give to main
    :param information: all the information including names and phone numbers
    :return: None
    """
    i = 1
    information.reverse()
    processes = []
    user_information = [[info[0].get(), info[1].get(), info[2].get(), info[3].get(), info[4].get(), info[5].get()]
                        for info in information]
    window.destroy()
    if link == DOLKHANI_LINK:
        img_len = 2
    else:
        img_len = 1
    for info in user_information:
        if not validate_phone_number(info[4]):
            Messagebox.show_error(message="یکی از شماره موبایل ها اشتباه است", title=f'ارور')
            sys.exit()
        p = multiprocessing.Process(target=MainProcess, args=(info[0], info[1], info[2], info[3], info[4], info[5],
                                                              link, i, img_len))
        p.start()
        processes.append(p)
        i += 1
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
    multiprocessing.freeze_support()
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
