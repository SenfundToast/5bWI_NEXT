import React from 'react'
import Card from '../../components/cars/Card'
import { Car } from '@/src/services/Car';
import CarList from '@/src/components/cars/CarList';

type Props = {}


const cars: Car[] = [
  {
    name: "Speedster",
    type: "BMW X3",
    color: "red",
    motor: {
      serialNumber: 1001,
      hp: 250,
    }
  },
  {
    name: "Thunder",
    type: "Audi Q5",
    color: "blue",
    motor: {
      serialNumber: 1002,
      hp: 280,
    }
  },
  {
    name: "Road King",
    type: "Mercedes GLC",
    color: "black",
    motor: {
      serialNumber: 1003,
      hp: 300,
    }
  },
  {
    name: "Eco Drive",
    type: "Tesla Model Y",
    color: "white",
    motor: {
      serialNumber: 1004,
      hp: 350,
    }
  },
  {
    name: "Beast Mode",
    type: "Ford Mustang",
    color: "yellow",
    motor: {
      serialNumber: 1005,
      hp: 450,
    }
  }
];

export default function Cars() {
  return (
    <div>
      <h1>Cars</h1>
      <CarList cars={cars}/>
    </div>
  )
}