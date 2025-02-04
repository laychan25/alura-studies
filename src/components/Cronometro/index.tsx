import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import  Relogio  from "./Relogio";
import styles from './cronometro.module.scss'


interface Props {
    selecionado : ITarefa | undefined ,
    finalizarTarefa : ()=>void
}

function Cronometro ({selecionado , finalizarTarefa}: Props){
    const [tempo , setTempo] = useState<number>()
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado ])

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador -1);
                return regressiva(contador- 1)
            }
            finalizarTarefa()
        }, 1000)

    }
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha a tarefa e inicie o cronometro</p>
            <div className={styles.relogioWrapper}>
              <Relogio tempo={tempo} />
            </div>
            <Botao onClick={()=> regressiva(tempo)}>
                    Iniciar
                </Botao>
        </div>
    )
}

export default Cronometro