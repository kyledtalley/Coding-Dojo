
public class BankAccountTest {
    public static void main(String[] args) {

        BankAccount kyle = new BankAccount();
        kyle.setCheckingDeposit(2517.18);
        kyle.setCheckingDeposit(917.12);
        kyle.setSavingsDeposit(5000.00);
        kyle.setCheckingWithdraw(1900.00);
        kyle.setSavingsWithdraw(1200.00);
        kyle.getBalance();

        int accounts = BankAccount.howManyAccounts();
        System.out.format("\nThere are %d active bank accounts.\n", accounts);
        double vault = BankAccount.vaultMoney();
        System.out.format("\nThere is $%.2f in the bank's vault\n", vault);

        BankAccount corey = new BankAccount();
        corey.setCheckingDeposit(257.80);
        corey.setCheckingDeposit(9.12);
        corey.setSavingsDeposit(500.00);
        corey.setCheckingWithdraw(100.00);
        corey.setSavingsWithdraw(100.00);
        corey.getBalance();

        accounts = BankAccount.howManyAccounts();
        System.out.format("\nThere are %d active bank accounts.\n", accounts);
        vault = BankAccount.vaultMoney();
        System.out.format("\nThere is $%.2f in the bank's vault\n", vault);

        BankAccount lucy = new BankAccount();
        lucy.setCheckingDeposit(12000.60);
        lucy.setSavingsDeposit(900023.11);
        lucy.getBalance();
        lucy.setCheckingWithdraw(999.99);
        lucy.getBalance();

        accounts = BankAccount.howManyAccounts();
        System.out.format("\nThere are %d active bank accounts.\n", accounts);
        vault = BankAccount.vaultMoney();
        System.out.format("\nThere is $%.2f in the bank's vault\n", vault);
    }
}
