"use client"

import React, { useState } from "react"
import Image from 'next/image'
import  { useRouter } from 'next/navigation'
import { SearchManufacturer } from './'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button
        type="submit"
        className={`-ml-3 z-10 ${otherClasses}`}
    >
        <Image 
            src="/magnifying-glass.svg"
            width={40}
            height={40}
            alt="Search"
            className="object-contain"
        />
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(manufacturer === "" && model === "") {
            return alert("please fill in the search bar")
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search)
        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }

    return (
        <form action="" className="search-bar" onSubmit={handleSearch}>
            <div className="search-bar__item">
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer} 
                
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="search-bar__item">
                <Image 
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car-model"
                />
                <input 
                    type="text"
                    name="model"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="search-bar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar