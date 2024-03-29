import java.util.ArrayList;
import java.util.Arrays;
public class TestCafe {
    public static void main(String[] args) {

    /*
      You will need add 1 line to this file to create an instance
      of the CafeUtil class.
      Hint: it will need to correspond with the variable name used below..
    */

        /* ============ App Test Cases ============= */
        CafeUtil appTest = new CafeUtil();
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal());

        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n",appTest.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test-----");

        ArrayList<String> menu = new ArrayList<String>();
        menu.add("Drip Coffee");
        menu.add("Cappuccino");
        menu.add("Latte");
        menu.add("Mocha");
        appTest.displayMenu(menu);

        System.out.println("\n----- Customer Waiting List -----");
        ArrayList<String> customers = new ArrayList<String>();
        appTest.addCustomer(customers);
    }
}
