import { IconType } from 'react-icons';
import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsGi from 'react-icons/gi';
import * as ReactIconsIo from 'react-icons/io';
import * as ReactIconsFi from 'react-icons/fi';
import * as ReactIconsDi from 'react-icons/di';
import * as ReactIconsAi from "react-icons/ai";
import * as ReactIconsBs from "react-icons/bs";
import * as ReactIconsBi from "react-icons/bi"
import './Icone.scss'

interface IconeProps {
        iconName: string
        animationDelay: number
        key: number
     }

export function Icone({iconName, animationDelay, key}: IconeProps) {
    const iconFamily = iconName.slice(0, 2);
    let Icon: IconType;
    switch (iconFamily) {
        case 'Fa':
            Icon = ReactIconsFa[iconName as keyof typeof ReactIconsFa]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Gi':
            Icon = ReactIconsGi[iconName as keyof typeof ReactIconsGi]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Io':
            Icon = ReactIconsIo[iconName as keyof typeof ReactIconsIo]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Fi':
            Icon = ReactIconsFi[iconName as keyof typeof ReactIconsFi]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Di':
            Icon = ReactIconsDi[iconName as keyof typeof ReactIconsDi]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Ai':
            Icon = ReactIconsAi[iconName as keyof typeof ReactIconsAi]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Bs':
            Icon = ReactIconsBs[iconName as keyof typeof ReactIconsBs]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Bi':
            Icon = ReactIconsBi[iconName as keyof typeof ReactIconsBi]
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        default:
            Icon = ReactIconsFa['FaCloud']
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
    }
}
