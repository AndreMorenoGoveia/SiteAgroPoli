import './Corpo.scss'
import React from 'react'
import { Icone } from '../Auxiliares/Icone';
import axios from 'axios';
import esferas from '../dados/esferas.json'


interface Esfera {
    descricao: string;
    linksRecomendados: string[];
    icon: string;
    titulo: string;
    filhos: string[];
    id: string;
  }

const tempoEsfera = 5;
const tempoExplode = 50



type UserProps = {

    userAtual : number

}

export function Corpo ({userAtual}:UserProps) {

    /* Camada Inicial */
    const camadaInicial = "1"
    const [camada, setCamada] = React.useState(camadaInicial);
    let keyIcone = 0;



    /* Esferas */
    //const [esferas, setEsferas] = React.useState<Esfera[]>([]);

    /* Esfera clicada */
    const [esferaSelecionada, setEsferaSelecionada] = React.useState(camadaInicial)

    /* Histórico */
    const [historico, setHistorico] = React.useState<React.ReactNode[]>([]);

    /* Visual */
    const [visual, setVisual] = React.useState<React.ReactNode[]>([]);


    const [alternador, setAlternador] = React.useState(false);


    /* Botão muda camada */
    const handleClickMudaCamada = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const camadaAnterior = camada
        /* Muda a camada */
        const esfera = esferas.filter(
            (esfera) => esfera.id == esferaSelecionada
        )[0]
        if(esfera.filhos.length > 0) {
            setCamada(esferaSelecionada);
        
            /* Acrescenta ao historico */
            setHistorico([...historico,
                        <div className="historico" onClick={() => {
                                    setEsferaSelecionada(camadaAnterior)
                                    setCamada(camadaAnterior)
                                    setVisual([])
                                    setHistorico((prevHistorico) => prevHistorico.slice(0, historico.length))
                                    }
                                    } key={historico.length + 1}>
                                <div className="bolinha" />
                                {camadaAnterior == camadaInicial ? 'Início' : esferas.filter(
                                    (esfera) => esfera.id == camadaAnterior
                                )[0].titulo}
                            </div>])
        }
    }


    /* Efeito de mudar o usuário */
    React.useEffect(() => {

        setVisual([])
        setCamada((prevCamada) => camadaInicial);
        setEsferaSelecionada((prevEsfera) => camadaInicial);
        setHistorico([])
        setAlternador((prevAlternador) => !prevAlternador)

        // axios.get("http://127.0.0.1:3001/check").then((res) => {setEsferas(res.data)
        //
        //                                                         console.log("Esferas")
        //                                                         console.table(esferas)
        //                                                         console.log("Dados")
        //                                                         console.table(res.data)})

    }, [userAtual])

    React.useEffect(() => {
    if(esferas[0] !== undefined){
        if(esferaSelecionada != camada){

            

            let esferaFilho = esferas.filter((esfera) => esfera.id == esferaSelecionada)[0]
            keyIcone++;
            setVisual([<div className="pretoBranco" onClick={() => {setEsferaSelecionada(camada)}} style={{zIndex: 1}}>
                            <div className="tituloEsfera">{esferaFilho.titulo}</div>
                            <div className="descricaoEsfera">{esferaFilho.descricao}</div>
                            <div className="bola" style={{position: "relative", zIndex: 2}} onClick={handleClickMudaCamada}>
                                <Icone key={keyIcone} iconName={esferaFilho.icon} animationDelay={0} />
                            </div>
                        </div>])

        }
        else{

            let dadosCamada = esferas.filter((esfera) => esfera.id == camada)[0]

            let filhosCamada = dadosCamada.filhos


            if(filhosCamada.length == 1){
                keyIcone++;
                setVisual([filhosCamada.map((filho) => {
                    let esferaFilho = esferas.filter((esfera) => esfera.id == dadosCamada.filhos[0])[0]
                    return (<div className="bola" onClick={() => {
                            setEsferaSelecionada(esferaFilho.id);
                            }} key={1}>
                            <div className="explode"/>
                            <Icone key={keyIcone} animationDelay={0} iconName={esferaFilho.icon}/>
                            </div>)
                }
                
                ), , <div className="historicoContainer" key={1}> {historico} </div>])
            }
            else {
                setVisual([filhosCamada.map((filho, i) => {
                    let delay = i*(tempoEsfera/filhosCamada.length)
                    let esferaFilho = esferas.filter((esfera) => esfera.id == filho)[0]
                    keyIcone++;
                    return (<div className="bolagirando" style={{animationDelay: `${delay}s`}} key={i} 
                                 onClick={() => {
                                    setEsferaSelecionada(filho);
                                    }}>
                                <div className="explode" style={{animationDelay: `${delay*1000 + tempoExplode}ms`}} />
                                <div className="internoBola" style={{animationDelay: `${delay}s`}} >
                                    <Icone key={keyIcone} animationDelay={delay} iconName={esferaFilho.icon} />
                                </div>
                            </div>)

                }), <div className="historicoContainer" key={filhosCamada.length}>{historico} </div>])
            }

        }
    }
    }, [camada, esferaSelecionada, alternador])




    return (<div className="Corpo">
                   {visual}   
            </div>)

}