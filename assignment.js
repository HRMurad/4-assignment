function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'please provide a valid number';
    } else {
        let result = Math.pow(number, 3);
        return result;
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'please provide a valid input of string';
    } else {
        let result = string1.includes(string2);
        return result;
    }
}

function sortMaker(arr) {
    if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }
    if (arr[0] === arr[1]) {
        return 'equal';
    }
    if (arr[0] >= 0 && arr[1] >= 0 && arr[0]<arr[1]) {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            return arr;
        } else {
            return arr;
        }
}

function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";

    let address = street +','+ house +','+ society;
    return address;
}

function canPay(changeArray, totalDue) {
     if (changeArray.length == 0) {
            return 'please insert a valid input of array'
        }
    let returnMoney = 0;
    for (let item of changeArray) {
        returnMoney += item;
    }
     if (returnMoney >= totalDue) {
         return true;
        } else {
         return false;
        }
}

