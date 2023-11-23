from selenium import webdriver
from selenium.webdriver.chrome import service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException, NoSuchWindowException
import time
import ttkbootstrap as ttk


# webdriver_path = r"chromedriver.exe"
# ser = service.Service(executable_path=webdriver_path)
# option = Options()
# driver = webdriver.Chrome(service=ser, options=option)
#
#
# # Starts the code and opens the webpage
# def start_the_process():
#     global driver
#     driver.get("")
#

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
    if x.isdigit() and 5 >= int(x) > 0:
        return True
    elif x == "":
        return True
    else:
        return False


# ----------------------------------------------UI------------------------------------------------ #
window = ttk.Window()
window.title("ربات گرفتن نوبت صرافی")
window.config(pady=20, padx=20)
phone_number_func = window.register(validate_phone_number)
digit_func = window.register(validate_number)
name_and_last_name_label = ttk.Label(text="نام و نام خانوادگی ", padding=10, justify="right")
name_and_last_name_label.grid(row=0, column=1)
name_and_last_name_entry = ttk.Entry(width=20, justify="right")
name_and_last_name_entry.grid(row=0, column=0)
phone_number_label = ttk.Label(text="شماره موبایل", padding=10, justify="right")
phone_number_label.grid(row=1, column=1)
phone_number_entry = ttk.Entry(width=20, validate="focus", validatecommand=(phone_number_func, '%P'))
phone_number_entry.grid(row=1, column=0)
number_of_appointment_label = ttk.Label(text="تعداد نوبت ها", padding=10, justify="right")
number_of_appointment_label.grid(row=2, column=1)
number_of_appointment_entry = ttk.Entry(width=20, validate="focus", validatecommand=(digit_func, '%P'))
number_of_appointment_entry.grid(row=2, column=0)
button = ttk.Button(text="شروع", width=20, bootstyle='dark')
button.config(padding=10)
button.grid(row=3, column=0, columnspan=2)
window.mainloop()
