"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({ title, btnType="button", handleClick, containerStyles }: CustomButtonProps) => {
  return (
    <button 
        className={`custom_btn ${containerStyles}`}
        disabled={false}
        type={btnType}
        onClick={ handleClick }
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton