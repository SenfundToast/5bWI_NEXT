"use client";
import { Car } from '@/src/services/Car'
import { log } from 'console';
import { tree } from 'next/dist/build/templates/app-page';
import React, { useState } from 'react'

type Props = { car: Car}
export default function Card({car}: Props) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={`shadow p-4 ${isActive ? "bg-amber-200" : "bg-gray-200"}`}
      onClick={() => {
        setIsActive(!isActive);
      }}>
      <h2 className='font-bold text-3xl'>{car.name}</h2>
      <div>{car.color}</div>
      {isActive ?"active":"inactive"}
    </div>
  )
}