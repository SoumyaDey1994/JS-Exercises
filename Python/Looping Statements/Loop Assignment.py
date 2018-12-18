import math

#print all numbers within a range
lower_limit= (int)(input("Enter lower bound: "));
upper_limit=(int)(input("Enter Upper bound: "));

for number in range(lower_limit,upper_limit+1):
    print(number);
print();

#print all oddnumbers in a range
lower_limit= (int)(input("Enter lower limit: "));
upper_limit=(int)(input("Enter Upper limit: "));
print();
print("Odd Numbers in range {}-{} are: " .format(lower_limit,upper_limit));
for number in range(lower_limit,upper_limit+1):
    if(number%2==1):
        print(number);
print();

#check wheather a Number is Prime or not
numbertoCheck=(int)(input("Please Enter an Interger to Check: "));
flag=0;
for i in range(2,int(math.sqrt(numbertoCheck))+1):
    if(numbertoCheck%i==0):
        flag=1;
        break;
    else:
        continue;

if(flag==0):
    print("%d is a Prime Number" %(numbertoCheck));
else:
    print("%d is a Non-Prime Number" %(numbertoCheck));
       
