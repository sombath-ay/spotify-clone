import Section from 'components/Section'
import React from 'react'

export default function Home() {
    const items = [
        {
            id: 1,
            title: 'Intouchables - Soundtracks OST',
            description: 'Original Soundtrack',
            image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
            type: 'album',
            src: 'https://freesound.org/data/previews/612/612095_5674468-lg.mp3'
        },
        {
            id: 2,
            title: 'Intouchables - Soundtracks OST',
            description: 'Original Soundtrack',
            image: 'https://images.unsplash.com/photo-1640043962094-22eef3d99800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
            type: 'album',
            src: 'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
        },
        {
            id: 3,
            title: 'Intouchables - Soundtracks OST',
            description: 'Original Soundtrack',
            image: 'https://images.unsplash.com/photo-1640043622142-bfceada811ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
            type: 'artist',
            src: 'https://freesound.org/data/previews/612/612095_5674468-lg.mp3'
        },
        {
            id: 4,
            title: 'Intouchables - Soundtracks OST',
            description: 'Original Soundtrack',
            image: 'https://images.unsplash.com/photo-1639894541609-5dfa1fb30c51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
            type: 'podcast',
            src: 'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
        },
        {
            id: 5,
            title: 'Intouchables - Soundtracks OST',
            description: 'Original Soundtrack',
            image: 'https://images.unsplash.com/photo-1639990141608-1e3a10313031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
            type: 'album',
            src: 'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
        },
    ]
    return (
        <div className="grid gap-y-8">
            <Section title="Recently played" more="/blaba" items={items} />
            <Section title="Shows to try" more="/blaba" items={items} />
            <Section title="Made For Tayfun Erbilen" more="/blaba" items={items} />
        </div>
    )
}
