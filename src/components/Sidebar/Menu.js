import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {BsCollectionPlayFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <Link to={"/"} exact="true" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 bg-active">
                        <span>
                            <AiFillHome size={24} />
                        </span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/search"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                        <span>
                            <BiSearch size={24} />
                        </span>
                        Search
                    </Link>
                </li>
                <li>
                    <Link to={"/collection"} className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                        <span>
                            <BsCollectionPlayFill size={24} />
                        </span>
                        Your Library
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
