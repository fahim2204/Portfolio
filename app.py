import os
# arr = [279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279]
for x in range(24):
    d = '277 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(20):
    d = '270 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')

os.system("git push")