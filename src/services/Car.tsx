export interface Motor {
    serialNumber: number;
    hp: number;
  }
  
export interface Car {
    Name: string;
    type: string;
    color: string;
    motor: Motor;
  }
  