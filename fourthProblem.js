function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";

    let address = street +','+ house +','+ society;
    return address;
}
let obj = {
    street: 10,
    house: "15A",
    society:"Earth Perfect",
    
}

console.log(findAddress(obj));