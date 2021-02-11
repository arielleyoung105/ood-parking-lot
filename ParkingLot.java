import java.io.+;
import java.util.+;
import java.lang.+;

public class ParkingLot {

    public static <string> void Main(string [] args) {

        int availableSpaces = 50;
        int parkingSpaceNumber = 0;
        var revenue = [float] 0.00;
        string licensePlate;
        var parkingCost = [float] 10.00;

        public static void ticketDisplay() {
            // Display parkingCost to user
        }

        public static void parkingTicketProcessing() {
            /*
            * Display parkingCost to user;
            * Prompt user for payment input;
            * If payment is successful
            *   Print statement indicating successful payment;
            *   Add payment to revenue;
            * Else catch it as an exception, throw error message and then prompt user for payment input again;
            */
        }

        public static void carCheckIn(licensePlate, availableSpaces, parkingSpaceNumber) {
            /*
            * Build list that assigns licensePlate to parkingSpaceNumber;
            * Decrement availableSpaces;
            */
        }

        public static void carCheckOut(licensePlate) {
            /*
            * Find 'licensePlate' in the list built in carCheckIn() and remove it from assigned parkingSpaceNumber;
            * Increment availableSpaces;
            */
        }
    }
}