import os
from random import randint

d = '274 days ago'
with open('file.txt','a') as file:
    file.write(d)
os.system('git add .')
os.system('git commit --date="'+d+'" -m "Change"')
os.system("git push")