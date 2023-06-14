"use client"

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from "@headlessui/react"

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({title, options}: CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0])
    const router = useRouter()

    const handleUpdateParams = (e: { type: string, value: string }) => {
        const newPathname = updateSearchParams(title, e.value.toLowerCase())
        router.push(newPathname)
    }

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={e => { 
                    setSelected(e)
                    handleUpdateParams(e)
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>
                        <Image 
                            src="/chevron-up-down.svg"
                            width={20}
                            height={20}
                            className='ml-4 object-contain'
                            alt="chevron up down"
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options
                            className="custom-filter__options"
                        >
                            {
                                options.map((item, index) => (
                                    <Listbox.Option
                                        key={`${item.title}_${index}`}
                                        value={item}
                                        className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-500'}`}
                                    >
                                        {
                                            ({selected}) => (
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-medium'}`}>
                                                    {item.title}
                                                </span>
                                            )
                                        }
                                    </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>

                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter