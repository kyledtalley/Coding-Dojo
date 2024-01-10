
public class BankAccount {
    private double checkingBalance = 0;
    private double savingsBalance = 0;
    private static int accounts = 0;
    private static double totalMoney = 0;

    public BankAccount(){
        accounts++;
        totalMoney += (checkingBalance+savingsBalance);
    }


    public void getChecking(){
        System.out.format("Checking account holds $%.2f\n", checkingBalance);
    }
    public void setCheckingDeposit(double number){
        System.out.format("Deposit of $%.2f successful\n", number);
        this.checkingBalance += number;
        totalMoney += number;
    }


    public void getSavings(){
        System.out.format("Savings account holds $%.2f\n", savingsBalance);
    }
    public void setSavingsDeposit(double number){
        System.out.format("Deposit of $%.2f successful\n", number);
        this.savingsBalance += number;
        totalMoney += number;
    }

    public void setCheckingWithdraw(double number){
        if(number <= checkingBalance){
            this.checkingBalance -= number;
            totalMoney -= number;
            System.out.println("\nWithdrawal from checking account successful.\n");
        }
        else{
            System.out.println("\nWARNING: Not enough funds to complete withdrawal from checking account.\n");
        }

    }
    public void setSavingsWithdraw(double number){
        if(number <= savingsBalance){
            this.savingsBalance -= number;
            totalMoney -= number;
            System.out.println("\nWithdrawal from checking account successful.\n");
        }
        else{
            System.out.println("\nWARNING: Not enough funds to complete withdrawal from checking account.\n");
        }

    }

    public void getBalance(){
        double total = 0;
        total = (this.checkingBalance + this.savingsBalance);
        System.out.format("\nTotal balance of both accounts is: $%.2f\n", total);
    }

    public static int howManyAccounts(){
        return accounts;
    }
    public static double vaultMoney(){
        return totalMoney;
    }

}

