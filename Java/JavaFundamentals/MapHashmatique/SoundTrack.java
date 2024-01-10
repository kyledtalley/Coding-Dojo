import java.util.HashMap;
import java.util.Set;

public class SoundTrack {
    public void setList(){
        HashMap<String, String> soundTrack = new HashMap<String, String>();
        soundTrack.put("Yesterday", "I believe in yesterday");
        soundTrack.put("Imagine", "Imagine all the people, living life in peace");
        soundTrack.put("Baby Shark", "BABY SHARK DO DOO DO DO DOO");
        soundTrack.put("All Along the Watchtower", "There's too much confusion, I can't get no relief");
        String mccartney = soundTrack.get("Yesterday");
        System.out.println("\n ------ ONE LYRIC BY TITLE ------ \n");
        System.out.println(mccartney);
        Set<String> titles = soundTrack.keySet();
        System.out.println("\n ------ ALL TRACKS AND LYRICS ------ \n");

        for(String title : titles){
            System.out.println(title);
            System.out.println(soundTrack.get(title));
        }
        System.out.println("\n");
    }
}
