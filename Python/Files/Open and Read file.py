myFile= open("TestFile.txt")
print("Current Position of File pointer: " + str(myFile.tell()));
print();
print("File Content: \n" +myFile.read());
print();
print("Position After Reading: " + str(myFile.tell()));
myFile.seek(0,0);
print("Change File Pointer Position.......");
print();
print("Position After Changing: " + str(myFile.tell()));
print();
print(myFile.read());
print();
print("Closing the File.......");
myFile.close();
#print("Position after Closing: "+ str(myFile.tell()));
