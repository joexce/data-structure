import java.util.ArrayList;

public class DnaPair {
    public static void main(String[] args){

    System.out.print(dnaPair("GCG"));

    }

    public static ArrayList<Character> dnaPair(String dna){

        int dnaLength = dna.length();

        ArrayList<Character> dnaResult = new ArrayList<Character>();

        for(int i = 1; i<= dnaLength; i++){
            char myChar = dna.charAt(i - 1);

            if(myChar == 'A') {
                dnaResult.add('A');
                dnaResult.add('T');
            }
            else if(myChar == 'T'){
                dnaResult.add('T');
                dnaResult.add('A');
            } else if(myChar == 'C'){
                dnaResult.add('C');
                dnaResult.add('G');
            } else if(myChar == 'G'){
                dnaResult.add('G');
                dnaResult.add('C');
            }


        }

        return dnaResult;
    }
}
