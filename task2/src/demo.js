var reservations = [];
var waitingReservation = [];
var waitingTime = 10;
var j = 0;
function reserve(name, persons) {
    var newReservation = {
        id: reservations.length + 1,
        name: name,
        persons: persons
    };
    if (reservations.length < 5) {
        reservations.push(newReservation);
        console.log("Reservation for ".concat(newReservation.name, " with ").concat(newReservation.persons, " persons is confirmed."));
    }
    else {
        waitingReservation.push(newReservation);
        var wTime = waitingTime * Math.ceil((waitingReservation.length) / 5);
        console.log("Sorry,".concat(newReservation.name, " tables are full.Your approximate waiting time: ").concat(wTime, " minutes."));
    }
}
function checkout(id) {
    var i = id - 1;
    reservations.splice(i, 1, waitingReservation[j]);
    j++;
    console.log("table alloted for ".concat(waitingReservation[j].name, "."));
}
reserve("aaa", 2);
reserve("bbb", 3);
reserve("ccc", 1);
reserve("ddd", 4);
reserve("eee", 2);
reserve("fff", 5);
reserve("ggg", 3);
reserve("hhh", 5);
checkout(2);
checkout(1);
