import os
import sys
from contextlib import chdir

link = sys.argv[1]
port = sys.argv[2]

with chdir('C:/Program Files/Google/Chrome/Application'):
    os.system(f'chrome.exe {link} '
              f'--remote-debugging-port={port} --user-data-dir="C:\selenum\ChromeProfile"')
