function longest(sentence) {
    // mengubah kalimat menjadi array
    const words = sentence.split(' ');
    
    // var untuk menyimpan kata terpanjang
    let longestWord = '';
    // perulangan untuk menyimpan sementara nilai dari array
    for (let word of words) {
        if (word.length > longestWord.length) { //membandingkan panjang huruf 
            longestWord = word;
        }
    }
    
    return `${longestWord}: ${longestWord.length} character`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritmaaaaaaaaaaaaaaa";
console.log(longest(sentence));