function diagonalDifference(matrix) {
    const n = matrix.length;
    
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;
    
    for (let i = 0; i < n; i++) {
        diagonal1Sum += matrix[i][i]; // Diagonal utama
        diagonal2Sum += matrix[i][n - i - 1]; // Diagonal sekunder
    }
    
    return diagonal1Sum - diagonal2Sum;
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const result = diagonalDifference(matrix);
console.log(result);