class Square:
    def __init__(self, length):
        self.length=length;
    def __pow__(s1, s2):
        return( s1.length ** s2.length);

side1=int(input("Enter Side Length of Square 1: "));
squareOne= Square(side1);
side2=int(input("Enter Side Length of Square 2: "));
squareTwo= Square(side2);
result= squareOne ** squareTwo
print("Result: %d" %(result));
