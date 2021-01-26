import React from 'react'
import { useSelector } from 'react-redux'
import { HashLoader } from 'react-spinners'
import { rootReducerType } from '../../redux/Utils/reducer'
import s from './preloader.module.scss'

const PreloaderFullScreen = () => {
    const isFetching = useSelector((state: rootReducerType) => state.toogleIsFetching.isFetching)
    if (!isFetching) return null
    return (
        <div className={s.preloader_container}>
            <div className={s.preloader}>
                <HashLoader
                    size={150}
                />
            </div>
        </div>

    )
}

export { PreloaderFullScreen }