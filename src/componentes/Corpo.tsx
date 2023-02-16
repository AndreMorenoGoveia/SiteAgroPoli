import './Corpo.scss'

type Node = {

    nome : string;
    descricao : string;
    proxNodes: string[];
    links_recomendados : string[];

}

export function Corpo() {

    let tamanho = 8;
    let circulos : React.ReactNode[] = []
    for(let i = 0; i < tamanho; i++){

        circulos.push(<li>Ola</li>)

    }

    return (<div className="Corpo">
                <ul className="Centro">
                    {}
                </ul>
            </div>)

}