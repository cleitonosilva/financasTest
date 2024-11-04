'use client'

import IconArrowDown from '../../assets/icons/IconArrowDown'
import IconArrowUp from '../../assets/icons/IconArrowUp'
import { TipoTransacao } from '../../logic/financas/TipoTransacao'
import Transacao from '../../logic/financas/Transacao'
import Item from './Item'
import styles from './index.module.scss'

interface CardProps {
    transacoes: Transacao[]
}

/**
 * Componente que exibe um resumo das transações, incluindo entradas, saídas e saldo total.
 * @param props - Propriedades do componente que incluem uma lista de transações e uma classe opcional para estilização.
 * @returns Um elemento JSX que renderiza o sumário das transações.
 */
export default function Card({ transacoes }: CardProps) {
    /**
     * Função que calcula o valor total das transações.
     * @param total - O valor total acumulado até o momento.
     * @param r - A transação atual.
     * @returns O valor total atualizado.
     */
    const totalizar = (total: number, r: Transacao) => total + r.valor

    /**
     * Calcula o total de receitas das transações fornecidas.
     */
    const receitas = transacoes
        .filter((r) => r.tipo === TipoTransacao.RECEITA)
        .reduce(totalizar, 0)

    /**
     * Calcula o total de despesas das transações fornecidas.
     */
    const despesas = transacoes
        .filter((r) => r.tipo === TipoTransacao.DESPESA)
        .reduce(totalizar, 0)

    /**
     * Calcula o saldo total, subtraindo as despesas das receitas.
     */
    const total = receitas - despesas

    const items = [
        { titulo: 'Entradas', valor: receitas, icone: <IconArrowUp /> },
        { titulo: 'Saídas', valor: despesas, icone: <IconArrowDown /> },
        { titulo: 'Saldo Total', valor: total, destacado: true }
    ]

    return (
        <div className={styles.cardContainer}>
            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </div>
    )
}