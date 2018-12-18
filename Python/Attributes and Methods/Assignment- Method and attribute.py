class PStone:
    def addStone(self, stone):
        self.stoneList=[];
        self.stoneList.append(stone);
        if len(self.stoneList) > 5:
            self.stoneList.remove(stoneList[1]);
        

    def printStones(self):
        print("Stones Present Now: ", end=' ');
        print(self.stoneList);

possession1=PStone();
possession2=PStone();
possession1.addStone("One");
possession1.addStone("Two");
possession1.addStone("Three");
possession1.addStone("Four");
possession1.addStone("Five");
print("Stones in Possession 1: ");
possession1.printStones();
