import React from 'react'
import Card from '../../components/cars/Card'
import { Car } from '@/src/services/Car';

type Props = {}


const car: Car = {
  Name: "Super Car",
  type: "BMW X3",
  color: "green",
  motor: {
    serialNumber: 1234,
    hp: 200,
  }
};




export default function Cars({}: Props) {
  return (
    <div>
       <h1>Cars</h1>
       <Card car={car}/>
    </div>
  )
}