input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Winkel += 10
    servos.C9.setAngle(Winkel)
    if (Winkel >= 180) {
        Winkel = 0
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Motor_ein = Motor_ein * -1
    if (Motor_ein == 1) {
        motors.dualMotorPower(Motor.M1, 15)
    } else {
        motors.dualMotorPower(Motor.M1, 0)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Servo_ein = Servo_ein * -1
    if (Servo_ein == 1) {
        servos.C8.run(50)
    } else {
        servos.C8.stop()
    }
})
let Winkel = 0
let Motor_ein = 0
let Servo_ein = 0
Servo_ein = -1
Motor_ein = -1
Winkel = 0
basic.forever(function () {
	
})
