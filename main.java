import java.util.*;

public class FirstNonRepeating {

    public static char firstNonRepeatingChar(String str) {
        HashMap<Character, Integer> map = new HashMap<>();

        // Step 1: Count frequency
        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        // Step 2: Find first non-repeating
        for (char ch : str.toCharArray()) {
            if (map.get(ch) == 1) {
                return ch;
            }
        }

        return '_'; // if no non-repeating character
    }

    public static void main(String[] args) {
        String str = "swiss";
        System.out.println(firstNonRepeatingChar(str)); // Output: w
    }
}
