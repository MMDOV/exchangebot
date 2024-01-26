import sys
import os
from contextlib import chdir
import time
from datetime import datetime, timedelta
import winsound
from selenium import webdriver
from selenium.webdriver.chrome import service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, TimeoutException, NoSuchWindowException, \
    ElementNotInteractableException
import ttkbootstrap as ttk
from ttkbootstrap.dialogs.dialogs import Messagebox
from random import choice, randint
import multiprocessing

DOLKHANI_LINK = r'https://dolkhaniexchange.com/'
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

    def __init__(self, name, last_name, melli, hessab, phone_number, email_add, the_link, index, delay):
        self.name = name
        self.last_name = last_name
        self.melli = melli
        self.hessab = hessab
        self.phone_number = phone_number
        self.email_add = email_add
        self.the_link = the_link
        self.index = index
        self.delay = delay
        self.port = str(randint(1000, 9999))
        p = multiprocessing.Process(target=self.open_url)
        p.start()
        time.sleep(self.delay)
        ser = service.Service(executable_path=WEBDRIVER_PATH)
        option = Options()
        # option.add_experimental_option("detach", True)
        option.page_load_strategy = "none"
        option.add_experimental_option("debuggerAddress", f"127.0.0.1:{self.port}")
        self.driver = webdriver.Chrome(service=ser, options=option)
        self.wait = WebDriverWait(self.driver, 20)
        # self.driver.maximize_window()
        self.first_step()

    def open_url(self):
        """opens the link in a separate process, this is done to bypass any kind of anti-bot measure"""
        with chdir('C:/Program Files/Google/Chrome/Application'):
            os.system(f'chrome.exe {self.the_link} --remote-debugging-port={self.port}'
                      f' --user-data-dir="C:\selenum\ChromeProfile\\session_{self.index}"')

    def first_step(self):
        """opens the link and clicks on a button and makes sure that the next step is loading"""
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-book-button')))
                    break
                except TimeoutException:
                    continue

            first_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-book-button')
            first_button.click()
            if r'os-loading' not in first_button.get_attribute('class').split(' '):
                self.first_step()
            self.second_step()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def second_step(self):
        """waits for the next page clicks the button"""
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'os-service-selector')))
                    break
                except TimeoutException:
                    continue
            second_button = self.driver.find_element(By.CLASS_NAME, r'os-service-selector')
            second_button.click()
            self.fourth_step()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    # def third_step(self):
    #     """waits for the page to load, inputs some info and clicks the next button"""
    #     try:
    #         while True:
    #             try:
    #                 self.wait.until(ec.element_to_be_clickable((By.XPATH, r"//input[@type='number']")))
    #                 break
    #             except TimeoutException:
    #                 continue
    #
    #         melli_hessab = self.driver.find_elements(By.XPATH, r"//input[@type='number']")
    #
    #         melli_input = melli_hessab[0]
    #         hessab_input = melli_hessab[1]
    #         checkmark = self.driver.find_element(By.XPATH, r"//input[@type='checkbox']")
    #         if melli_input.get_attribute('value') == '' and hessab_input.get_attribute('value') == '':
    #             melli_input.send_keys(self.melli)
    #             hessab_input.send_keys(self.hessab)
    #             checkmark.click()
    #         next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
    #         next_button.click()
    #         self.fourth_step()
    #     except NoSuchWindowException:
    #         Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
    #         sys.exit()

    def fourth_step(self):
        """waits for the page to load checks if there is any available time in the next 3 days
         if so makes a small notification sound, picks them and goes to the next page"""
        try:
            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'os-months')))
                    break
                except TimeoutException:
                    continue
            today_date = datetime.today().strftime('%Y-%m-%d')
            tomorrow_date = (datetime.today() + timedelta(1)).strftime('%Y-%m-%d')
            overmorrow_date = (datetime.today() + timedelta(2)).strftime('%Y-%m-%d')
            today = self.driver.find_element(By.CSS_SELECTOR, f"div[data-date='{today_date}']")
            try:
                tomorrow = self.driver.find_element(By.CSS_SELECTOR, f"div[data-date='{tomorrow_date}']")
                overmorrow = self.driver.find_element(By.CSS_SELECTOR, f"div[data-date='{overmorrow_date}']")
            except NoSuchElementException:
                self.driver.find_element(By.CLASS_NAME, r'os-month-next-btn').click()
                tomorrow = self.driver.find_element(By.CSS_SELECTOR, f"div[data-date='{tomorrow_date}']")
                overmorrow = self.driver.find_element(By.CSS_SELECTOR, f"div[data-date='{overmorrow_date}']")
            days = [today, tomorrow, overmorrow]
            days_available = []
            for day in days:
                try:
                    if (day.find_element(By.CLASS_NAME, r'os-day-number').text <
                            today.find_element(By.CLASS_NAME, r'os-day-number').text):
                        self.driver.find_element(By.CLASS_NAME, r'os-month-next-btn').click()
                except TypeError:
                    pass
                if 'os-not-available' not in day.get_attribute('class').split(' '):
                    day.click()
                    days_available.append(day)
            if not days_available:
                self.driver.find_element(By.CLASS_NAME, r'latepoint-prev-btn').click()
                self.second_step()
            winsound.PlaySound('*', winsound.SND_ASYNC)
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'dp-timeslot')))
                    break
                except TimeoutException:
                    continue
            hours = self.driver.find_element(By.CLASS_NAME, r'timeslots')
            times_available = []
            for time in hours.find_elements(By.CLASS_NAME, r'dp-timeslot'):
                if 'is-booked' not in time.get_attribute('class').split(' '):
                    times_available.append(time)
            if not times_available:
                Messagebox.show_error(message="وقتی موجود نمیباشد!", title="ارور")
            choice(times_available).click()

            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-next-btn')))
                    break
                except TimeoutException:
                    continue

            next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
            next_button.click()
            self.fifth_step()

        except (NoSuchWindowException, AttributeError):
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def fifth_step(self):
        """waits for the page to load inputs some info then clicks the next button"""
        try:
            while True:
                try:
                    self.wait.until(ec.presence_of_element_located((By.XPATH, r"//input[@type='tel']")))
                    break
                except TimeoutException:
                    continue
                except NoSuchElementException:
                    continue

            name_input = self.driver.find_element(By.ID, r'customer_first_name')
            last_name_input = self.driver.find_element(By.ID, r'customer_last_name')
            phone_number_input = self.driver.find_element(By.XPATH, r"//input[@type='tel']")
            email_input = self.driver.find_element(By.ID, r'customer_email')

            melli_hessab = self.driver.find_elements(By.XPATH, r"//input[@type='number']")

            melli_input = melli_hessab[0]
            hessab_input = melli_hessab[1]
            melli_input.send_keys(self.melli)
            hessab_input.send_keys(self.hessab)

            name_input.send_keys(self.name)
            last_name_input.send_keys(self.last_name)
            phone_number_input.send_keys(self.phone_number)
            email_input.send_keys(self.email_add)

            while True:
                try:
                    next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
                    next_button.click()
                except ElementNotInteractableException:
                    continue
                except NoSuchElementException:
                    break

            self.sixth_step()
        except NoSuchWindowException:
            Messagebox.show_error(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def sixth_step(self):
        """clicks the end button and waits for user to close the window or the page to be closed"""
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-next-btn')))
                    break
                except TimeoutException:
                    continue

            while True:
                try:
                    next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
                    next_button.click()
                except NoSuchElementException:
                    break
            self.wait.until(ec.invisibility_of_element_located((By.CLASS_NAME, r'latepoint-lightbox-close')))

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


def validate_delay(x) -> bool:
    """validates that the input is a number and is not a negative number"""
    if x.isdigit() and int(x) >= 0:
        return True
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
    if not validate_delay(delay_time_entry.get()):
        Messagebox.show_error(message="لطفا صفر ثانیه یا بیشتر برای تاخیر وارد کنید", title=f'ارور')
        return None
    amount = int(number_of_appointment_entry.get())
    delay_time = delay_time_entry.get()
    variable = var.get()
    if variable == 2:
        the_link = ARYA_LINK
    elif variable == 1:
        the_link = DOLKHANI_LINK
    else:
        Messagebox.show_error(message="لطفا یکی از صرافی ها را انتخاب کنید", title="ارور")
        return None
    if __name__ == '__main__':
        multiprocessing.freeze_support()
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

            all_info.append(
                (name_entry, last_name_entry, melli_code_entry, hessab_entry, phone_number_entry, email_entry))

        start_button = ttk.Button(text="شروع", width=20, bootstyle='dark',
                                  command=lambda: iterate_through(all_info, link=the_link, delay_t=float(delay_time)))
        start_button.config(padding=10)
        start_button.grid(row=7, column=0, columnspan=amount + 1)


def iterate_through(information: list, link: str, delay_t: float):
    """
    iterates through the list of info and gets an appointment for each one
    :param delay_t: amount of delay for bypassing anti-bot measures
    :param link: the link to give to main
    :param information: all the information including names and phone numbers
    :return: None
    """
    i = 1
    information.reverse()
    processes = []
    user_information = [[info[0].get(), info[1].get(), info[2].get(), info[3].get(), info[4].get(), info[5].get()]
                        for info in information]
    for info in user_information:
        if not validate_phone_number(info[4]):
            Messagebox.show_error(message="یکی از شماره موبایل ها اشتباه است", title=f'ارور')
            sys.exit()
        p = multiprocessing.Process(target=MainProcess,
                                    args=(info[0], info[1], info[2], info[3], info[4], info[5], link, i, delay_t))
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
    # This is the main UI and all of its elements
    multiprocessing.freeze_support()
    window = ttk.Window()
    window.title("ربات گرفتن نوبت صرافی")
    window.config(pady=20, padx=40)
    var = ttk.IntVar()
    digit_func = window.register(validate_number)
    delay_func = window.register(validate_delay)

    number_of_appointment_label = ttk.Label(text=":تعداد نوبت ها", padding=10, justify="right")
    number_of_appointment_label.grid(row=1, column=2)

    number_of_appointment_entry = ttk.Entry(width=20, validate="focus", validatecommand=(digit_func, '%P'))
    number_of_appointment_entry.grid(row=1, column=0, columnspan=2)

    delay_time_label = ttk.Label(text=':مقدار زمان تاخیر به ثانیه')
    delay_time_label.grid(row=2, column=2)

    delay_time_entry = ttk.Entry(width=20, validate='focus', validatecommand=(delay_func, '%P'))
    delay_time_entry.grid(row=2, column=0, columnspan=2)

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
