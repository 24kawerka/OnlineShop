import React from 'react'
import { useSelector } from 'react-redux'
import { HashLoader } from 'react-spinners'
import s from './preloader.module.scss'

export const PreloaderFullScreen = () => {
    const isFetching = useSelector((state: any) => state.toogleIsFetching.isFetching)
    return (
        <div>
            {(isFetching) ? <div className={s.preloader_container}>
                <div className={s.preloader}>
                    <HashLoader
                        size={150}
                    /></div></div> : null}
        </div>
    )
}

