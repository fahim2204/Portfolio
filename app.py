import os
# arr = [279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279]
for x in range(24):
    d = '2021-12-29 12:00:00'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(19):
    d = '2022-01-05 12:00:00'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')


os.system("git push")