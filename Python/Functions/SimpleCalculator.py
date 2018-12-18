def calculateResult(firstNo, SecondNo, operation):
    if (operation== "+"):
        return firstNo + SecondNo;
    elif(operation== "-"):
        return firstNo - SecondNo;
    elif(operation== "%"):
        return firstNo % SecondNo;
    elif(operation== "*"):
        return firstNo * SecondNo;
    elif(operation== "/"):
        return firstNo / SecondNo;
    elif(operation== "**"):
        return firstNo ** SecondNo;
    else:
        return "invalid operation";

print("Sum of %s and %s is %s" %(156, 447, calculateResult(156, 447, '+')));
print("Mutiplication of %s and %s is %s" %(15, 22, calculateResult(15, 22, '*')));
print("Subtraction of %s and %s is %s" %(956, 339, calculateResult(956, 339, '-')));
print("Modulus of %s and %s is %s" %(2156, 899, calculateResult(2156, 899, '%')));
print("Division of %s and %s is %s" %(368, 145, calculateResult(368, 145, '/')));
print("%s to the Power %s is %s" %(5, 4, calculateResult(5, 4, '**')));
