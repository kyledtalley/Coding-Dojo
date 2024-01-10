package Java.JavaFundamentals.BaristaChallenge;

import java.util.ArrayList;

public class Order {
    private String name;
    private double total = 0;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<>();L

    public Order(){
        this.name = "Guest";
        ArrayList<Item> items = new ArrayList<>();
    }

    public Order(String name){
        this.name = name;
        ArrayList<Item> items = new ArrayList<>();
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public Boolean getReady(){
        return ready;
    }
    public void setReady(Boolean ready){
        this.ready = ready;
    }

    public void addItem(Item item){
        items.add(item);
    }

    public String getStatusMessage(Boolean ready){
        if(ready){

            String isReady = "Your order is ready.\n";
            return isReady;
        }
        else{
            String isNotReady = "Thank  you for waiting. Your order will be ready soon.\n";
            return isNotReady;
        }
    }

    public double getOrderTotal(ArrayList<Item> items){
        double sum = 0.0;
        for (Item item : items){
            for (Item price : items){
                sum += p;
                System.out.println("Sum: " + sum);
            }
        }
        return sum;
    }

    public void displayOrderFinal(ArrayList<Item> items){

        for (Item item : items){
            System.out.println(item.name + "" );
            System.out.println("- " + ;
        }
        System.out.println("Total: " + getOrderTotal());
    }
}
