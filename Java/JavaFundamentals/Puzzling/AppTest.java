import java.util.Arrays;

public class AppTest {

    public static void main(String[] args) {
        PuzzleJava test = new PuzzleJava();
        System.out.println("\n ------ 10 Random Numbers ------\n ");
        System.out.println(test.getTenRolls());

        System.out.println("\n ------ Random Letter ~~~ooooo~~~~ ------\n");
        System.out.println(test.getRandomLetter());

        System.out.println("\n ------ One Random Password ------ \n");
        System.out.println(test.generatePassword());

        System.out.println("\n ------ New Password Set ------- \n");
        System.out.println(Arrays.toString(test.getNewPasswordSet(8)));

        System.out.println("\n ------ SENSEI CHALLENGE ~~oooo~~ ------");
        Integer[] arr = new Integer[10];
        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 2;
        arr[3] = 3;
        arr[4] = 4;
        arr[5] = 5;
        arr[6] = 6;
        arr[7] = 7;
        arr[8] = 8;
        arr[9] = 9;

        System.out.println(Arrays.toString(test.randomizeArray(arr)));
        System.out.println("\n");


    }
}
