import java.util.*;

class VariableAndMethods
{
	public static void main(String[] args)
	{
		greetingToUser("Soumya");
		System.out.println(".....Welcome Back to Java Programming.........");
		System.out.println();
		
		Scanner sc= new Scanner(System.in);
		System.out.print("Enter First Number: ");
		int firstNumber= sc.nextInt();
		System.out.print("Enter Second Number: ");
		int secondNumber= sc.nextInt();
		
		int sum= getSum(firstNumber,secondNumber);
		int subtractResult= getSubtractValue(firstNumber,secondNumber);
		int multiplicationResult= getMultiplicationValue(firstNumber,secondNumber);
		double divisionResult= getDivisionValue(firstNumber,secondNumber);
		int modulusResult= getModulusValue(firstNumber,secondNumber);
		
		System.out.println("\nAddition Result of "+firstNumber+" & "+ secondNumber+" is: "+ sum);
		System.out.println("\nSubtraction Result of "+firstNumber+" & "+ secondNumber+" is: "+ subtractResult);
		System.out.println("\nMultiplication Result of "+firstNumber+" & "+ secondNumber+" is: "+ multiplicationResult);
		System.out.println("\nDivision Result of "+firstNumber+" & "+ secondNumber+" is: "+ divisionResult);
		System.out.println("\nModulus of "+firstNumber+" divided by "+ secondNumber+" is: "+ modulusResult);
		System.out.println("\n"+firstNumber+" To The Power "+ secondNumber+" is: "+ toThePower(firstNumber,secondNumber));
		
		bidGoodBye("Soumya");
		
	}
	
	static void greetingToUser(String name)
	{
		System.out.println("............Hello "+name+" ............");
	}
	
	static int getSum(int firstNumber, int secondNumber)
	{
		return firstNumber + secondNumber;
	}
	
	static int getSubtractValue(int firstNumber, int secondNumber)
	{
		return firstNumber - secondNumber;
	}
	
	static int getMultiplicationValue(int firstNumber, int secondNumber)
	{
		return firstNumber * secondNumber;
	}
	
	static int getModulusValue(int firstNumber, int secondNumber)
	{
		return firstNumber % secondNumber;
	}
	
	static double getDivisionValue(int firstNumber, int secondNumber)
	{
		return firstNumber / secondNumber;
	}
	
	static double toThePower(int firstNumber, int secondNumber)
	{
		return Math.pow((double)firstNumber,(double)secondNumber);
	}
	
	static void bidGoodBye(String name)
	{
		System.out.println("............Bye "+name+" !!!!"+ " See You Soon !!!!");
	}
}