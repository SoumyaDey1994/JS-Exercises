import java.util.Scanner;
import java.util.ArrayList;
class SumOfDigitIsPrime
{
	static int getDigitSum(int number)
	{
		int sum=0, digit;
		while(number >=1)
		{
			digit=number%10;
			sum+=digit;
			number/=10;
		}
		return sum;
	}
	
	static boolean isPrime(int digitSum)
	{
		int i;
		for(i=2; i<=Math.sqrt(digitSum); i++)
		{
			if(digitSum%i == 0)
				break;
		}
		if(i> Math.sqrt(digitSum))
			return true;
		else 
			return false;
	}
	
	static void displayList(ArrayList resultList)
	{
		System.out.println("\nList of Numbers whose Digit Sum is Prime Are:-- ");
		for(int i=0; i<resultList.size(); i++)
			System.out.print(resultList.get(i)+"\t");
		
		System.out.println();
	}
	public static void main(String [] args)
	{
		int digitSum;
		ArrayList<Integer> resultList= new ArrayList<>();
		Scanner input= new Scanner(System.in);
		System.out.print("\nEnter Lower Bound of Range: ");
		int lowerBound= input.nextInt();
		System.out.print("\nEnter Upper Bound of Range: ");
		int upperBound= input.nextInt();
		
		for(int number=lowerBound; number<=upperBound; number++)
		{
			digitSum=getDigitSum(number);
			if (isPrime(digitSum))
				resultList.add(number);
		}
		
		displayList(resultList);
	}
}