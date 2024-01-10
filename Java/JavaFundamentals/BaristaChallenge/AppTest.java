package Java.JavaFundamentals.BaristaChallenge;

public class AppTest {
    public static void main(String[] args) {
        Item mocha = new Item("mocha", 4.25);
        Item coffee = new Item("coffee", 1.25);
        Item latte = new Item("latte", 2.75);
        Item cappuccino = new Item("cappuccino", 3.00);

        Order guest1 = new Order();
        Order guest2 = new Order();

        Order cindhuri = new Order("Cindhuri");
        Order kyle = new Order("Kyle");
        Order corey = new Order("Corey");

        cindhuri.addItem(coffee);
        cindhuri.addItem(cappuccino);
        cindhuri.setReady(true);
        Boolean isReadyCindhuri = cindhuri.getReady();
        cindhuri.getStatusMessage(isReadyCindhuri);
        }
    }
}
