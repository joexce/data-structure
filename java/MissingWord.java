public class MissingWord {
    public static void main(String[] args){

        System.out.println(findMe("abdefghijklmnop"));

    }

    public static String findMe(String words){

        String result = "not found";

        String wordsDb = "abcdefghijklmnopqrstuvwxyz";

        int wordsLength = words.length();
        int wordsDbLength = wordsDb.length();
        boolean found = false;
        char foundWord = 0;

            for (int i = 0; i <= wordsLength - 1; i++) {

                for (int j = 0; j <= wordsDbLength - 1; j++) {

                    if(j < wordsLength) {
                        char wordsChar = words.charAt(i);
                        char wordsDbChar = wordsDb.charAt(j);

                        if (wordsChar != wordsDbChar && !found) {
                            found = true;
                            result = "" + wordsDb.charAt(j);
                        } else {
                            i += 1;
                        }
                    }

                }

            }


        return result;

    }
}
