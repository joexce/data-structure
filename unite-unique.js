
function uniteUnique(...arr) {

    const data = [].concat(...arr);
    const tempData = data;
    const dataLength = data.length;
    let i = 0;
    let j = 0;

    let temp = [];
    // phase 1 cek per indexing
    for(i = 0; i < dataLength; i++){    
        for(j = i; j < dataLength; j++){
            if(data[i] === data[j+1]){
                    tempData[j+1] = null;
            }
        }
    }

    tempData.map((result) => {
        if(result !== null){
            temp.push(result);
        }
    });

  return temp;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));