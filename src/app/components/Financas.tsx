'use client'

import Conteudo from "./templates/Conteudo";
import Pagina from "./templates/Pagina";
import Cabecalho from "./templates/Cabecalho";
import useTransacao from "../data/hooks/useTransacao";
import gridStyles from "./Grid.module.scss";
import ListaTransacoes from "./listaTransacoes/ListaTransacao";
import Card from "./card/Index";

export default function Financas() {
    const { transacoes, salvar, excluir } = useTransacao()

    return (
        <Pagina>
            <div className={gridStyles.gridContainer}>
                <Cabecalho salvarTransacao={salvar} />
                <Conteudo className={gridStyles.gridItem}>
                    <Card transacoes={transacoes} />
                    <ListaTransacoes
                        transacoes={transacoes}
                        excluirTransacao={(transacao) => {
                            excluir(transacao)
                        }}
                    />
                </Conteudo>
            </div>
        </Pagina>
    )
}
