import styles from './TituloPagina.module.scss'

export interface TituloPaginaProps {
    principal: string
    secundario?: string
}

export default function TituloPagina({principal }: TituloPaginaProps) {
    return (
        <div className={styles.tituloPagina}>
            {principal}
        </div>
    )
}