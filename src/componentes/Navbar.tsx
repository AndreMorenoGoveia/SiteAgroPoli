import './Navbar.css'

type NomesProps = {

    index: number;
    nomes: string[];

}

export function Navbar({index, nomes} : NomesProps) {

    let i : number;
    let tamanho : number = nomes.length;

    let elementojsx : React.ReactNode[] = [];

    for(i = 0; i < tamanho; i++){

        if(i == index){

            elementojsx.push(<div className="atual">
                                <div className="nome">{nomes[i]}</div>
                            </div>)

        }
        else {

            elementojsx.push(<div className="naoAtual">
                                <div className="nome">{nomes[i]}</div>
                            </div>)

        }

    }

    let retorno = <div className="Nav">{elementojsx}</div>;



    return retorno;

}