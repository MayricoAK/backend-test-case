function reverseString(string) {
    // memisahkan huruf dan angka
    let letters = string.slice(0, -1); // mengambil semua char kecuali char terakhir
    let number = string.slice(-1); // mengambil char terakhir
    
    let reversedLetters = letters.split('').reverse().join(''); // membalik urutan huruf pada var letters
    // menggabungkan hasil reverse dengan char terakhir
    return reversedLetters + number;
}

let string = "NEGIE1";
let result = reverseString(string);
console.log(result);
