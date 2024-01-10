import java.util.ArrayList;
public class TestOrders {

	public static void main(String[] args) {

		Item mocha = new Item("Mocha", 4.5);
        Item latte = new Item("Latte", 3.0);
        Item dripCoffee = new Item("Drip Coffee", 2.25);
        Item cappuccino = new Item("Cappuccino", 2.75);

        // Order variables -- order1, order2 etc.

        ArrayList<Item> cindhuriItems = new ArrayList<>();
        cindhuriItems.add(latte);
        cindhuriItems.add(mocha);
        Order order1 = new Order("Cindhuri", (latte.price + mocha.price), false, cindhuriItems);

        ArrayList<Item> jimmyItems = new ArrayList<>();
        jimmyItems.add(dripCoffee);
        Order order2 = new Order("Jimmy", dripCoffee.price, false, jimmyItems);

        ArrayList<Item> noahItems = new ArrayList<>();
        noahItems.add(cappuccino);
        Order order3 = new Order("Noah", cappuccino.price, false, noahItems);


        ArrayList<Item> samItems = new ArrayList<>();
        samItems.add(latte);
        Order order4 = new Order("Sam", latte.price, false, samItems);


        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("\n\nName: %s\n", order1.name);
        System.out.printf("Total: %1.2f\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.printf("\n\nName: %s\n", order2.name);
        System.out.printf("Total: %1.2f\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);

        System.out.printf("\n\nName: %s\n", order3.name);
        System.out.printf("Total: %1.2f\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);

        System.out.printf("\n\nName: %s\n", order4.name);
        System.out.printf("Total: %1.2f\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);


        order1.ready = true;
        System.out.println("\nORDER 1 NOW READY!\n");
        System.out.printf("\n\nName: %s\n", order1.name);
        System.out.printf("Total: %1.2f\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        order4.total += (latte.price * 2);
        System.out.println("\nThank you for buying 2 more lattes! Your total cost for the day is reflected below.");
        System.out.printf("\n\nName: %s\n", order4.name);
        System.out.printf("Total: %1.2f\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);

        order2.ready = true;
        System.out.println("\nORDER 2 NOW READY!\n");
        System.out.printf("\n\nName: %s\n", order2.name);
        System.out.printf("Total: %1.2f\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);
	}

}
