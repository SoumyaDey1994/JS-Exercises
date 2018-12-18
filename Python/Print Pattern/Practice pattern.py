number_of_row=int(input("Enter Number of Rows You Want to Print: "));
print();
for i in range(0,number_of_row):
    for j in range(number_of_row-i,0,-1):
        print(" ",end=' ');
    for k in range(0, 2*i+1):
        print("1",end=' ');
    print();
for i in range(number_of_row-1,0,-1):
    for l in range(0,number_of_row-i+1):
        print(" ",end=' ');
    for m in range(2*(i-1)+1,0,-1):
        print("1",end=' ');
    print();


    
