function canPay(changeArray, totalDue) {
     if (changeArray.length == 0) {
            return 'please insert a valid input of array'
        }
    let returnMoney = 0;
    for (let item of changeArray) {
        returnMoney += item;
    }
     if (returnMoney <= totalDue) {
         return true;
        } else {
         return false;
        }
}
console.log(canPay([1, 5, 5], 10));
