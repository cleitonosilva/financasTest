'use client';
import { useState } from "react";
import Transacao from "../../logic/financas/Transacao";
import styles from './AddNovaTransacao.module.scss';
import Modal from "../modal/ModalForms";
import Formulario from "../formulario/Formulario";

/**
 * Props para o componente AddNovaTransacao.
 */
interface AddNovaTransacaoProps {
    salvarTransacao: (transacao: Transacao) => void;
}

export default function AddNovaTransacao({ salvarTransacao }: AddNovaTransacaoProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    /**
     * Função para salvar a transação e fechar o modal.
     *
     * @param {Transacao} transacao - A transação a ser salva.
     */
    function salvarEFechar(transacao: Transacao) {
        salvarTransacao(transacao);
        setIsModalOpen(false);
    }

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className={styles.botaoNovo}>
                NOVA TRANSAÇÃO
            </button>
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            >
                <Formulario
                    salvar={salvarEFechar}
                    cancelar={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
}
