import '../../styles/RPG.css'
import { Navbar } from '../componentes/Navbar'



export function RPG () {

    /* Parametros do usuário a serem retirados do bakcend */
    let index = 6;
    let nomes = ['Lucas', 'Celso', 'Joao', 'Andre', 'Mauricio', 'Pedro', 'Joao Felipe', 'Roberto']



    return (
            /* Barra de Navegação */
            <Navbar index={index} nomes={nomes} />
            )

}