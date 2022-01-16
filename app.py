import os
arr = [244,243,262,255]
for x in arr:
    d = str(x)+' days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')

os.system("git push")