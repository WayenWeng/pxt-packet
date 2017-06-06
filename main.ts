
/**
 * 
 */
enum SINGLE_PIXEL_TYPE {
    //% block=*
    ON = 1,
    //% block=.
    OFF = 0
}

enum MATRIX_PIXEL_TYPE {
    //% block=*
    ON = 1,
    //% block=.
    OFF = 0
}

/**
 * Functions to operate packet test.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace packet {
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
    
    /**
     * Test matrix 
     * @param para1 
     * @param para2 
     */
    //% blockId=test_matrix block="test matrix %para1 %para2|%para3 %para4"
    //% blockExternalInputs=true
    export function testMatrix(para1: SINGLE_PIXEL_TYPE, para2: SINGLE_PIXEL_TYPE, para3: SINGLE_PIXEL_TYPE, para4: SINGLE_PIXEL_TYPE) 
    {
        para1 = para2;
        para3 = para4;
    }
    
    /**
     * Test matrix 2
     * @param para
     */
    //% blockId=test_matrix block="test matrix 2|%para"
    //% blockExternalInputs=true
    export function testMatrix2(para: ImageLiteral) 
    {

    }
    
    /**
     * Test string 
     * @param para
     */
    //% blockId=test_string block="test strig %para"
    export function testString(para: string) {
        
    }
    
    /**
     * Test buffer 
     * @param para
     */
    //% blockId=test_buffer block="test buffer %para"
    export function testBuffer(para: Buffer) {
        
    }
}
