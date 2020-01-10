// Difference between two arrays

function array_diff(a1, a2) {
    return a1.filter(x => !a2.includes(x));
 }