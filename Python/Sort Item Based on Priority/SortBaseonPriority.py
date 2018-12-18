itemList=["White Shirt", "Formal Shoe", "Black Shirt", "Rolex Watch", "MI Phone", "Macbook", "Lather Jacket"];
priorityOrder=[2,1,3,7,4,6,5]
print("\n Items Before Sorting: ", end=' ');
print(itemList);

sortedList=[];
#print(len(priorityOrder));
for index in range(0,len(priorityOrder)):
    item=itemList[index];
    position=priorityOrder[index];
    sortedList.insert(position-1,item);

print("\n Items After Sorting According to Priority: ", end=' ');
print(sortedList); #Expected Output: ["Formal Shoe", "White Shirt", "Black Shirt", "MI Phone", "Lather Jacket","Macbook","Rolex Watch"]
