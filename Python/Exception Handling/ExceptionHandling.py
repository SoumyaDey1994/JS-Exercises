Python 3.6.2 (v3.6.2:5fd33b5, Jul  8 2017, 04:14:34) [MSC v.1900 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> def do_Something():
	number1=input("Enter First Number: ");
	number2=input("Enter Second Number: ");
	print(number1/number2);

	
>>> do_Something()
Enter First Number: Hello
Enter Second Number: Hi
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    do_Something()
  File "<pyshell#5>", line 4, in do_Something
    print(number1/number2);
TypeError: unsupported operand type(s) for /: 'str' and 'str'
>>> def do_Something():
	number1=input("Enter First Number: ");
	number2=input("Enter Second Number: ");
	try:
		divisionResult=number1/number2;
		print(number1/number2);
	except TypeError:
		print("You have not entered numbers properly.. Please enter numbers properly");
	except ZeroDivisionError:
		print("Divisor is {}.....Division cannot be done" .format(0));

		
>>> do_Something()
Enter First Number: 0
Enter Second Number: 0
You have not entered numbers properly.. Please enter numbers properly
>>> do_Something()
Enter First Number: 12
Enter Second Number: 0
You have not entered numbers properly.. Please enter numbers properly
>>> def do_Something():
	number1=input("Enter First Number: ");
	number2=input("Enter Second Number: ");
	try:
		divisionResult=number1/number2;
		print(number1/number2);
	except ZeroDivisionError:
		print("Divisor is {}.....Division cannot be done" .format(0));

	except TypeError:
		print("You have not entered numbers properly.. Please enter numbers properly");
	
