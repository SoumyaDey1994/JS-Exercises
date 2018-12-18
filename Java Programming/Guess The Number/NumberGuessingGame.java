import java.util.Scanner;
class NumberGuessing
{
	static boolean checkUserInputAgainstComputer(String number, int computerSelection)
	{
		String numb=number;
		boolean isNumeric = number.chars().allMatch( Character::isDigit );
		if(!isNumeric)
			System.out.println("\nOops!!!! It seems you not entered a number..Please Enter an integer Number");
		else if(numb=="")
			System.out.println("\nOops!!!! You have not entered a number at all..Please Enter a Number");
		else if(Integer.parseInt(numb) > 	computerSelection)
			System.out.println("\nOops....Wrong Guess!!!!"+" Your number "+numb+" is Bigger than actual Number");
		else if(Integer.parseInt(numb) < 	computerSelection)
			System.out.println("\nOops....Wrong Guess!!!!"+" Your number "+numb+" is Smaller than actual Number");
		else if(Integer.parseInt(numb) == computerSelection)
			return true;
		return false;
	}
	
	static String takeUserInput(Scanner scan)
	{
		System.out.print("\nGuess the Number(Between 1 to 100): ");
		String number=scan.next();
		
		return number;
	}
	
	static int selectNumber()
	{
		int computerSelection=(int)((Math.random()*100)+1);
		return computerSelection;
	}
	
	public static void main(String [] a)
	{
		int count=0, computerSelection;
		String number;
		boolean match;
		Scanner scan= new Scanner(System.in);
		System.out.println("\n\t.......Welcome to Number Guessing Game........\n");
		System.out.println("\tThe System has Selected a Number.You need to guess that Cumber Correvtly");
		System.out.println("\t.........So Let's Play It.........\n");
		computerSelection=selectNumber();
		do
		{
			number=takeUserInput(scan);
			match=checkUserInputAgainstComputer(number,computerSelection);
			count++;
			if(match)
			{
				System.out.println("\n\t...........Congratulations!!!! You Guessed it Right.........");
				System.out.println("\tIt takes "+count+" attempt for You to Find the number correctly");
				System.out.print("\nWant to Play it Again???? Say \'Yes\' or \'No\' : ");
				String userChoice=scan.next();
				if(userChoice.equalsIgnoreCase("yes"))
				{
					computerSelection=selectNumber();
					count=0;
					continue;
				}
				else
					break;
			}
			
		}while(true);
		
	}
}