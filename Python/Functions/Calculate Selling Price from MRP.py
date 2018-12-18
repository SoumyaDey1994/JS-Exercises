def calculateSP(MRP, discount):
    sp= (MRP * (100- discount))/100;
    return sp;

spOfShirt= calculateSP(1200, 15);
print("Selling Price of Shirt: "+ str(spOfShirt));
spOfTrouser= calculateSP(1900, 20);
print("Selling Price of Pant: "+ str(spOfTrouser));
