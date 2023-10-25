public class CafeJava {
    public static void main(String[] args){
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = "Your order will be ready shortly";
        String readyMessage = "Your order is ready";
        String displayTotalMessage = "Your total is $";

        double mochaPrice = 3.5;
        double coffeePrice = 1.0;
        double lattePrice = 3.0;
        double cappuccinoPrice = 1.5;

        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;


        System.out.println(generalGreeting + customer1);
        if(isReadyOrder1){
            System.out.println(readyMessage);
            System.out.println("You ordered a mocha.");
            System.out.println(displayTotalMessage + mochaPrice);
        }
        else{
            System.out.println(pendingMessage);
        }
        System.out.println("");


        System.out.println(generalGreeting + customer2);
        if(isReadyOrder2){
            System.out.println(readyMessage);
            System.out.println("You ordered 2 lattes.");
            System.out.println(displayTotalMessage + (lattePrice + lattePrice));
        }
        else{
            System.out.println(pendingMessage);
        }
        System.out.println("");


        System.out.println(generalGreeting + customer3);
        if(isReadyOrder3){
            System.out.println(readyMessage);
            System.out.println("We changed your order from a coffee to a latte like you requested, the difference of the two prices has been added to your total.");
            System.out.println(displayTotalMessage + (lattePrice - coffeePrice));
        }
        else{
            System.out.println(pendingMessage);
        }
        System.out.println("");


        System.out.println(generalGreeting + customer4);
        if(isReadyOrder4){
            System.out.println(readyMessage);
            System.out.println("You ordered 1 cappuccino.");
            System.out.println(displayTotalMessage + cappuccinoPrice);
        }
        else{
            System.out.println(pendingMessage);
        }
        System.out.println("");
    }
}
