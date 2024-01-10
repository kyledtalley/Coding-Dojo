public class BooleanAlgos{
    public Boolean isPalindrome(String s){
        //Given a string, return true if it is a palindrome
        //Create a container to hold all the letters that we loop through
        String result = "";
        for (int i = s.length() - 1; i >= 0; i--){
            result += s.charAt(i);
        }
        return s.equals(result);
    }


        String result = "";

        int endCharIndex = s.length() - 1;
        int startCharIndex = 0;

        while(endCharIndex > startCharIndex){

            if (s.charAt(startCharIndex) != (s.charAt(endCharIndex))){
                return false;
            }
                endCharIndex--;
                startCharindex++;

        }
        return true;
}
