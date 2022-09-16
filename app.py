import os
arr = [1,1,2,2,3,4,4,4,4,4,5,6,6,6,6,6,7,8,9,9,9,9,9,9]
for x in arr:
    d = str(x)+' days ago'
    with open('file.txt','a') as file:
        file.write(d)
    os.system('git add .')
    os.system('git commit --date="'+d+'" -m "Change"')

os.system("git push")