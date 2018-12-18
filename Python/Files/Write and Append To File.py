demoFile= open("DemoFile.txt","w+");
totalChars= demoFile.write("I am Soumya from Kolkata.\n I lived in Bangalore");
print("Total No of characters in File: " +repr(totalChars));
demoFile.close();
demoFile= open("DemoFile.txt","r");
print("Content of demo File: \n" + demoFile.read());
demoFile.close();
demoFile= open("DemoFile.txt","w+");
demoFile.write("I learned Javascript and python\n. Python is good but I liked Javascript more");
demoFile.close();
demoFile= open("DemoFile.txt","r");
totalChar=demoFile.read();
print("Content of demo File:\n" + demoFile.read());
print("Total No of characters Read from File: " +repr(totalChar));
demoFile.close();

testFile= open("TestFile.txt", "a+");
testFile.write("I learned Javascript and python.\nPython is good but I liked Javascript more");
print("Position of File Pointer: " +str(testFile.tell()));
print("Total Content of TestFile:\n" + str(testFile.read()));
testFile.close();

          
