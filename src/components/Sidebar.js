import React from 'react';
import Menu from './Sidebar/Menu';
import {AiOutlinePlus,AiOutlineHeart} from 'react-icons/ai';
import Playlists from './Sidebar/Playlists';
import DownloadApp from './Sidebar/DownloadApp';

export default function Sidebar() {
    return (
        <aside className='w-60 pt-6 flex flex-shrink-0 flex-col'>
            <a href="#" className='mb-7 px-6'>
                <img className="h-10" src="https://s22.q4cdn.com/540910603/files/design/Spotify_Logo_White.png" alt="" />
            </a>

            <Menu/>

            <nav className="mt-6">
                <ul>
                    <li>
                        <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                                <AiOutlinePlus size={12} />
                            </span>
                            Calma Listesi Olustur
                        </a>
                    </li>
                    <li>
                        <a href="#" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-200 opacity-70 group-hover:opacity-100">
                                <AiOutlineHeart size={12} />
                            </span>
                            Begenilen Sarkilar
                        </a>
                    </li>
                </ul>
            </nav>

            <Playlists/>

            <DownloadApp/>
        </aside>
    )
}
