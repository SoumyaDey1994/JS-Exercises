statement= "Python programming is easy";
print("Statement Before Editing: "+statement); 
firstword= statement[22:26];
print(firstword);
firstWord= firstword.replace("easy", " and Powerful");
statement= statement+firstWord;
print("Statement After Editing: " + statement);
