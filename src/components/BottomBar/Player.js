import React, { useMemo } from 'react'
import { IoIosShuffle, IoIosRepeat } from 'react-icons/io'
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi'
import { BsFillPlayFill } from 'react-icons/bs'
import { useAudio } from 'react-use'
import { secondsToTime } from 'utils'
import CustomRange from 'components/CustomRange'
import {MdKeyboardVoice, MdPlaylistPlay, MdOutlineDevices, MdVolumeUp,MdFullscreen} from 'react-icons/md'

export default function Player() {

    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    });

    const volumeIcon = useMemo(() => {
        if(state.volume === 0 || state.muted)
            return 'volumeMuted'
        if(state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if(state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    },[state.volume])

    return (
        <div className='flex px-4 justify-between items-center h-full'>
            <div className="min-w-[11.25rem] w-[30%]">
                {/* {JSON.stringify(state)} */}
                SOMBATH
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <IoIosShuffle size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <BiSkipPreviousCircle size={16} />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        <BsFillPlayFill size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <BiSkipNextCircle size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <IoIosRepeat size={16} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange step={0.1} min={0} max={state?.duration || 1} value={state?.time} onChange={value => controls.seek(value)} />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <MdKeyboardVoice size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <MdPlaylistPlay size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <MdOutlineDevices size={16} />
                </button>
                <button onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <MdVolumeUp size={16} name={volumeIcon} />
                </button>
                <div className="w-[5.813rem] max-w-full">
                    <CustomRange step={0.01} min={0} max={1} value={state.muted ? 0 : state?.volume} onChange={value => { controls.unmute(); controls.volume(value) }} />
                </div>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <MdFullscreen size={16} />
                </button>
            </div>
        </div>
    )
}
