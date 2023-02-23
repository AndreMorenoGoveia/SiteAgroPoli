import './Corpo.scss'
import esferas from '../dados/esferas.json'
import React from 'react'

type Node = {

    nome : string;
    descricao : string;
    proxNodes: string[];
    links_recomendados : string[];

}

let index = 0;
let total = esferas[0].filhos.length;

export function Corpo () {

    let listaBolasInicial: React.ReactNode[] = [];
    const [estadoSelecionado, setEstadoSelecionado] = React.useState(false); 

    let total = esferas[0].filhos.length;

    if(total == 1){
        listaBolasInicial = [<div className="bola" >
                                <div className="explode"/>
                            </div>];
    }
    else{

        for(let i = 0; i < total; i++){
            listaBolasInicial.push(<div className="bolagirando" style={{animationDelay: `${i*(10/total)}s`}}>
                                        <div className="explode" style={{animationDelay: `${i*(10/total)*1000 + 100}ms`}}/>
                                        
                                    </div>);
        }
    }
    const [listaBolas, setListaBolas] = React.useState<React.ReactNode[]>(listaBolasInicial);
    //<GrTechnology size="600px"/>


    return (<div className="Corpo">
                
                   {/*esferas[index].titulo*/}
                   {listaBolas}
                  
            </div>)

}