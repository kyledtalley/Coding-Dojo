import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
public class DataStructures{
    //Fixed Arrays

    public void displayFixedArray(){

        String[] strArray = new String[6];
        System.out.println(strArray);
        System.out.println(Arrays.toString(strArray));
        // int[] numArray = {1,2,3,4,5,6};
    }

    public void displayDynamicArray(){
        ArrayList<Integer> dynamicNumArray = new ArrayList<>();

        System.out.println(dynamicNumArray.size());

        //Add to ArrayList == .add()

        dynamicNumArray.add(10);
        dynamicNumArray.add(20);
        dynamicNumArray.add(30);
        dynamicNumArray.add(40);
        dynamicNumArray.add(50);
        dynamicNumArray.add(0, 100);


        dynamicNumArray.set(2,300);

        dynamicNumArray.remove(1);

        //get value in ArrayList
        dynamicNumArray.get(0);

        System.out.println(dynamicNumArray);

        System.out.println(dynamicNumArray.size());


    }

    //Hashmaps/Objects/Dictionaries
    public void displayHashMap(){
        HashMap<String, String> names = new HashMap<>();

        //Add to HashMap
        names.put("0", "Kyle");
        names.put("1", "Zach");
        names.put("2", "Jamie");
        names.put("3", "Ryan");
        names.put("4", "Ahmad");

        //Getting value by keys
        String kyle = names.get("0");
        System.out.println(kyle);
        System.out.println(names);

        names.keySet();//returns a set of the keynames

        for(String key : names.keySet()){
            System.out.println(names.get(key));
        }

    }
}
