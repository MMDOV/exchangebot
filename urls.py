import os
from contextlib import chdir

# link = r'https://dolkhaniexchange.com/appointment/'
# port = 7777

with chdir('C:/Program Files/Google/Chrome/Application'):
    os.system(r'chrome.exe https://dolkhaniexchange.com/rezerv/ '
                r'--remote-debugging-port=7777 --user-data-dir="C:\selenum\ChromeProfile"')
