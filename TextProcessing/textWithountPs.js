function removeWord(word, str) {
    let copy = str.substring(0);

    while(copy.indexOf(word) !== -1){
        copy = copy.replace(new RegExp(word, 'g'), '');

    }
   console.log(copy);
   

    
}
removeWord('key', "keytextkey")

