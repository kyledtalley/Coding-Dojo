public class StringAlgos{

    public String reverseString(String s){
    //Reverse a string
        String result = "";
        Boolean test = false;

        for (int i = s.length() - 1; i >= 0; i--){
            result += s.charAt(i);
        }
        return result;
    }
    // public String reverseString(String s){
    //     String result = "";

    //     int endCharIndex = s.length() - 1;;
    //     int startCharIndex = 0;

    //     while(endCharIndex > startCharIndex){

    //         if (s.charAt(startCharIndex) != (s.charAt(endCharIndex))){

    //             endCharIndex--;
    //             startCharindex++;
    //         }
    // }
}
