function matchFinder(string1, string2) {
    if (typeof string1!=='string'||typeof string2!=='string') {
        return 'please provide a valid input of array';
    } else {
        let result=string1.includes(string2);
        return result;
    }
    
}
let text1 = 'John Doe';
let text2 = 'Jo';
console.log(matchFinder(text1, text2));
