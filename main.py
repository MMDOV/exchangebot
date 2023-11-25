from selenium import webdriver
from selenium.webdriver.chrome import service
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, TimeoutException
import ttkbootstrap as ttk
from random import choice

webdriver_path = r"chromedriver.exe"
ser = service.Service(executable_path=webdriver_path)
option = Options()
option.add_experimental_option("detach", True)
option.page_load_strategy = "none"
driver = webdriver.Chrome(service=ser, options=option)
wait = WebDriverWait(driver, 20)

# TODO: test the second website
# TODO: multi threading / processing needed to be added if possible
DOLKHANI_LINK = r'https://dolkhaniexchange.ir/appointment/'
ARYA_LINK = r'https://exarya.ir/appointment/'


def main(name_last_name, phone_number, the_link):
    """
    The main process!
    returns None
    """
    driver.get(the_link)
    # Refreshes the window until it can start
    while True:
        try:
            wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'page-title')))
            driver.find_element(By.CSS_SELECTOR, "option[value = '0']")
            break
        except NoSuchElementException:
            continue
        except TimeoutException:
            continue

    wait.until(ec.element_to_be_clickable((By.CSS_SELECTOR, "option[value = '0']")))
    driver.execute_script("window.stop();")

    # Picks "نوبت دهی" and clicks "بعدی"
    select_element = Select(driver.find_element(By.TAG_NAME, "select"))
    select_element.select_by_value('1')
    next_button = driver.find_element(By.CLASS_NAME, 'bookly-next-step')
    next_button.click()

    while True:
        try:
            wait.until(ec.presence_of_element_located((By.CLASS_NAME, 'bookly-hour')))
            break
        except TimeoutException:
            continue
    driver.execute_script("window.stop();")

    # Gets all the available appointment times and puts them in a list
    book_column = driver.find_element(By.CLASS_NAME, r'bookly-column')
    available_times = []
    for available_time in book_column.find_elements(By.CLASS_NAME, 'bookly-hour'):
        if available_time.is_enabled():
            available_times.append(available_time)
    # Clicks a random appointment time
    choice(available_times).click()

    while True:
        try:
            wait.until(ec.presence_of_element_located((By.CLASS_NAME, r'bookly-js-full-name')))
            break
        except TimeoutException:
            continue
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
    wait.until(ec.new_window_is_opened(driver.window_handles))


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


def get_all_the_info():
    """
    gets the amount from main window and creates a new window to collect all the info needed
    :return: a list of all the information that is passed to another function via the button
    """
    all_info = []
    amount = int(number_of_appointment_entry.get())
    sarafi = var.get()
    for widget in window.winfo_children():
        widget.destroy()
    phone_number_func = window.register(validate_phone_number)
    name_and_last_name_label = ttk.Label(text="نام و نام خانوادگی ", padding=10, justify="right")
    name_and_last_name_label.grid(row=0, column=amount + 1)
    phone_number_label = ttk.Label(text="شماره موبایل", padding=10, justify="right")
    phone_number_label.grid(row=1, column=amount + 1)
    for i in range(amount):
        name_and_last_name_entry = ttk.Entry(width=20, justify="right")
        name_and_last_name_entry.grid(row=0, column=i)

        phone_number_entry = ttk.Entry(width=20, validate="focus", validatecommand=(phone_number_func, '%P'))
        phone_number_entry.grid(row=1, column=i)
        all_info.append((name_and_last_name_entry, phone_number_entry))

    start_button = ttk.Button(text="شروع", width=20, bootstyle='dark',
                              command=lambda: iterate_through(all_info, variable=var))
    start_button.config(padding=10)
    start_button.grid(row=2, column=0, columnspan=amount + 1)
    window.mainloop()


def iterate_through(information, variable):
    """
    iterates through the list of info and gets an appointment for each one
    :param variable: the radio button variable that determines which link to be used
    :param information: all the information including names and phone numbers
    :return: None
    """
    i = 0
    information.reverse()
    if variable == 1:
        the_link = DOLKHANI_LINK
    else:
        the_link = ARYA_LINK
    for info in information:
        main(name_last_name=info[0].get(), phone_number=info[1].get(), the_link=the_link)
        driver.switch_to.window(driver.window_handles[i + 1])
        i += 1


# ----------------------------------------------UI------------------------------------------------ #
window = ttk.Window()
window.title("ربات گرفتن نوبت صرافی")
window.config(pady=20, padx=40)

var = ttk.IntVar()
digit_func = window.register(validate_number)

number_of_appointment_label = ttk.Label(text="تعداد نوبت ها", padding=10, justify="right")
number_of_appointment_label.grid(row=1, column=1)

number_of_appointment_entry = ttk.Entry(width=20, validate="focus", validatecommand=(digit_func, '%P'))
number_of_appointment_entry.grid(row=1, column=0)

radio1 = ttk.Radiobutton(window, text="دولخانی", variable=var, value=1, padding=10)
radio2 = ttk.Radiobutton(window, text="آریا", variable=var, value=2, padding=10)
radio1.grid(row=0, column=0)
radio2.grid(row=0, column=1)

button = ttk.Button(text="بعدی", width=20, bootstyle='dark', command=get_all_the_info)
button.config(padding=10)
button.grid(row=4, column=0, columnspan=2)

window.mainloop()
