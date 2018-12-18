#class Library- Display available Books, lend a book, Add a book
#
#class Customer- Request for a Book, Return a Book
#

class Library:
    def __init__(self,listofBooks):
        self.availableBooks= listofBooks;
        
    def displayAvailbleBooks(self):
        print("\n List of Avalinable Books: ");
        for book in self.availableBooks:
            print("\n"+ book);
        print();   
    def lendBook(self,requestedBook):
        if requestedBook in self.availableBooks:
            print("You have Borrowed Book: "+ requestedBook+ " Thank You!! \n" );
            self.availableBooks.remove(requestedBook);
        else:
            print("Sorry!! The book you requested in not available in our List\n");
        
    def addBook(self,returnedBook):
        #pass;
        print("\nyou have Returned Book: " + returnedBook +" Thank You!! Visit Again!!\n");
        self.availableBooks.append(returnedBook);
       
        

class Customer:
    def requestBook(self):
       # pass;
        self.booktolend= input(print("Enter the Name of the Book You want to Borrow: "));
        return self.booktolend;
    
    def returnBook(self):
       # pass;
        self.booktoReturn=input(print("Enter the Name of the Book You want to Return: "));
        return self.booktoReturn;
        
myLibrary= Library(['Three Mistakes of My Life', 'Half GirlFriend', 'Two States', 'Revelution 2020', 'One Night at Call Center']);

customer1= Customer();

while True:
    print("Enter 1 to See List of available Books");
    print("Enter 2 to Request for a Book");
    print("Enter 3 to return a Book");
    print("Enter 4 to Quit");
    userOption=int(input(print("\nEnter your option: ")));
    if userOption == 1:
        #pass;
        myLibrary.displayAvailbleBooks();
    elif userOption == 2:
        #pass;
        requestedBook=customer1.requestBook();
        myLibrary.lendBook(requestedBook);
    elif userOption == 3:
        #pass;
        returnedBook= customer1.returnBook();
        myLibrary.addBook(returnedBook);
    elif userOption == 4:
        quit();
    else:
        print("Invalid Choice!!!!! Please Enter a Valid Option\n");


    
                 
