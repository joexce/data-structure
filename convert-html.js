function convertHTML(str) {
    
    /*
     & &amp;
     < &lt;
     > &gt;
     " &ldquo;
     ' &​apos;
    */

    let constructText = "";
    let temp = [];
    let found = false;
    let i = 0;
    for(i=0; i < str.length; i++){

        temp.push(str[i]);
        if(str[i] === "'" && found !== true){ 
            constructText = "&apos;";
            found = true;
        } else if(str[i] === "&" && found !== true){
            constructText = "&amp;";
            found = true;
        } else if(str[i] === "<" && found !== true){
            constructText = "&lt;";
            found = true;
        } else if(str[i] === ">" && found !== true){
            constructText = "&gt;";
            found = true;
        } else if(str[i] === '"' && found !== true){
            constructText = "&quot;";
            found = true;
       } else {
           found = false;
       }

       if(found){
       temp.splice(i, 1, constructText);
       found = false;
       }
   
   }
   

   let words ="";
   temp.map((result) => {
        words += result;
   });

    return words;
  } 
  
  console.log(convertHTML("abc"));