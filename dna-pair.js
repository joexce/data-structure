/*
dna-pair
A - T
T - A
C - G

A T C G
T A G C

G C, C G, G C
*/

function pairElement(str) {

    const pair = [];
    for(let i=0; i <= str.length - 1; i++){
        if(str[i] === 'A'){
            pair.push(["A", "T"]);
        } else if(str[i] === 'T'){
            pair.push(["T", "A"]);
        } else if(str[i] === 'C'){
            pair.push(["C", "G"]);
        } else if(str[i] === 'G'){
            pair.push(["G", "C"]);
        }
    }

    return pair;
    
  }
  
  console.log(pairElement("ATCGA"));