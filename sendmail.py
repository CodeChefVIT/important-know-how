import csv
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys

#in gmail settings of your account make sure to 'allow less secure apps' option to be 'ON'

#to parse csv file
ls,j,file=[],"",input("Enter csv file to read from ")
try:
    with open(file,'r') as f:
        ff=csv.reader(f)
        for row in ff:
            for i in row:
                ls.append(i)
except:
    print("No such file exists")
    sys.exit()

#to get login credentials
eid=input("Enter admin email address:  ")
epass=input("Enter password:  ")

#to set up SMTP server and login
mail=smtplib.SMTP('smtp.gmail.com',587) #to inititalise smtp server and port
mail.ehlo()                     #for ESMTP encryption
mail.starttls()                 # transport security layer for encryption
try:
    mail.login(eid,epass)    #login credentials
except:
    print("Invalid credentials, try logging in again or in gmail settings of your account allow less secure apps option to be ON")
    sys.exit()

    
#to set up content of the mail
msg=MIMEMultipart()
msg['Subject']="Google Developers Group, VIT Vellore, Welcomes you"
body="You are invited to our new development event happening on 16th December from 3 pm onwards"
msg.attach( MIMEText(body,'plain') )

#to send mail
for i in ls:
    try:
        mail.sendmail('angad.sharma2017@vitstudent.ac.in',i,msg.as_string() )        #to send a mail
    except:     # to raise an exception when there is failure in mail delivery
        print("\n" + i + " found an invalid email address ")
        continue
mail.close()
