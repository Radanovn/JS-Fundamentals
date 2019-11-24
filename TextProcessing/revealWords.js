function RevealWords(wordStr, newSentence) {
    let words = wordStr.split(", ")
  
    words
  .forEach(word => {
      
  
    newSentence = newSentence.replace('*'.repeat(word.length), word)
    });
   console.log(newSentence);
   

}
RevealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)