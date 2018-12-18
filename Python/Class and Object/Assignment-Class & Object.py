#Definition of class Employee
class Employee:
    def setName(self, goodName):
        self.name=goodName;
    def printEmployeeName(self):
        print("Full Name of the Employee: %s" %(self.name));

employeeOne= Employee(); #instance of class Employee
employeeOne.name="SKD";
print("Name of Employee when Assigned: {}" .format(employeeOne.name));
Employee.setName(employeeOne,"Soumya Kanta Dey");
employeeOne.printEmployeeName(); #display Employee name using object
