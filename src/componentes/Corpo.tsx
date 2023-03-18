import './Corpo.scss'
import esferas from '../dados/esferas.json'
import React from 'react'
import { Icone } from '../Auxiliares/Icone';


type UserProps = {

    userAtual : number

}

export function Corpo ({userAtual}:UserProps) {

    /* Camada Inicial */
    const camadaInicial = 1
    const [camada, setCamada] = React.useState(camadaInicial);

    /* Esfera clicada */
    const [esferaSelecionada, setEsferaSelecionada] = React.useState(camadaInicial)
    /* Esfera atual */
    let esferaAtual = camadaInicial;
    /* Esfera selecionada */

    /* Histórico */
    const [historico, setHistorico] = React.useState<React.ReactNode[]>([]);

    /* Visual */
    const [visual, setVisual] = React.useState<React.ReactNode[]>([]);


    /* Botão muda camada */
    const handleClickMudaCamada = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const camadaAnterior = camada
        /* Muda a camada */
        setCamada(esferaSelecionada);
        /* Acrescenta ao historico */
        setHistorico([...historico,
                       <div className="historico" onClick={() => {
                                setEsferaSelecionada(camadaAnterior)
                                setCamada(camadaAnterior)
                                setVisual([])
                                setHistorico((prevHistorico) => prevHistorico.slice(0, historico.length - 1))
                                }
                                }>
                            <div className="bolinha" />
                            {camadaAnterior == camadaInicial ? 'Início' : esferas.filter(
                                (esfera) => esfera.id == camadaAnterior
                            )[0].titulo}
                        </div>])
    }


    /* Efeito de mudar o usuário */
    React.useEffect(() => {

        setVisual([])
        setCamada((prevCamada) => camadaInicial);
        setEsferaSelecionada((prevEsfera) => camadaInicial);

    }, [userAtual])

    React.useEffect(() => {

        if(esferaSelecionada != camada){

            let esferaFilho = esferas.filter((esfera) => esfera.id == esferaSelecionada)[0]

            setVisual([<div className="pretoBranco" onClick={() => {setEsferaSelecionada(camada)}} style={{zIndex: 1}}>
                            <div className="tituloEsfera">{esferaFilho.titulo}</div>
                            <div className="descricaoEsfera">{esferaFilho.descricao}</div>
                            <div className="bola" style={{position: "relative", zIndex: 2}} onClick={handleClickMudaCamada}>
                                <Icone iconName={esferaFilho.icon} animationDelay={0} />
                            </div>
                        </div>])

        }
        else{

            let dadosCamada = esferas.filter((esfera) => esfera.id == camada)[0]

            let filhosCamada = dadosCamada.filhos


            if(filhosCamada.length == 1){
                let esferaFilho = esferas.filter((esfera) => esfera.id == dadosCamada.filhos[0])[0]
                setVisual([<div className="bola" >
                                <div className="explode"/>
                                <Icone animationDelay={0} iconName={esferaFilho.icon}/>
                            </div>, <div className="historicoContianer"> {historico} </div>])
            }
            else {
                setVisual([filhosCamada.map((filho, i) => {
                    let delay = i*(10/filhosCamada.length)
                    let esferaFilho = esferas.filter((esfera) => esfera.id == filho)[0]
                    console.log(esferaFilho)
                    return (<div className="bolagirando" style={{animationDelay: `${delay}s`}} 
                                 onClick={() => {
                                    setEsferaSelecionada(filho);
                                    }}>
                                <div className="explode" style={{animationDelay: `${delay*1000 + 100}ms`}} />
                                <div className="internoBola" style={{animationDelay: `${delay}s`}}>
                                    <Icone animationDelay={delay} iconName={esferaFilho.icon}/>
                                </div>
                            </div>)

                }), <div className="historicoContianer"> {historico} </div>])
            }

        }

    }, [camada, esferaSelecionada, visual])




    return (<div className="Corpo">
                   {visual}   
            </div>)

}