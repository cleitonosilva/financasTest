export default class Dinheiro {
    private static _lingua = "pt-BR"
    private static _moeda = "BRL"

    /**
     * Formata um número para o formato de moeda brasileiro.
     * @param num - O valor numérico a ser formatado.
     * @returns Uma string representando o valor formatado como moeda brasileira.
     */
    static formatar(num: number): string {
        return (num ?? 0).toLocaleString(Dinheiro._lingua, {
            style: "currency", currency: Dinheiro._moeda
        })
    }

    /**
     * Desformata uma string de moeda para um valor numérico.
     * @param valor - A string representando o valor em moeda brasileira.
     * @returns O valor numérico correspondente.
     */
    static desformatar(valor: string): number {
        const nums = valor.replace(/[^0-9]+/g, "")
        const i = nums.length - 2
        return Number(`${nums.substring(0, i)}.${nums.substring(i)}`)
    }
}
