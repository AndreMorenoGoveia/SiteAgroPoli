import '../../styles/RPG.css'
import { Navbar } from '../componentes/Navbar'



export function RPG () {

    /* Objeto advindo do backend */
    let perfil = {
        index: 2,
        nomes: ['Lucas', 'Celso', 'Joao', 'Andre', 'Mauricio', 'Pedro', 'Joao Felipe', 'Roberto']
    };



    return (
            /* Barra de Navegação */
            <Navbar index={perfil.index} nomes={perfil.nomes} />
            )

}