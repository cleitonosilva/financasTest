'use client';
import styles from './Body.module.scss';
import { useEffect, useState } from 'react';

/**
 * Props para o componente Body.
 */
interface BodyProps {
    valor: number;
    destacado?: boolean;
}

export default function Body({ valor, destacado }: BodyProps) {
    const [formattedValor, setFormattedValor] = useState<string>('');

    useEffect(() => {
        if (valor !== undefined) {
            setFormattedValor(formatarValor(valor));
        }
    }, [valor]);

    /**
     * Função que formata um valor numérico para o formato de moeda brasileira.
     *
     * @param {number} valor - O valor numérico a ser formatado.
     * @returns {string} Uma string formatada como moeda brasileira.
     */
    const formatarValor = (valor: number): string => {
        const valorAbsoluto = Math.abs(valor);
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(valorAbsoluto);
    };

    return (
        <div className={`${styles.valor} ${destacado ? styles.valorDestacado : ''}`}>
            {formattedValor}
        </div>
    );
}
