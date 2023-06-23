import { IconType } from 'react-icons';
import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsGi from 'react-icons/gi';
import * as ReactIconsIo from 'react-icons/io';
import * as ReactIconsFi from 'react-icons/fi';
import * as ReactIconsDi from 'react-icons/di';
import * as ReactIconsAi from "react-icons/ai";
import * as ReactIconsBs from "react-icons/bs";
import * as ReactIconsBi from "react-icons/bi";
import * as ReactIconsFc from "react-icons/fc";
import './Icone.scss'

interface IconeProps {
        iconName: string
        animationDelay: number
        key: number
     }

let key = 0

export function Icone({iconName, animationDelay, key}: IconeProps) {
    const iconFamily = iconName.slice(0, 2);
    let Icon: IconType;
    key++;
    switch (iconFamily) {
        case 'Fa':
            try{
                Icon = ReactIconsFa[iconName as keyof typeof ReactIconsFa]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Gi':
            try{
                Icon = ReactIconsGi[iconName as keyof typeof ReactIconsGi]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Io':
            try{
                Icon = ReactIconsIo[iconName as keyof typeof ReactIconsIo]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Fi':
            try{
                Icon = ReactIconsFi[iconName as keyof typeof ReactIconsFi]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Di':
            try{
                Icon = ReactIconsDi[iconName as keyof typeof ReactIconsDi]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Ai':
            try{
                Icon = ReactIconsAi[iconName as keyof typeof ReactIconsAi]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Bs':
            try{
                Icon = ReactIconsBs[iconName as keyof typeof ReactIconsBs]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Bi':
            try{
                Icon = ReactIconsBi[iconName as keyof typeof ReactIconsBi]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        case 'Fc':
            try{
                Icon = ReactIconsFc[iconName as keyof typeof ReactIconsFc]
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
            catch(e){
                Icon = ReactIconsFa['FaCloud']
                return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
            }
        default:
            Icon = ReactIconsFa['FaCloud']
            return <Icon key={key} size={40} className='Icone' style={{animationDelay: `${animationDelay}s`}}/>
    }
    
}
