import { IconType } from 'react-icons';
import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsGi from 'react-icons/gi';
import * as ReactIconsIo from 'react-icons/io';
import * as ReactIconsFi from 'react-icons/fi';
import * as ReactIconsDi from 'react-icons/di';
import './Icone.scss'

interface IconeProps {
        iconName: string
        animationDelay: number
     }

export function Icone({iconName, animationDelay}: IconeProps) {
    const iconFamily = iconName.slice(0, 2);
    let Icon: IconType;
    switch (iconFamily) {
        case 'Fa':
            Icon = ReactIconsFa[iconName as keyof typeof ReactIconsFa]
            return <Icon size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Gi':
            Icon = ReactIconsGi[iconName as keyof typeof ReactIconsGi]
            return <Icon size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Io':
            Icon = ReactIconsIo[iconName as keyof typeof ReactIconsIo]
            return <Icon size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Fi':
            Icon = ReactIconsFi[iconName as keyof typeof ReactIconsFi]
            return <Icon size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        case 'Di':
            Icon = ReactIconsDi[iconName as keyof typeof ReactIconsDi]
            return <Icon size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
        default:
            Icon = ReactIconsFa['FaCloud']
            return <Icon size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
    }
}
