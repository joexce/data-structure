function findMeloveMe(str) {

    const wordsdb = "abcdefghijklmnopqrstuvwxyz";
    const wordsdbLength = wordsdb.length;
    const strLength = str.length;
    const firstWord = str[0];

    let i = 0;
    let j = 0;
    let x = 0;
    let found = false;
    let wordFound;
    let strI =0;

    for (j = 0; j < wordsdbLength; j++) {

        if(wordsdb[j] === firstWord){
            x = j;
        }
    }

    for (i = 0; i < wordsdbLength; i++) {

        if(i >= x){
        if(wordsdb[i] !== str[strI] && found === false && strI < strLength){
            found = true;
            wordFound = wordsdb[i];
        }
        strI = strI + 1;
    }
    }
      return wordFound;

}

console.log(findMeloveMe("abcef"));