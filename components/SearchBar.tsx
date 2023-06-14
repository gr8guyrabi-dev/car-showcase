"use client"

import { useState } from "react"

import { SearchManufacturer } from './'

const handleSearch = () => {

}

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState("")

    return (
        <form action="" className="search-bar" onSubmit={handleSearch}>
            <div className="search-bar__item">
                <SearchManufacturer 
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer} 
                
                />
            </div>
        </form>
    )
}

export default SearchBar