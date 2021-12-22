import React from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'

export default function DownloadApp() {
    return (
        <a href="#" className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6 gap-x-4">
            <BsArrowDownCircle size={24} />
            Download Desktop
        </a>
    )
}
