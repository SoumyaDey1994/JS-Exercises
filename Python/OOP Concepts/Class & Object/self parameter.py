class ITCEmployees:
    companyName="ITC Infotech"
    def set_EmployeeDetails(self,name,designation,department,grade):
        self.name=name;
        self.designation=designation;
        self.department=department;
        self.grade=grade;

    def print_EmployeeDetails(self):
        print("Employee Name: " +self.name);
        print("Employee Designation: " +self.designation);
        print("Employee Department: " +self.department);
        print("Employee grade: " +self.grade);


employeeSKD= ITCEmployees();
employeeSKD.set_EmployeeDetails("Soumya Dey", "Associate IT Consultant", "Innoruption", "IS1");
employeeGanesh= ITCEmployees();
employeeGanesh.set_EmployeeDetails("Ganesh Subhramanium","Delivery Manager", "BFSI_ADM", "IS6")
print("\n Details of Employee 1:\n");
employeeSKD.print_EmployeeDetails()
print("\n\n Details of Employee 2:\n");
employeeGanesh.print_EmployeeDetails()
employeeSKD.age=23
print("\n Age of Employee 1: "+ str(employeeSKD.age));
employeeGanesh.age=41;
print("\n Age of Employee 2: "+ str(employeeGanesh.age));
