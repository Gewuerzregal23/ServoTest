input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Winkel += 10
    SchreibeStatus()
    servos.C9.setAngle(Winkel)
    if (Winkel >= 180) {
        Winkel = 0
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Motor_ein = Motor_ein * -1
    SchreibeStatus()
    if (Motor_ein == 1) {
        motors.dualMotorPower(Motor.M1, 15)
    } else {
        motors.dualMotorPower(Motor.M1, 0)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Servo_ein = Servo_ein * -1
    SchreibeStatus()
    if (Servo_ein == 1) {
        servos.C8.run(50)
    } else {
        servos.C8.stop()
    }
})
function SchreibeStatus () {
    oledssd1306.setTextXY(0, 12)
    oledssd1306.clearRange(3)
    oledssd1306.setTextXY(0, 12)
    oledssd1306.writeNumber(Winkel)
    oledssd1306.setTextXY(1, 12)
    oledssd1306.clearRange(3)
    oledssd1306.setTextXY(1, 12)
    oledssd1306.writeNumber(Servo_ein)
    oledssd1306.setTextXY(2, 12)
    oledssd1306.clearRange(3)
    oledssd1306.setTextXY(2, 12)
    oledssd1306.writeNumber(Motor_ein)
}
let Winkel = 0
let Motor_ein = 0
let Servo_ein = 0
Servo_ein = -1
Motor_ein = -1
Winkel = 0
oledssd1306.initDisplay()
oledssd1306.setTextXY(0, 0)
oledssd1306.writeString("Winkel(A):")
oledssd1306.setTextXY(1, 0)
oledssd1306.writeString("Servo2(B):")
oledssd1306.setTextXY(2, 0)
oledssd1306.writeString("Motor1(AB):")
SchreibeStatus()
