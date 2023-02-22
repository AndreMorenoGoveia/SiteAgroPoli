import React from 'react';
import './Navbar.scss';

type NomesProps = {

    index: number;
    nomes: string[];

}

export function Navbar(props : NomesProps) {
    
    /* Lida com qual botão está ativado */
    const [indexAtual, setIndexAtual] = React.useState(props.index);

    /* Lida com as particulas */

    let particulas : React.ReactNode[] = []
    let particulasExplosivas : React.ReactNode[] = []


    const [filaParticulas, setFilaParticulas] = React.useState<React.ReactNode[]>([]);
    

    for(let i = 0; i < 20; i++){
        particulas.push(<div className="particula"/>)
    }

    for(let i = 0; i < 70; i++){
        particulasExplosivas.push(<div className="particulaExplosiva"/>)
    }
    const handleClick = () => {
        setFilaParticulas(prevFila => [...prevFila, ...particulasExplosivas]);
        if(filaParticulas.length > 6000)
            setFilaParticulas(prevFila => prevFila.slice(1000));
        
    };
    
 

    return (<div className="Nav">
        {props.nomes.map((nome, index: number) => {

        if(indexAtual == index)
            return (<div className="atual">
                        <div className="nomeAtual"
                             onClick={handleClick} >
                            {nome}
                            {particulas}
                            {filaParticulas}
                        </div>
                    </div>)

        else 
            return (<div className="naoAtual">
                        <div className="nomeNaoAtual" onClick={() => {
                                /* Muda o botão */
                                setIndexAtual(index);
                                setFilaParticulas([]);
                                /* Particulas */
                                handleClick();
                            }}>
                                {nome}
                        </div>
                    </div>)

        })}
    </div>);

}