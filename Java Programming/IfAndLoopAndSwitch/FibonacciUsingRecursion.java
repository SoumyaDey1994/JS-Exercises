import java.util.*;

class FibonacciUsingRecursion
{
	public static void main(String a[])
	{
		Scanner scan= new Scanner(System.in);
		System.out.print("\n\nEnter Number of Items you want to Print in Series: ");
		int numberOfItems= scan.nextInt();
		System.out.print("\n\nEnter First Number of the Series: ");
		int firstNumber= scan.nextInt();
		System.out.print("\n\nEnter Second Number of the Series: ");
		int secondNumber= scan.nextInt();
		System.out.print("\n\nFibonacci Series Becomes: ");
		for(int i=0; i<numberOfItems; i++ )
			System.out.print(displayFibonacciSeries(firstNumber,secondNumber,i)+" ");
	}
	
	static int displayFibonacciSeries(int firstNumber,int secondNumber,int i)
	{
		if(i==0)
			return firstNumber;
		else if(i==1)
			return secondNumber;
		else
			return displayFibonacciSeries(firstNumber,secondNumber,i-1) + displayFibonacciSeries(firstNumber,secondNumber,i-2);
	}
}