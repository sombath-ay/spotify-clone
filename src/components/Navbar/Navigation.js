import React from 'react'
import {GrFormPrevious,GrFormNext} from 'react-icons/gr'

export default function Navigation() {
    return (
        <nav className='flex items-center gap-x-4 text-white'>
            <button onClick={() => window.history.goBack()} className="w-8 h-8 flex items-center justify-center text-white rounded-full bg-white bg-opacity-70">
                <GrFormPrevious size={22} />
            </button>
            <button onClick={() => window.history.goForward()} className="w-8 h-8 flex items-center justify-center text-white rounded-full bg-white bg-opacity-70">
                <GrFormNext size={22} />
            </button>
        </nav>
    )
}
