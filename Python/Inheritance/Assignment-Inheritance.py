class Furniture:
    #typeOfFurniture="Teakwood";
    def displayTypeOfFurniture(self):
        self.typeOfFurniture="Takewood";
        print(self.typeOfFurniture);

class Chair(Furniture):
    typeOfWood="Normal Wood"
    __no_of_legs=4

chair=Chair();
print("Type of Furniture is: " + str(chair.displayTypeOfFurniture()));
print();
print("Type of Wood Initially was: {}" .format(chair.typeOfWood));
chair.typeOfWood="SandleWood";
print("Type of Wood After Modification: {}" .format(chair.typeOfWood));
print("No of Legs of Chair: "+ str(chair._Chair__no_of_legs));
