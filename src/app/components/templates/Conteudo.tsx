import { ReactNode } from 'react'
import styles from './Conteudo.module.scss'

interface ConteudoProps {
    children: ReactNode
    className?: string
}

export default function Conteudo({className, children}: ConteudoProps) {
    return (
        <div className={`${styles.conteudo} ${className ?? ''}`}> 
            {children}
        </div>
    )
}