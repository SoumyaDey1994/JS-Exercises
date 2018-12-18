from abc import ABC, abstractmethod

class Shape(ABC):

    @abstractmethod
    def area(self):
        return 0;
class Circle(Shape):
    def __init__(self, side):
        self.radius= side;

    def area(self):
        return ( 3.14 * self.radius * self.radius);

class Rectangle(Shape):
    def __init__(self, side1, side2):
        self.length= side1;
        self.breadth= side2;

    def area(self):
        return self.length * self.breadth;

print("Enter The Radius of Circle: ", end='');
circle=Circle(int(input()));
print("Area of the Circle: %.2f" %(circle.area()));
print();
print("Enter Length of rectangle: ", end='');
length=int(input());
print("Enter Width of Rectangle: ", end='');
width=int(input());
rectangle=Rectangle(length,width);
print("Area of the Rectangle: {}" .format(rectangle.area()));
#shape=Shape(); // Can't instantiate Abstract class
