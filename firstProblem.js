function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'please provide a valid number';
    } else {
        let result = Math.pow(number, 3);
        return result;
    }
}

let number = 2;
console.log(cubeNumber(number));
