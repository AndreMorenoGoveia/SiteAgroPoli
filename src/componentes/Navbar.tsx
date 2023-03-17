import React from 'react';
import './Navbar.scss';
import users from '../dados/users.json'

type UserProps = {

    userAtual : number,
    setUserAtual : (index :number) => void

}

export function Navbar({userAtual, setUserAtual} : NomesProps) {    

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
        {users.map((user) => {

        if(userAtual == user.index)
            return (<div className="atual">
                        <div className="nomeAtual"
                             onClick={handleClick} >
                            {user.nome}
                            {particulas}
                            {filaParticulas}
                        </div>
                    </div>)

        else 
            return (<div className="naoAtual">
                        <div className="nomeNaoAtual" onClick={() => {
                                /* Muda o botão */
                                setUserAtual(user.index);
                                setFilaParticulas([]);
                                /* Particulas */
                                handleClick();
                            }}>
                                {user.nome}
                        </div>
                    </div>)

        })}
    </div>);

}