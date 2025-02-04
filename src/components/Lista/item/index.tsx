import { ITarefa } from "../../../types/tarefa";
import styles from "./item.module.scss"

interface props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa,
}: props) {
  return (
    <li onClick={()=> !completado && selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
    })}
     className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${completado ? styles.itemCompletado : ''}`}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={styles.concluido} aria-label="Tarefa completa"></span>}
    </li>
  );
}
