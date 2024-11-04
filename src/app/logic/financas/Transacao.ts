import { TipoTransacao } from "./TipoTransacao"

export default class Transacao {
    id: string
    descricao: string
    valor: number
    data: Date = new Date()
    tipo: TipoTransacao
    categoria?: string 
}