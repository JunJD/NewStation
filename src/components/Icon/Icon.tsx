import React from 'react'
import classNames from 'classnames'

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- 导入要使用的样式
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import './_style.scss'
library.add(fas)

export enum ThemeProps{
    Primary='primary',
    Secondary='secondary',
    Info='info',
    Success='success',
    Warning='warning',
    Danger='danger',
    Light="light",   
    Dark="dark"       
}     

export interface IconProps extends FontAwesomeIconProps {
    theme?:ThemeProps,
}

const Icon:React.FC<IconProps>=(props)=>{
    const {className,theme,...resetProps}=props
    const classes = classNames('newStation-Icon', className,{
        [`icon-${theme}`]:theme
    })
    return (
            <FontAwesomeIcon  className={classes} {...resetProps} />
    )
}

export default Icon
