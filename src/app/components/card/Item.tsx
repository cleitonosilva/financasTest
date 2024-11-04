'use client'
import Body from './Body'
import Header from './Header'
import styles from './Item.module.scss'

interface ItemProps {
    titulo: string
    valor: number
    destacado?: boolean
    icone?: React.ReactNode
}

/**
 * Componente que exibe um item de resumo das transações, incluindo título, valor e ícone opcional.
 * @param props - Propriedades do componente que incluem título, valor, destaque opcional e um ícone opcional.
 * @returns Um elemento JSX que renderiza um item do card das transações.
 */
export default function Item({ titulo, valor, destacado, icone }:ItemProps) {
    return (
        <div className={`${styles.card} ${destacado ? styles.cardDestacado : ''}`}>
            <Header titulo={titulo} icone={icone} />
            <Body valor={valor} destacado={destacado} />
        </div>
    )
}