import styles from './HeaderTransacoes.module.scss';

export default function HeaderTransacoes() {
  return (
    <div className={styles.header}>
      <div>Descrição</div>
      <div>Valor</div>
      <div>Categoria</div>
      <div>Data</div>
      <div className={styles.acoesHeader}>Ações</div>
    </div>
  );
}
