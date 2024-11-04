import { useCallback, useState } from "react";
import Transacao from "../../logic/financas/Transacao";

/**
 * Hook customizado para gerenciar o estado de um formulário.
 *
 * @template T - O tipo dos dados do formulário.
 * @param {T} [dadosIniciais] - Os dados iniciais do formulário.
 * @returns {object} Um objeto contendo os dados do formulário e métodos para atualizá-los.
 */
export default function useFormulario<T = Transacao>(dadosIniciais?: T) {
    const [dados, setDados] = useState<T>(dadosIniciais ?? {} as T);

    /**
     * Atualiza todos os dados do formulário.
     *
     * @param {T} dados - Os novos dados do formulário.
     */
    const alterarDados = useCallback(function (dados: T) {
        setDados(dados);
    }, []);

    /**
     * Atualiza um atributo específico dos dados do formulário.
     *
     * @param {string} atributo - O atributo a ser atualizado.
     * @param {Function} [fn] - Função opcional de transformação para o valor.
     * @returns {Function} Uma função para lidar com a atualização.
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    const alterarAtributo = useCallback(function (atributo: string, fn?: Function) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (valorOuEvento: any) => {
            const v = valorOuEvento?.target?.value ?? valorOuEvento;
            setDados({ ...dados, [atributo]: fn?.(v) ?? v });
        };
    }, [dados]);

    return {
        dados,
        alterarDados,
        alterarAtributo
    };
}
