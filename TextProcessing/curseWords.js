function censorWords(str) {
    let curseWords = [
        'shit',
        'FUCK',
        'FUCK!!!',
        'hell',
        'laina'
    ]
    let sanitized = str.substring(0);

    curseWords.forEach(curse => {
        let index = sanitized.indexOf(curse);
        let reg = new RegExp(curse, 'g');

        let len = 2;
        let firstThree = curse.substr(0, len);
        let hiddenChars = '*'.repeat(curse.length - len);

        sanitized = sanitized.replace(reg, firstThree + hiddenChars);


    });
    console.log(sanitized);
    
}
censorWords("This code is so shit FUCK!!! hell can freeze over")