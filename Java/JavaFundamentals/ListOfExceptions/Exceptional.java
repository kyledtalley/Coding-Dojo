import java.util.ArrayList;

public class Exceptional extends Exception{
    public void Arr() throws Exceptional{
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        for(int i = 0; i < myList.size(); i++) {

            Integer castedValue = (Integer) myList.get(i);
            if(castedValue == null){

            }
        }
        throw new Exceptional();
    }


}
