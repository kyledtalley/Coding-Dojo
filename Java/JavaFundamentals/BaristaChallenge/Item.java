package Java.JavaFundamentals.BaristaChallenge;

public class Item {
    private String name;
    private double price;

    public Item(){
    }

    public Item(String name, double price){
        this.name = name;
        this.price = price;
    }

    public String getName(){
        return name;
    }
    public void setName(String n){
        this.name = n;
    }

    public double getPrice(){
        return price;
    }
    public void setPrice(double p){
        this.price = p;
    }
}
