import os
# arr = [279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279,279]
for x in range(24):
    d = '276 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(24):
    d = '269 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(19):
    d = '275 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(19):
    d = '268 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(14):
    d = '274 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')
for x in range(14):
    d = '267 days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')

os.system("git push")