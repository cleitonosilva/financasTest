import { useCallback, useEffect, useState } from "react";
import Transacao from "../../logic/financas/Transacao";
import { v4 as uuidv4 } from 'uuid';

/**
 * Hook customizado para gerenciar transações financeiras.
 *
 * @returns {object} Um objeto contendo os dados e métodos para gerenciar transações financeiras.
 */
export default function useTransacao() {
    const [data, setData] = useState<Date>(new Date());
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);
    const [transacao, setTransacao] = useState<Transacao | null>(null);

    /**
     * Busca as transações salvas no localStorage e atualiza o estado.
     */
    const buscarTransacoes = useCallback(async function () {
        try {
            const transacoesLocal = localStorage.getItem('transacoes');
            if (transacoesLocal) {
                const transacoesParseadas = JSON.parse(transacoesLocal).map((t: Transacao) => ({
                    ...t,
                    data: new Date(t.data),
                }));
                setTransacoes(transacoesParseadas);
            }
        } catch (error) {
            console.error('Erro ao carregar transações:', error);
            setTransacoes([]);
        }
    }, []);

    useEffect(() => {
        buscarTransacoes();
    }, [buscarTransacoes]);

    /**
     * Salva uma transação no estado e no localStorage.
     *
     * @param {Transacao} transacao - A transação a ser salva.
     */
    async function salvar(transacao: Transacao) {
        let novasTransacoes: Transacao[];

        const transacaoComData = {
            ...transacao,
            data: new Date(transacao.data),
        };

        if (transacao.id) {
            novasTransacoes = transacoes.map(t => 
                t.id === transacao.id ? transacaoComData : t
            );
        } else {
            const novaTransacao = {
                ...transacaoComData,
                id: uuidv4(),
            };
            novasTransacoes = [...transacoes, novaTransacao];
        }

        setTransacoes(novasTransacoes);
        localStorage.setItem('transacoes', JSON.stringify(novasTransacoes));
        setTransacao(null);
    }

    /**
     * Exclui uma transação do estado e do localStorage.
     *
     * @param {Transacao} transacao - A transação a ser excluída.
     */
    async function excluir(transacao: Transacao) {
        const novasTransacoes = transacoes.filter(t => t.id !== transacao.id);
        setTransacoes(novasTransacoes);
        localStorage.setItem('transacoes', JSON.stringify(novasTransacoes));
        setTransacao(null);
    }

    return {
        data,
        transacoes,
        transacao,
        salvar,
        excluir,
        selecionar: setTransacao,
        alterarData: setData,
    };
}
