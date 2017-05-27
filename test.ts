{
    while (true) {
        packet.setPin(DigitalPin.P1, packet.getPin(DigitalPin.P0));
        basic.pause(50);
    }
}
