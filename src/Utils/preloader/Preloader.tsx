import React from 'react'
import { useSelector } from 'react-redux'
import { HashLoader } from 'react-spinners'
import { rootReducerType } from '../../redux/Utils/reducer'
import s from './preloader.module.scss'
import utilsSelector from '../../redux/Utils/utilsSelector'

const PreloaderFullScreen = () => {
    const isFetching = useSelector(utilsSelector.isFetching)
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