import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
//import crypto from 'crypto'

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    registerUser(user: User): void {
        const existingUser = this.findUser(user.email);
        if (existingUser) {
            throw new Error('Duplicate user.');
        }

        user.id = crypto.randomUUID();
        this.users.push(user);
    }

    registerBike(bike: Bike): void {
        this.bikes.push(bike);
    }

    removeBike(bikeId: string): void {
        const bikeIndex = this.bikes.findIndex(bike => bike.id === bikeId);
        if (bikeIndex !== -1) {
            this.bikes.splice(bikeIndex, 1);
        }
    }

    rentBike(bikeId: string, renter: User): void {
        const bike = this.bikes.find(bike => bike.id === bikeId);
        if (bike) {
            const rent: Rent = {
                bikeId: bike.id,
                renterId: renter.id,
                startDate: new Date(),
                endDate: null,
            };
            this.rents.push(rent);
        }
    }

    returnBike(bikeId: string): void {
        const rent = this.rents.find(rent => rent.bikeId === bikeId && !rent.endDate);
        if (rent) {
            rent.endDate = new Date();
        }
    }
}
