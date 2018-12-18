#Function to Print 'Hello world'
def printHelloWorld():
    print("Hello World!!!!!!!");
    print('From Python');

printHelloWorld();
print();

#Function to Calculate Sum of Two Numbers
def sum(num1, num2):
    return (num1+num2);

number1=(float)(input("Enter First Number: "));
number2=(float)(input("Enter Second Number: "));

print("Sum of {} and {} is: {}" .format(number1, number2, sum(number1,number2)));
print();

#Function to Determine Type of Triangle

def findTypeofTriangle(side1, side2, side3):
    if(side1==side2==side3):
        return "Equilateral Triangle";
    elif(side1== side2 or side2==side3 or side3==side1):
        return "Isosceles Triangle";
    else:
        return "Scalene Triangle ";

side1=int(input("Enter Side1 length of your Triangle: "));
side2=int(input("Enter Side2 length of your Triangle: "));
side3=int(input("Enter Side3 length of your Triangle: "));

typeofTriangle=findTypeofTriangle(side1, side2, side3);
print("Triangle is of Type: ", end=' ');
print(typeofTriangle);
