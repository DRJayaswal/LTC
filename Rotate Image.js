/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // Create a deep copy of the matrix
    const dummy_matrix = matrix.map(row => [...row]);

    var a = matrix.length - 1;
    var b = 0;
    var i = 0;
    var j = 0;

    // Rotate the matrix by copying from the dummy matrix
    while (i <= matrix.length - 1) {
        while (j <= matrix.length - 1) {
            matrix[i][j] = dummy_matrix[a][b];
            a--;
            j++;
        }
        j = 0;
        a = matrix.length - 1;
        b++;
        i++;
    }
};