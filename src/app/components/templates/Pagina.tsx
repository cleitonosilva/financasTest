import { ReactNode } from 'react'
import styles from './Pagina.module.scss'

interface PaginaProps {
    externa?: boolean
    children: ReactNode
    className?: string
}

export default function Pagina({className, children, externa}: PaginaProps) {
    function renderizar() {
        return (
            <div className={`${styles.pagina} ${className ?? ''}`}>
                {children}
            </div>
        )
    }

    return externa ? renderizar() : renderizar()
}