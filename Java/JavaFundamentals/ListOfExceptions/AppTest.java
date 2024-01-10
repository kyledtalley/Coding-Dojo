
public class AppTest {
    public static void main(String[] args) throws Exceptional{
        Exceptional test = new Exceptional();
        try{
            test.Arr();
        }catch (Exception e){
            System.out.println(e);
        }
    }
}
