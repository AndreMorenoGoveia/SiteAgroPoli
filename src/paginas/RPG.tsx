import React from 'react';
import '../../styles/RPG.css'
import { Corpo } from '../componentes/Corpo';
import { Navbar } from '../componentes/Navbar'



export function RPG () {

    /* Objeto advindo do backend */
    const [userAtual, setUserAtual] = React.useState(2 /* Trocar aqui pelo index do login */);


    return (
            <>
                <Corpo userAtual={userAtual}/>
            </>
            )

    //<Navbar userAtual={userAtual} setUserAtual={setUserAtual} />

}