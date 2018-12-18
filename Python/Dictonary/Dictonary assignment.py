SportsPerson={'Cricket':'Sachin Tendulkar', 'Lon Tennis':'Roger Federer', 'Football':'Christiano Ronaldo',
               'Badminton':'Saina Nehwal', 'Chess':'Viswanathan Anand'}
print("Dictonary Before Editing: {}" .format(SportsPerson));
print();
SportsPerson['Cricket']='Rahul Dravid';
print("Dictonary After updating: {}" .format(SportsPerson));
print();
backupSportPersonDictonary= SportsPerson.copy();
print("Backup of Dictonary: " + str(backupSportPersonDictonary));
print();
SportsPerson.clear();
print("After Clearing the Dictonary: {}" .format(SportsPerson));
