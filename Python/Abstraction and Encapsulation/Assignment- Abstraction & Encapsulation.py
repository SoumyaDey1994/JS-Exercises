class Car:
    def __init__(self,typeOfCar,cost):
        self.typeOfCar=typeOfCar;
        self.rentOfCar=cost;

    def calculateFare(self, no_of_days):
        self.no_of_days=no_of_days;
        self.totalFare= no_of_days * self.rentOfCar;

    def printBookingDetails(self,customer):
        print("\n.............Customer Details.................");
        print();
        print("Name of Customer: "+ customer.name);
        print("Contact Number: " + str(customer.contact_no));
        print("\n........Details of Booking........");
        print();
        print("Car Type: {}" .format(self.typeOfCar));
        print("Cost/Day: %d$" %(self.rentOfCar));
        print("Total No of Days for Rent: %d" %(self.no_of_days));
        print("Total cost: {}$" .format((self.totalFare)));
        print('................................Thank You.........................................................');
        
class Customer:
    def __init__(self,name,contact_no):
        self.name=name;
        self.contact_no=contact_no;
    def borrowCar(self):
        print();
        print("Enter the Type of the Car You want to Borrow: ", end='');
        choosenType=input();
        print("Enter the No of days for which You want to Borrow the Car: ", end='');
        days_to_borrow=int(input());
        return [choosenType,days_to_borrow];

car1= Car('HatchBack', 30);
car2= Car('Sedan', 50);
car3= Car('SUV', 100);


while True:
    print();
    print("Enter 1 to Book a Car ");
    print("Enter 2 to Quit ");
    userChoice=int(input("Please Select an Option From Above: "));
    if(userChoice==1):
        print();
        print("Please Enter Your GoodName: ", end=' ');
        customerName=input();
        print("Enter Your Contact Number: ", end=' ');
        customerContact=int(input());
        customer1= Customer(customerName,customerContact);
        
        customerRequirement=customer1.borrowCar();

        if(customerRequirement[0]=="HatchBack"):
            car1.calculateFare(customerRequirement[1]);
            car1.printBookingDetails(customer1);
        elif(customerRequirement[0]=="Sedan"):
            car2.calculateFare(customerRequirement[1]);
            car2.printBookingDetails(customer1);
        elif(customerRequirement[0]=="SUV"):
            car3.calculateFare(customerRequirement[1]);
            car3.printBookingDetails(customer1);
        else:
            print("\n{} car is not available with US..!! " .format(customerRequirement[0]));
    elif(userChoice==2):
        print();
        print("Thank You for Using our System....Please Visit Again!!!!");
        quit();
    else:
        print("Invalid Option Selected....Please Enter a valid option( 1 or 2)");
        
