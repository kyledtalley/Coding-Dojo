import java.util.ArrayList;

public class CafeUtil{

    public int getStreakGoal(){
        int goal = 0;
        for (int i = 0; i <= 10; i++){
            goal += i;
        }
        return goal;
    }

    public double getOrderTotal(double[] prices){
        double sum = 0.0;
        for (double p : prices){
            sum += p;
            System.out.println("Sum: " + sum);
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for (int i = 0; i < menuItems.size(); i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }
    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name:");
        String username = System.console().readLine();
        customers.add(username);
        System.out.println("Hello, " + username + "!");
        System.out.printf("There are %d people in front of you.", (customers.size()-1));
    }
}
