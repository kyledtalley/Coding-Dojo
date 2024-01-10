import java.util.ArrayList;
public class Order {
	public String name;
    public double total;
    public boolean ready;
    public ArrayList<Item> items = new ArrayList<>();
    
	public Order (String name, double total, boolean ready, ArrayList<Item> latte){
        this.name = name;
        this.total = total;
        this.ready = ready;

    }
}
