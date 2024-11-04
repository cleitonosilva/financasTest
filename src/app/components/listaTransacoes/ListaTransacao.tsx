import Transacao from '../../logic/financas/Transacao';
import HeaderTransacoes from './HeaderTransacoes';
import ItemTransacao from './ItemTransacao';
import styles from './ListaTransacao.module.scss';

/**
 * Props para o componente ListaTransacoes.
 */
interface ListaTransacoesProps {
  transacoes: Transacao[];
  excluirTransacao?: (transacao: Transacao) => void;
}

export default function ListaTransacoes({ transacoes, excluirTransacao }: ListaTransacoesProps) {
  /**
   * Lida com a exclusão de uma transação.
   *
   * @param {Transacao} transacao - A transação a ser excluída.
   */
  function handleExcluir(transacao: Transacao) {
    excluirTransacao?.(transacao);
  }

  return (
    <div className={styles.container}>
      <HeaderTransacoes />
      <div className={styles.listaItems}>
        {transacoes?.map((transacao) => (
          <ItemTransacao
            key={transacao.id}
            transacao={transacao}
            handleExcluir={handleExcluir}
          />
        ))}
      </div>
    </div>
  );
}