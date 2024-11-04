import styles from './Pagina.module.scss'

interface PaginaProps {
    externa?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
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