
import styles from'./lista.module.scss'
import Item from "./item";
import { ITarefa } from '../../types/tarefa';

interface props {
  tarefas : ITarefa[],
  selecionaTarefa : (tarefaSelecionada: ITarefa)  => void
}

function Lista({tarefas, selecionaTarefa}: props) {
 
  return (
    <aside className= {styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
       {tarefas.map((item )=>(
         <Item 
           selecionaTarefa={selecionaTarefa}
           key={item.id}
          {...item}

         />
       ))}
      </ul>
    </aside>
  );
}

export default Lista;
