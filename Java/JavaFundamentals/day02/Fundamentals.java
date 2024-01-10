public class Fundamentals {
    public void greeting(){
        System.out.println("Hello world");
    }

    public double implicitTypeCastingExample(){
        int i = 10;
        double d = 20.25;

        double result = i + d;
        return result;
    }

    public void explicitTypeCastingExample(){
        String myString = "My name is";
        String name = "George";

        String result = myString + " " + name;
        result = myString.concat(name);

        String formattedString = String.format("I love %s but please call %d", "rabies", 911);


    }
}
