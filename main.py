from selenium import webdriver
from selenium.webdriver.chrome import service
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import ttkbootstrap as ttk
from random import choice

webdriver_path = r"chromedriver.exe"
ser = service.Service(executable_path=webdriver_path)
option = Options()
option.add_experimental_option("detach", True)
option.page_load_strategy = "none"
driver = webdriver.Chrome(service=ser, options=option)
wait = WebDriverWait(driver, 20)

DOLATKHANI_LINK = r'https://dolkhaniexchange.ir/appointment/'


def start_the_process():
    """
    Does Everything!
    returns None
    """
    global driver
    driver.get(r'file:///V:/PycharmProjects/bot-sarafi/page_1.html')
    name_last_name = name_and_last_name_entry.get()
    phone_number = phone_number_entry.get()
    window.destroy()
    # Refreshes the window until it can start
    while True:
        wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'bookly-box')))
        try:
            driver.find_element(By.CSS_SELECTOR, "option[value = '0']")
            break
        except NoSuchElementException:
            driver.refresh()

    wait.until(ec.element_to_be_clickable((By.CSS_SELECTOR, "option[value = '0']")))
    driver.execute_script("window.stop();")

    # Picks "نوبت دهی" and clicks "بعدی"
    select_element = Select(driver.find_element(By.XPATH, r"/html/body/div[1]/div/div[2]/div/div/article/div/div/div["
                                                          r"2]/div[2]/div[1]/div/div/div/select"))
    select_element.select_by_value('1')
    next_button = driver.find_element(By.CLASS_NAME, 'bookly-next-step')
    next_button.click()

    driver.get(r'file:///V:/PycharmProjects/bot-sarafi/page_2.html')  # Temporary

    wait.until(ec.presence_of_element_located((By.CLASS_NAME, 'bookly-hour')))
    driver.execute_script("window.stop();")

    # Gets all the available appointment times and puts them in a list
    book_column = driver.find_element(By.CLASS_NAME, r'bookly-column')
    available_times = []
    for available_time in book_column.find_elements(By.CLASS_NAME, 'bookly-hour'):
        if available_time.is_enabled():
            available_times.append(available_time)
    # Clicks a random appointment time
    choice(available_times).click()

    # Temporary
    driver.get(r'file:///V:/PycharmProjects/bot-sarafi/%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D9%87%20%D9%86%D9%88%D8%A8%D8'
               r'%AA%20%D8%AF%D9%87%DB%8C%20%D8%B5%D8%B1%D8%A7%D9%81%DB%8C%20%D8%AF%D9%88%D9%84%D8%AE%D8%A7%D9%86%DB'
               r'%8C%20%E2%80%93%20%D8%B5%D8%B1%D8%A7%D9%81%DB%8C%20%D8%AF%D9%88%D9%84%D8%AE%D8%A7%D9%86%DB%8C3.html')

    wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'bookly-js-full-name')))
    driver.execute_script("window.stop();")

    # Enters the name, last name also the phone number and puts focus on the captcha input for user input
    name_input = driver.find_element(By.CLASS_NAME, r'bookly-js-full-name')
    name_input.clear()
    name_input.send_keys(name_last_name)
    phone_number_input = driver.find_element(By.CLASS_NAME, r'bookly-js-user-phone-input')
    phone_number_input.clear()
    phone_number_input.send_keys(phone_number)
    captcha_input = driver.find_element(By.CLASS_NAME, r'bookly-captcha')
    captcha_input.click()


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

button = ttk.Button(text="شروع", width=20, bootstyle='dark', command=start_the_process)
button.config(padding=10)
button.grid(row=3, column=0, columnspan=2)

window.mainloop()
