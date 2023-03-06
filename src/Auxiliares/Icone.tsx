
import { IconType } from 'react-icons';
import * as Icons from 'react-icons'


interface IconeProps {
    nomeIcone: string;
}


export function Icone ({nomeIcone}: IconeProps) {

    const IconeRenderizado = require(`react-icons/${nomeIcone.slice(0,2).toLowerCase()}/${nomeIcone}`).default as IconType;

    return <IconeRenderizado />;

}