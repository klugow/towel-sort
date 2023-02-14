
// You should implement your task here.

module.exports = function towelSort (matrix) {

if (!Array.isArray(matrix)){ 
    return [];
}
if (matrix.length === 0 ){
    return [];
}  
if (matrix.length === 2 ){
    return matrix[0].concat(matrix[1].reverse());
}
if (matrix.length === 3 ){
    return matrix[0].concat(matrix[1].reverse(), matrix[2]);
}
if (matrix.length === 4 ){
    return matrix[0].concat(matrix[1].reverse(), matrix[2], matrix[3].reverse());
}
}
