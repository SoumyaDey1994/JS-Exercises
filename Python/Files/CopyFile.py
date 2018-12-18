sourceFile=open("TestFile.txt","r");
#targetFile=open("CopyOfTestFile.txt","w");
backUpFile=input("Enter name of Backup File: ")
targetFile=open(backUpFile,"w");
print("Copying Files..................");
targetFile.write(sourceFile.read());
print("Successfully Copied File............");
sourceFile.close();
targetFile.close();
targetFile=open(backUpFile,"r");
print("Content of Copied File:\n");
print(targetFile.read());
targetFile.close();
