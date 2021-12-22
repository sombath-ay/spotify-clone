import React from 'react'
import { Menu } from '@headlessui/react'
import { AiFillCaretDown } from 'react-icons/ai'
import {HiExternalLink} from 'react-icons/hi'

export default function Auth() {

    const user = {
        name: 'Avatar',
        avatar: 'https://cdn.dribbble.com/users/772985/screenshots/9247897/media/59b9f4624886350945af7b7fd2ee318f.png?compress=1&resize=100x100'
    }

    return (
        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${ open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img className={"h-8 w-8 rounded-full p-0.5 mr-2"} src={user.avatar} />
                        <span className="text-sm font-semibold mr-2">{user.name}</span>
                        <span className={open && 'rotate-180'}>

                        </span>
                        <AiFillCaretDown size={16} />
                    </Menu.Button>
                    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded-md translate-y-2"}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Account
                                    <HiExternalLink size={20} />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Log out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}
