wristWatchBrand=('Timex','Sonata','Titan','Rolex');
print("Tuple Before Editing: {}" .format(wristWatchBrand));
wristWatchBrandList= list(wristWatchBrand);
print("Tuple After converting to List: {}" .format(wristWatchBrandList));
wristWatchBrandList.remove('Timex');
wristWatchBrand=tuple(wristWatchBrandList);
print("After removing element and converting to Tuple: {}" .format(wristWatchBrand));
