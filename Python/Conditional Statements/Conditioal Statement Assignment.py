#Check a number wheather it is less than 10 or not

number= int(input("Please Enter a Number to Check: "));
if(number < 10):
    print("%d is less than %d" %(number,10));
else:
    print("%d is not less than %d" %(number,10));


#Check a number wheather it is even or odd

number2= int(input("\nPlease Enter a Number to Check: "));
if(number2 %2==0):
    print("{} is a Even Number" .format(number2));
else:
    print("{} is a Odd Number" .format(number2));

#Check wheather a number is divisible by 10, 50 and 30
    
number3=int(input("\nPlease Enter a Number to Check: "));
if(number3%10==0 and number3%50==0):
    print("\n%d is divisible by both %d and %d" %(number3,10,50));
    if(number3%30==0):
        print("\n{} is divisible by {},{} and {}" .format(number3,10,30,50));
    else:
        print("\n{} is divisible by {} and {} but not {}" .format(number3,10,50,30));
