import sys
import os
import time

import winsound
from datetime import datetime, timedelta
from selenium import webdriver
from selenium.webdriver.chrome import service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, TimeoutException, NoSuchWindowException
import tkinter as tk
from tkinter import messagebox
from random import choice
import multiprocessing

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

    def __init__(self, name, last_name, melli, hessab, phone_number, email_add, the_link, index):
        self.name = name
        self.last_name = last_name
        self.melli = melli
        self.hessab = hessab
        self.phone_number = phone_number
        self.email_add = email_add
        self.the_link = the_link
        self.index = index
        ser = service.Service(executable_path=WEBDRIVER_PATH)
        option = Options()
        option.add_experimental_option("detach", True)
        option.page_load_strategy = "none"
        self.driver = webdriver.Chrome(service=ser, options=option)
        self.wait = WebDriverWait(self.driver, 20)
        self.first_step()

    def first_step(self):
        try:
            self.driver.get(self.the_link)
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
            messagebox.showerror(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def second_step(self):
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'os-service-selector')))
                    break
                except TimeoutException:
                    continue
            second_button = self.driver.find_element(By.CLASS_NAME, r'os-service-selector')
            second_button.click()
            self.third_step()
        except NoSuchWindowException:
            messagebox.showerror(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def third_step(self):
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.XPATH, r"//input[@type='number']")))
                    break
                except TimeoutException:
                    continue

            melli_hessab = self.driver.find_elements(By.XPATH, r"//input[@type='number']")

            melli_input = melli_hessab[0]
            hessab_input = melli_hessab[1]
            checkmark = self.driver.find_element(By.XPATH, r"//input[@type='checkbox']")
            if melli_input.get_attribute('value') == '' and hessab_input.get_attribute('value') == '':
                melli_input.send_keys(self.melli)
                hessab_input.send_keys(self.hessab)
                checkmark.click()
            next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
            next_button.click()
            self.fourth_step()
        except NoSuchWindowException:
            messagebox.showerror(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def fourth_step(self):
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
                except AttributeError:
                    pass
                if 'os-not-available' not in day.get_attribute('class').split(' '):
                    day.click()
                    days_available.append(day)
            if not days_available:
                self.driver.find_element(By.CLASS_NAME, r'latepoint-prev-btn').click()
                self.third_step()
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
                messagebox.showerror(message="وقتی موجود نمیباشد!", title="ارور")
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
            messagebox.showerror(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def fifth_step(self):
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

            name_input.send_keys(self.name)
            last_name_input.send_keys(self.last_name)
            phone_number_input.send_keys(self.phone_number)
            email_input.send_keys(self.email_add)

            next_button = self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn')
            next_button.click()
            self.sixth_step()
        except NoSuchWindowException:
            messagebox.showerror(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
            sys.exit()

    def sixth_step(self):
        try:
            while True:
                try:
                    self.wait.until(ec.element_to_be_clickable((By.CLASS_NAME, r'latepoint-next-btn')))
                    break
                except TimeoutException:
                    continue

            self.driver.find_element(By.CLASS_NAME, r'latepoint-next-btn').click()

        except NoSuchWindowException:
            messagebox.showerror(message="!پنجره مورد نظر بسته شده و یا وجود ندارد", title=f'{self.index} پنجره ')
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
        messagebox.showerror(message="لطفا یک شماره بین صفر تا هشت وارد کنید", title=f'ارور')
        return None
    amount = int(number_of_appointment_entry.get())
    variable = var.get()
    if variable == 2:
        the_link = ARYA_LINK
    elif variable == 1:
        the_link = DOLKHANI_LINK
    else:
        messagebox.showerror(message="لطفا یکی از صرافی ها را انتخاب کنید", title="ارور")
        return None
    for widget in window.winfo_children():
        widget.destroy()
    phone_number_func = window.register(validate_phone_number)

    name_label = tk.Label(text=":نام ", padx=10, pady=10, justify="right")
    name_label.grid(row=1, column=amount + 1)

    last_name_label = tk.Label(text=":نام خانوادگی ", padx=10, pady=10, justify="right")
    last_name_label.grid(row=2, column=amount + 1)

    melli_code_label = tk.Label(text=":کد ملی ", padx=10, pady=10, justify="left")
    melli_code_label.grid(row=3, column=amount + 1)

    hessab_label = tk.Label(text=":شماره حساب ارزی ", padx=10, pady=10, justify="left")
    hessab_label.grid(row=4, column=amount + 1)

    phone_number_label = tk.Label(text=":شماره موبایل", padx=10, pady=10, justify="right")
    phone_number_label.grid(row=5, column=amount + 1)

    email_label = tk.Label(text=":ایمیل ", padx=10, pady=10, justify="left")
    email_label.grid(row=6, column=amount + 1)

    help_button_2 = tk.Button(window, text="کمک", image=photo, width=16,
                              command=lambda: show_help(2))
    help_button_2.grid(row=0, column=amount + 1)

    for i in range(amount):
        number_label = tk.Label(text=i + 1, padx=10, pady=10)
        number_label.grid(row=0, column=amount - i - 1)

        name_entry = tk.Entry(width=20, justify="right")
        name_entry.grid(row=1, column=i)

        last_name_entry = tk.Entry(width=20, justify="right")
        last_name_entry.grid(row=2, column=i)

        melli_code_entry = tk.Entry(width=20, justify="left")
        melli_code_entry.grid(row=3, column=i)

        hessab_entry = tk.Entry(width=20, justify="left")
        hessab_entry.grid(row=4, column=i)

        phone_number_entry = tk.Entry(width=20, validate="focus", validatecommand=(phone_number_func, '%P'))
        phone_number_entry.grid(row=5, column=i)

        email_entry = tk.Entry(width=20, justify="left")
        email_entry.grid(row=6, column=i)

        all_info.append((name_entry, last_name_entry, melli_code_entry, hessab_entry, phone_number_entry, email_entry))

    start_button = tk.Button(text="شروع", width=20,
                             command=lambda: iterate_through(all_info, link=the_link))
    start_button.config(padx=10, pady=10)
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
    for info in user_information:
        if not validate_phone_number(info[4]):
            messagebox.showerror(message="یکی از شماره موبایل ها اشتباه است", title=f'ارور')
            sys.exit()
        p = multiprocessing.Process(target=MainProcess,
                                    args=(info[0], info[1], info[2], info[3], info[4], info[5], link, i))
        p.start()
        processes.append(p)
        i += 1
    for p in processes:
        p.join()


def show_help(x):
    if x == 1:
        messagebox.showinfo(title="کمک", message="""صرافی مورد نظر را انتخاب کنید و تعداد نوبتی که نیاز دارید را هم 
        وارد کنید توجه شود که تعداد بالای نوبت نیازمند کامپیوتر قوی ای است و در حال حاضر محدودیت هشت تایی روی تعداد 
        اعمال شده است که هنوز هم زیاد است""")
    else:
        messagebox.showinfo(title="کمک", message="""نام و نام خانوادگی و همچنین شماره موبایل ها را وارد کنید توجه 
        کنید که شماره های بالا فقط برای معلوم بودن هر نوبت می باشد و تاثیری در ترتیب ندارد لازم به ذکر است که در این 
        پنجره میتوانید چیزی وارد نکنید ولی در مرحله آخر اطلاعات باید دستی وارد شود""")


# ----------------------------------------------UI------------------------------------------------ #
if __name__ == '__main__':
    multiprocessing.freeze_support()
    window = tk.Tk()
    window.title("ربات گرفتن نوبت صرافی")
    window.config(pady=20, padx=40)
    var = tk.IntVar()
    digit_func = window.register(validate_number)

    number_of_appointment_label = tk.Label(text=":تعداد نوبت ها", padx=10, pady=10, justify="right")
    number_of_appointment_label.grid(row=1, column=2)

    number_of_appointment_entry = tk.Entry(width=20, validate="focus", validatecommand=(digit_func, '%P'))
    number_of_appointment_entry.grid(row=1, column=0, columnspan=2)

    radio1 = tk.Radiobutton(window, text="دولخانی", variable=var, value=1, padx=10, pady=10)
    radio1.grid(row=0, column=0)

    radio2 = tk.Radiobutton(window, text="آریا", variable=var, value=2, padx=10, pady=10)
    radio2.grid(row=0, column=1)

    if getattr(sys, 'frozen', False):
        photo = tk.PhotoImage(file=os.path.join(sys._MEIPASS, "files/question.png"), width=16, height=16)
    else:
        photo = tk.PhotoImage(file=r"files/question.png", width=16, height=16)
    help_button_1 = tk.Button(window, text="کمک", image=photo, width=16,
                              command=lambda: show_help(1))
    help_button_1.grid(row=0, column=2)

    button = tk.Button(text="بعدی", width=20, command=get_all_the_info)
    button.config(padx=10, pady=10)
    button.grid(row=4, column=0, columnspan=3)

    window.mainloop()
