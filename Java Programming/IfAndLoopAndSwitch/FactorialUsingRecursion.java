import java.util.*;

class FactorialUsingRecursion
{
	static int findFactorial(int number)
	{
		if(number==0 || number==1)
			return number;
		else
			return number*findFactorial(number-1);
	}
	
	public static void main(String [] a)
	{
		Scanner scan= new Scanner(System.in);
		System.out.print("\n\nEnter a Number to find its Factorial Value: ");
		int number= scan.nextInt();
		
		int factorialValue=findFactorial(number);
		System.out.printf("\nFactorial value of %d is: %d\n", number, factorialValue);
	}
	
}