'use client'
import styles from './Header.module.scss'

interface HeaderProps {
    titulo: string
    icone?: React.ReactNode
}

/**
 * Componente que exibe o cabeçalho de um item do card, incluindo título e ícone opcional.
 * @param props - Propriedades do componente que incluem título e um ícone opcional.
 * @returns Um elemento JSX que renderiza o cabeçalho do item do card.
 */
export default function Header({ titulo, icone }: HeaderProps) {
    return (
        <div className={styles.header}>
            <span className={styles.titulo}>{titulo}</span>
            {icone && (
                <span className={styles.icone}>
                    {icone}
                </span>
            )}
        </div>
    )
}