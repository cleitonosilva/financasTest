import styles from './Conteudo.module.scss'

interface ConteudoProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    className?: string
}

export default function Conteudo({className, children}: ConteudoProps) {
    return (
        <div className={`${styles.conteudo} ${className ?? ''}`}> 
            {children}
        </div>
    )
}