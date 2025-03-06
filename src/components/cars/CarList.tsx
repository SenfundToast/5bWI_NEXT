import { Car } from '@/src/services/Car'
import React from 'react'
import Card from './Card'

type Props = {cars:Car[]}

export default function CarList({cars }: Props) {
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 m-8'>
        {cars.map((car: Car) => (
            <Card car={car} />
      ))}
      </div>
    </div>
    
  )
}