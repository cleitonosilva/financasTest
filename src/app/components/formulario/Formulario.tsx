import { useEffect, useState } from 'react';
import useFormulario from '../../data/hooks/useFormulario';
import { TipoTransacao } from '../../logic/financas/TipoTransacao';
import Transacao from '../../logic/financas/Transacao';
import styles from './Formulario.module.scss';
import IconArrowDownCircle from '../../assets/icons/IconArrowDownCircle';
import IconArrowUpCircle from '../../assets/icons/IconArrowUpCircle';

interface FormularioProps {
    salvar?: (transacao: Transacao) => void;
    cancelar?: () => void;
}

export default function Formulario({ salvar, cancelar }: FormularioProps) {
    const transacao = new Transacao();
    transacao.categoria = ''; // Inicializar a categoria como string vazia

    const { dados, alterarAtributo } = useFormulario<Transacao>(transacao);
    const [isFormValid, setIsFormValid] = useState(false);
    const [sugestoesDescricao, setSugestoesDescricao] = useState<string[]>([]);

    useEffect(() => {
        const formValido =
            dados?.descricao?.trim() !== '' &&
            dados?.valor > 0 &&
            dados?.categoria?.trim() !== '' &&
            (dados?.tipo === TipoTransacao.RECEITA || dados?.tipo === TipoTransacao.DESPESA);
        setIsFormValid(formValido);
    }, [dados.descricao, dados.valor, dados.categoria, dados.tipo]);

    // Carregar descrições salvas do localStorage ao montar o componente
    useEffect(() => {
        const descricoesSalvas = JSON.parse(localStorage.getItem('descricoes') || '[]');
        setSugestoesDescricao(descricoesSalvas);
    }, []);

    // Salvar nova descrição no localStorage
    const salvarDescricaoNoLocalStorage = (descricao: string) => {
        const descricoesSalvas = JSON.parse(localStorage.getItem('descricoes') || '[]');
        if (!descricoesSalvas.includes(descricao)) {
            descricoesSalvas.push(descricao);
            localStorage.setItem('descricoes', JSON.stringify(descricoesSalvas));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            salvarDescricaoNoLocalStorage(dados.descricao || '');
            salvar?.(dados);
            cancelar?.();
        }
    };

    const formatarMoeda = (valor: number | string) => {
        if (typeof valor === 'string' && valor === '') {
            return '';
        }

        return Number(valor).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    const handleValorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorEntrada = e.target.value;
        let valor = valorEntrada.replace(/\D/g, '');

        if (valor === '') {
            alterarAtributo('valor')(0);
            e.target.value = '';
            return;
        }

        valor = (parseFloat(valor) / 100).toFixed(2).replace('.', ',');
        alterarAtributo('valor')(parseFloat(valor.replace(',', '.')));
        e.target.value = formatarMoeda(valor);
    };

    return (
        <div className={styles.formulario}>
            <h2 className={styles.formulario__titulo}>Cadastrar Transação</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <input
                        type="text"
                        className={styles.campo__input}
                        placeholder="Nome"
                        value={dados.descricao || ''}
                        onChange={alterarAtributo('descricao')}
                        list="sugestoesDescricao"
                    />
                    <datalist id="sugestoesDescricao">
                        {sugestoesDescricao.map((descricao, index) => (
                            <option key={index} value={descricao} />
                        ))}
                    </datalist>
                </div>

                <div className={styles.campo}>
                    <input
                        type="text"
                        className={styles.campo__input}
                        placeholder="Preço"
                        value={dados.valor ? formatarMoeda(dados.valor) : ''}
                        onChange={handleValorInput}
                    />
                </div>

                <div className={styles['tipo-transacao']}>
                    <button
                        type="button"
                        className={`${styles['tipo-transacao__botao']} ${dados.tipo === TipoTransacao.RECEITA ? styles['tipo-transacao__botao--ativo'] : ''}`}
                        onClick={() => alterarAtributo('tipo')(TipoTransacao.RECEITA)}
                    >
                        <IconArrowUpCircle />
                        Entrada
                    </button>
                    <button
                        type="button"
                        className={`${styles['tipo-transacao__botao']} ${dados.tipo === TipoTransacao.DESPESA ? styles['tipo-transacao__botao--ativo'] : ''}`}
                        onClick={() => alterarAtributo('tipo')(TipoTransacao.DESPESA)}
                    >
                        <IconArrowDownCircle />
                        Saída
                    </button>
                </div>

                <div className={styles.campo}>
                    <input
                        type="text"
                        className={styles.campo__input}
                        placeholder="Categoria"
                        value={dados.categoria || ''}
                        onChange={alterarAtributo('categoria')}
                    />
                </div>

                <button type="submit" className={styles.formulario__botao_submit} disabled={!isFormValid}>
                    CADASTRAR
                </button>
            </form>
        </div>
    );
}
