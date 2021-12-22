import React from 'react'
import Auth from './Navbar/Auth'
import Navigation from './Navbar/Navigation'
import { Routes, Route } from 'react-router-dom'
import Search from 'views/Search'
import SearchItem from './Navbar/SearchItem'

export default function Navbar() {
    
    return (
        <nav className="h-[3.75rem] p-8 flex items-center justify-between">
            <Navigation/>
            <Routes>
                <Route path='/search' element={<SearchItem />} />
            </Routes>
            <Auth/>
        </nav>
    )
}
