// function sortMaker(arr) {
//     if (arr.length = 2) {
//          if (arr[0] < 0 || arr[1] < 0) {
//              return 'Invalid Input ';
//      }
//         if (arr[0] >= 0 && arr[1] >= 0) {
//             arr.sort(function (a, b) {
//                 return b - a;
//             });
           
//             if (arr[0] === arr[1]) {
//                 return 'equal';
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortMaker([244, -244]));


function sortMaker(arr) {
        if (arr[0] < 0 || arr[1] < 0) {
            return 'Invalid Input ';
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
console.log(sortMaker([-244, -244]));
