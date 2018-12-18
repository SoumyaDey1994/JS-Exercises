
class Student:
    @staticmethod
    def greetUser():
        print("................Welcome to The Students Performance Portal................");
        
    def __init__(self,firstName, lastName, class_no, section, rollNumber):
        self.name= firstName+ " "+ lastName;
        self.class_No= class_no;
        self.rollNumber=rollNumber;
        self.section= section;

    def enterMarks(self, Maths, Physics, Chemistry):
        self.maths_marks= Maths;
        self.physics_marks=Physics;
        self.chemistry_marks= Chemistry;

    def displayStudentDetails(self):
        print("Student Name: " + self.name);
        print("Class: "+ str(self.class_No));
        print("Section: "+ self.section);
        print("Roll Number: "+ str(self.rollNumber));

    def calculateAggregate(self):
        self.total_marks= (self.maths_marks + self.physics_marks+ self.chemistry_marks);
        self.percentage= (self.total_marks/3);

    def displayScoreSheet(self):
        print("Aggregate: " +str(self.total_marks));
        print("percentage: "+ str(self.percentage)+" %");

Student.greetUser();
print("\n");
Student1= Student("Soumya", "Dey", 12, 'B', 23);
Student2= Student("Ankita", "Dutta", 12, 'A', 24);
Student1.enterMarks(90,90,88);
Student2.enterMarks(70,72, 79);
Student1.displayStudentDetails();
print("\n");
Student1.calculateAggregate();
Student2.calculateAggregate();
Student1.displayScoreSheet();
print("\n\n");
Student2.displayStudentDetails();
print("\n");
Student2.displayScoreSheet();
