class Car {
    constructor(licensePlate) {
        this.licensePlate = licensePlate;
    }
}

class ParkingSpace {
    constructor(row, spaceNumber, level, car) {
        this.row = row;
        this.spaceNumber = spaceNumber;
        this.level = level;
        this.car = car;
    }

    isAvailable() {
        return this.car === null;
    }

    park(vehicle) {
        this.car = vehicle;
    }

    unpark() {
        this.car = null;
    }
}

class ParkingLot {
    constructor(totalRows, levelNumber) {
        this.levelNumber = levelNumber;
        this.totalRows = totalRows;
        this.spacesPerRow = 2;
        this.parkingSpaces = [];
        this.availableSpaces = totalRows * this.spacesPerRow;
    }

    findAvailableSpot() {
        if (this.availableSpaces <= 0) {
            return null;
        } else {
            let lastCarParked;
            if (this.parkingSpaces.length === 0) {
                return new ParkingSpace(0, 0, 0, null);
            } else {
                lastCarParked = this.parkingSpaces[this.parkingSpaces.length - 1];
            }

            if (lastCarParked.spaceNumber < this.spacesPerRow) {
                return new ParkingSpace(lastCarParked, row, (lastCarParked.spaceNumber + 1), this.levelNumber, null);
            }
        }
    }

    canPark(vehicle) {
        let availableSpace = this.findAvailableSpot();

        if (availableSpace === null) {
            return false;
        } else {
            availableSpace.park(vehicle);
            this.parkingSpaces.push(availableSpace);
            this.availableSpaces -= 1;
        }
    }
}