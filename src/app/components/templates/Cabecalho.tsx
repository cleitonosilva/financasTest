import Transacao from '../../logic/financas/Transacao'
import AddNovaTransacao from './AddNovaTransacao'
import styles from './Cabecalho.module.scss'
import Image from 'next/image'

interface CabecalhoProps {
    salvarTransacao: (transacao: Transacao) => void
}


export default function Cabecalho({salvarTransacao}: CabecalhoProps) {
    return (
        <div className={styles.cabecalho}>
            <div className={styles.logoContainer}>
                <Image 
                    src="/logo.svg"
                    alt="Ticto"
                    width={186}
                    height={34}
                    priority
                />
            </div>
            <AddNovaTransacao salvarTransacao={salvarTransacao} />
        </div>
    )
}