import './Corpo.scss'
import esferas from '../dados/esferas.json'
import React from 'react'

type Node = {

    nome : string;
    descricao : string;
    proxNodes: string[];
    links_recomendados : string[];

}

export let total = esferas[0].filhos.length;

export function Corpo () {

    let listaBolasInicial: React.ReactNode[] = [];
    let ondas: React.ReactNode[] = [];

    let total = esferas[0].filhos.length;

    if(total == 1){
        listaBolasInicial = [<div className="bola" style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
        }}/>];
    }
    else{

        for(let i = 0; i < total; i++){
            listaBolasInicial.push(<div className="bola" style={{animationDelay: `${i*(15/total)}s`}}>
                                        <div className="explode" style={{animationDelay: `${i*(15/total)*1000 + 100}ms`}}/>
                                    </div>);
        }
    }
    const [listaBolas, setListaBolas] = React.useState<React.ReactNode[]>(listaBolasInicial);
    


    return (<div className="Corpo">
                <div className="Centro">
                    {listaBolas}
                </div>
            </div>)

}