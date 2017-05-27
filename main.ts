/**
 * Functions to operate packet test.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace packet {
//    export class test {
//        inPin: DigitalPin;
//        outPin: DigitalPin;
        /**
         * Get input pin value 
         * @param pin out pin
         */
        //% blockId=get_pin block="getPin pin %pin"
        export function getPin(pin: DigitalPin):number {
            let value = pins.digitalReadPin(pin);
            return value;
        }
        /**
         * Set input pin value 
         * @param pin out pin
         * @param value out value
         */
        //% blockId=set_pin block="setPin pin %pin|value %value"
        export function setPin(pin: DigitalPin, value: number) {
            pins.digitalWritePin(pin, value);
        }
//    }
}
