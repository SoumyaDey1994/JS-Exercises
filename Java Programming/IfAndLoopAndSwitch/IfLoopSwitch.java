import java.util.*;

class ifLoopSwitch
{
	static int getUserChoiceFromMenu(Scanner scan)
	{
		System.out.println();
		System.out.println("..........Enter 1 to Print Odd Numbers within a Range");
		System.out.println("..........Enter 2 to Print Prime Numbers within a Range");
		System.out.println("..........Enter 3 to Print Amstrong Numbers within a Range");
		System.out.println("..........Enter 4 to Print Quit");
		System.out.print("\n\nEnter Your Choice: ");
		int choice= scan.nextInt();
		return choice;
	}
	
	static int[] getLimits(Scanner scan)
	{
		int limit[]= new int[2];
		System.out.print("\nEnter Lower Limit: ");
		limit[0]=scan.nextInt();
		System.out.print("\nEnter Upper Limit: ");
		limit[1]=scan.nextInt();
		
		return limit;
	}
	
	static void displayOddNumbers(int lowerBound, int upperBound)
	{
		System.out.println("List of Odd Numbers within Range of "+lowerBound+" and " +upperBound+" are");
		for(int number=lowerBound; number<=upperBound; number++)
		{
			if(number%2==1)
				System.out.println(number);
		}
	}
	
	static void displayPrimeNumbers(int []limits)
	{
		int lowerLimit, upperLimit, flag;
		lowerLimit=limits[0];
		upperLimit=limits[1];
		
		System.out.println("List of Prime Numbers within Range of "+lowerLimit+" and " +upperLimit+" are");
		for(int number=lowerLimit; number<= upperLimit; number++)
		{
			flag=0;
			for(int j=2; j<=Math.sqrt(number);j++)
			{
				if(number%j==0)
				{
					flag=1;
					break;
				}
			}
			if(flag==0)
				System.out.println(number);
		}
	}
	
	static void displayAmstrongNumbers(int []limits)
	{
		int lowerLimit, upperLimit, temp=0, digit, newNumber=0;
		lowerLimit=limits[0];
		upperLimit=limits[1];
		
		System.out.println("List of Prime Amstrong within Range of "+lowerLimit+" and " +upperLimit+" are");
		for(int number=lowerLimit; number<= upperLimit; number++)
		{
			temp= number;
			while(temp >= 1)
			{
				digit=temp%10;
				newNumber+=(int)Math.pow(digit,3);
				temp=(int)(temp/10);
			}
			if(number==newNumber)
				System.out.println(number);
			
			newNumber=0;
			
		}
	}
	
	public static void main(String [] args)
	{
		int choice;
		int lowerBound, upperBound;
		int limits[]= new int[2];
		Scanner scan= new Scanner(System.in);
		do{
			choice=getUserChoiceFromMenu(scan);
			switch(choice)
			{
				case 1:
						System.out.print("\nEnter Lower Limit: ");
						lowerBound=scan.nextInt();
						System.out.print("\nEnter Lower Limit: ");
						upperBound=scan.nextInt();
						displayOddNumbers(lowerBound, upperBound);
						break;
				case 2:
						limits= getLimits(scan);
						displayPrimeNumbers(limits);
						break;
				case 3:
						limits= getLimits(scan);
						displayAmstrongNumbers(limits);
						break;
				case 4:
						System.exit(0);
				default:
						System.out.println("Invalid Choice!!!! Please Chhose a correct option");
						
			}
		}while(choice!=4);
		System.out.println(".........Good Bye!!!! See you soon....");
		
	}
}