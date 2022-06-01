import React from 'react'
import { Mensaje } from '../types/mensaje'

export const Error = ({mensaje}:Mensaje) => {
  return (
    <p className='text-center bg-red-200 border text-red-700 px-4 py-3 rounded relative'>
      {mensaje}
    </p>
  )
}
