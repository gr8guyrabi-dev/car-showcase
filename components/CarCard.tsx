"use client"

import {useState} from 'react'
import Image from 'next/image'

import { CarProps } from '@/types'

import CustomButton from './CustomButton'
import CarDetails from './CarDetails'

import { calculateCarRent, generateCarImageUrl } from '@/utils'

interface CarCardProps {
    car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="car-card__price">
                <span className="car-card__price-currency">$</span>
                    {carRent}
                <span className="car-card__price-day">/day</span>
            </p>

            <div className="car-card__image">
                <Image 
                    src={generateCarImageUrl(car)}
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            <div className="car-card__icon" >
                <div className="car-card__icon-container">
                    <div className="car-card__icon-container_image">
                        <Image 
                            src="/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="car-card__icon-container_image-text">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="car-card__icon-container_image">
                        <Image 
                            src="/tire.svg"
                            width={20}
                            height={20}
                            alt="tire"
                        />
                        <p className="car-card__icon-container_image-text">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="car-card__icon-container_image">
                        <Image 
                            src="/gas.svg"
                            width={20}
                            height={20}
                            alt="gas"
                        />
                        <p className="car-card__icon-container_image-text">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton 
                        title="View More"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard