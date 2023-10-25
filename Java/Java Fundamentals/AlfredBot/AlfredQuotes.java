import java.util.Date;
import java.text.SimpleDateFormat;

public class AlfredQuotes {
    Date date = new Date();

    public String basicGreeting(String name) {
        String greeting = String.format("Hello, %s. Lovely to see you. How are you?", name);
        return greeting;
    }

    public String dateAnnouncement() {
        // YOUR CODE HERE
        return "The current date is " + date;
    }

    public String respondBeforeAlexis(String conversation) {
        int a = conversation.indexOf("Alexis");
        int c = conversation.indexOf("Alfred");
        if (a >= 0) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        }
        else if (c >= 0){
            return "At your service. As you wish, naturally.";
        }
        else{
            return "Right. And with that I shall retire.";
        }

    }

    // NINJA BONUS
    // See the specs to overload the guestGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have
    // learned!
}
