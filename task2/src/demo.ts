type Reservation = {
    id: number,
    name: string,
    persons: number
}

const reservations: Reservation[] = [];

const waitingReservation:Reservation[]=[];
const waitingTime:number=20;
let j:number=0;
function reserve(name: string, persons: number): void {
    const newReservation: Reservation = {
        id: reservations.length + 1,
        name: name,
        persons: persons
    };
   

    if (reservations.length < 5) {
        reservations.push(newReservation);
        console.log(`Reservation for ${newReservation.name} with ${newReservation.persons} persons is confirmed.`);
    } else {
        waitingReservation.push(newReservation);
       let wTime:number=waitingTime* Math.ceil((waitingReservation.length)/5);
        console.log(`Sorry,${newReservation.name} tables are full.Your approximate waiting time: ${wTime} minutes.`);
    }
}

function checkout(id:number):void{
    let i:number=id-1;

    reservations.splice(i,1,waitingReservation[j]);
    j++;
    console.log(`table alloted for ${waitingReservation[j].name}.` );

}

reserve("aaa", 2);
reserve("bbb", 3);
reserve("ccc", 1);
reserve("ddd", 4);
reserve("eee", 2);
reserve("fff", 5);
reserve("ggg", 3);
reserve("hhh",5);
checkout(2);
checkout(1);


