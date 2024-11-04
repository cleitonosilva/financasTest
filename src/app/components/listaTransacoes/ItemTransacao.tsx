import IconTrash from '../../assets/icons/Trash';
import Transacao from '../../logic/financas/Transacao';
import { formatarData } from '../../logic/utils/Data';
import Dinheiro from '../../logic/utils/Dinheiro';
import styles from './ItemTransacao.module.scss';

/**
 * Props para o componente ItemTransacao.
 */
interface ItemTransacaoProps {
  transacao: Transacao;
  handleExcluir: (transacao: Transacao) => void;
}

/**
 * Substitui a vírgula por " às" em uma string de data.
 *
 * @param {string} data - A data a ser formatada.
 * @returns {string} A data formatada com " às".
 */
function substituirVirgulaPorAs(data: string): string {
  return data.replace(',', ' às');
}

export default function ItemTransacao({ transacao, handleExcluir }: ItemTransacaoProps) {
  return (
    <>
      <div className={`${styles.item} ${styles.itemDesktop}`}>
        <div>{transacao.descricao}</div>
        <div className={transacao.tipo === 'receita' ? styles.receita : styles.despesa}>
          {Dinheiro.formatar(Number(transacao.valor))}
        </div>
        <div>{transacao.categoria}</div>
        <div>{substituirVirgulaPorAs(formatarData(new Date(transacao.data)))}</div>
        <div className={styles.acoesCell}>
          <button
            type="button"
            className={styles.botaoExcluir}
            onClick={() => handleExcluir(transacao)}
          >
            <IconTrash />
          </button>
        </div>
      </div>

      <div className={`${styles.item} ${styles.itemMobile}`}>
        <div className={styles.cardContent}>
          <div className={styles.infoBlock}>
            <div className={styles.label}>Descrição</div>
            <div>{transacao.descricao}</div>
            <div className={styles.label}>Valor</div>
            <div className={transacao.tipo === 'receita' ? styles.receita : styles.despesa}>
              {Dinheiro.formatar(Number(transacao.valor))}
            </div>
            <div className={styles.label}>Categoria</div>
            <div>{transacao.categoria}</div>
            <div className={styles.label}>Data</div>
            <div>{substituirVirgulaPorAs(formatarData(new Date(transacao.data)))}</div>
          </div>
          <div className={styles.actionBlock}>
            <button
              type="button"
              className={styles.botaoExcluir}
              onClick={() => handleExcluir(transacao)}
            >
              <IconTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
