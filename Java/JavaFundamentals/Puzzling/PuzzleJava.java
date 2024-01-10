import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {

    public ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> dynamicNumArray = new ArrayList<>();
        Random randMachine = new Random();
        Integer randTmp = 0;



        for (int i = 0; i < 10; i++){
            randTmp = randMachine.nextInt(20);
            dynamicNumArray.add(randTmp);
        }

        return dynamicNumArray;
    }

    public String getRandomLetter(){

        String[] s = new String[26];
        s[0] = "a";
        s[1] = "b";
        s[2] = "c";
        s[3] = "d";
        s[4] = "e";
        s[5] = "f";
        s[6] = "g";
        s[7] = "h";
        s[8] = "i";
        s[9] = "j";
        s[10] = "k";
        s[11] = "l";
        s[12] = "m";
        s[13] = "n";
        s[14] = "o";
        s[15] = "p";
        s[16] = "q";
        s[17] = "r";
        s[18] = "s";
        s[19] = "t";
        s[20] = "u";
        s[21] = "v";
        s[22] = "w";
        s[23] = "x";
        s[24] = "y";
        s[25] = "z";

        Random randMachine = new Random();

        int rndTmp =randMachine.nextInt(25);

        String letter = s[rndTmp];

        return letter;
    }

    public String generatePassword(){
        String[] s = new String[26];
        String pw = new String();

        s[0] = "a";
        s[1] = "b";
        s[2] = "c";
        s[3] = "d";
        s[4] = "e";
        s[5] = "f";
        s[6] = "g";
        s[7] = "h";
        s[8] = "i";
        s[9] = "j";
        s[10] = "k";
        s[11] = "l";
        s[12] = "m";
        s[13] = "n";
        s[14] = "o";
        s[15] = "p";
        s[16] = "q";
        s[17] = "r";
        s[18] = "s";
        s[19] = "t";
        s[20] = "u";
        s[21] = "v";
        s[22] = "w";
        s[23] = "x";
        s[24] = "y";
        s[25] = "z";

        Random randMachine = new Random();


        for(int i = 0; i < 8; i++){
            int rndTmp =randMachine.nextInt(25);
            pw += s[rndTmp];
        }
        return pw;
    }

    public String[] getNewPasswordSet(int arrLength){
        String[] s = new String[26];
        String pw = new String();
        String[] pwSet = new String[arrLength];

        s[0] = "a";
        s[1] = "b";
        s[2] = "c";
        s[3] = "d";
        s[4] = "e";
        s[5] = "f";
        s[6] = "g";
        s[7] = "h";
        s[8] = "i";
        s[9] = "j";
        s[10] = "k";
        s[11] = "l";
        s[12] = "m";
        s[13] = "n";
        s[14] = "o";
        s[15] = "p";
        s[16] = "q";
        s[17] = "r";
        s[18] = "s";
        s[19] = "t";
        s[20] = "u";
        s[21] = "v";
        s[22] = "w";
        s[23] = "x";
        s[24] = "y";
        s[25] = "z";

        Random randMachine = new Random();

        for (int x = 0; x < arrLength; x++){
            pw = "";
            for(int i = 0; i < 8; i++){
                int rndTmp =randMachine.nextInt(25);
                pw += s[rndTmp];
            }
            pwSet[x] = pw;
        }
        return pwSet;
    }

    public Integer[] randomizeArray(Integer[] arr){

        Random randMachine = new Random();
        Integer[] shuffledArr = new Integer[arr.length];

        for(int i = 0; i < arr.length; i++){
            int tmp = 0;
            int rndTmp =randMachine.nextInt(9);
            tmp = arr[i];
            arr[i] = arr[rndTmp];
            arr[rndTmp] = tmp;
            shuffledArr[i] = arr[i];
        }
        return shuffledArr;
    }
}
