"use strict";
const reservations = [];
const waitingTime = 30;
function reserve(name, persons) {
    const newReservation = {
        id: reservations.length + 1,
        name: name,
        persons: persons
    };
    if (reservations.length < 5) {
        reservations.push(newReservation);
        console.log(`Reservation for ${newReservation.name} with ${newReservation.persons} persons is confirmed.`);
    }
    else {
        console.log(`Sorry,all tables are full. Approximate waiting time: ${waitingTime} minutes.`);
    }
}
reserve("aaa", 2);
reserve("bbb", 3);
reserve("ccc", 1);
reserve("ddd", 4);
reserve("eee", 2);
reserve("fff", 5);
reserve("ggg", 3);
//# sourceMappingURL=demo.js.map