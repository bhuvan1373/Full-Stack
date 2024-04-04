var shoppingcart = [];
function addp(cartt) {
    shoppingcart.push(cartt);
}
function buy(cartt) { cartt.stock--; }
var c1 = { pid: 1, pname: "fridge", price: 10000, stock: 5 };
addp(c1);
var c2 = { pid: 2, pname: "tv", price: 5000, stock: 10 };
addp(c2);
buy(c1);
for (var i = 0; i < shoppingcart.length; i++) {
    console.log("pid:" + shoppingcart[i].pid);
    console.log("pname:" + shoppingcart[i].pname);
    console.log("price:" + shoppingcart[i].price);
    console.log("stock:" + shoppingcart[i].stock);
    console.log("");
}
