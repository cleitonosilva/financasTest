# Ticto Finanças

**Sobre o Projeto**

**Ticto Finanças** é uma aplicação web de gerenciamento de transações financeiras construída como um teste técnico de desenvolvedor front-end, utilizando o framework **Next.js**. O objetivo principal do projeto é fornecer uma interface prática para adicionar, visualizar, editar e excluir transações financeiras, permitindo que os usuários acompanhem suas receitas e despesas de forma organizada. Esta aplicação simula um cenário de desenvolvimento real, exigindo boas práticas de modularização, estilização e documentação.

Tecnologias Utilizadas

* **Next.js** v15.0.2: Framework utilizado para a criação do frontend e servidor do projeto, fornecendo uma solução completa para a renderização do lado do cliente e do servidor.

* **React** v19.0.0-rc: Biblioteca JavaScript para construção da interface do usuário, proporcionando componentes reutilizáveis e eficientes.

* **Sass** v1.80.6: Utilizado para estilização, permitindo escrita modular e reutilizável de estilos CSS.

* **UUID** v11.0.2: Biblioteca utilizada para geração de identificadores únicos para transações.

## Estrutura do Projeto

O projeto é modularizado para facilitar o desenvolvimento, manutenção e escalabilidade:

* **Components**: Todos os componentes de interface estão organizados em uma estrutura modular. Cada componente possui sua própria folha de estilo (Sass) e a documentação do TypeScript (TS Doc) detalhando os props e funções de cada um, como ItemTransacao, Formulario e Modal.
  * **Estilos SCSS**: Cada componente possui uma folha de estilo SCSS correspondente, garantindo que o CSS seja mantido modularizado, facilitando a manutenção e reutilização dos estilos. 

* **Hooks Customizados**: Há hooks customizados que são utilizados para gerenciar a lógica de estado e efeitos do projeto, como o useFormulario e o useTransacao, que facilitam o gerenciamento dos dados do formulário e as transações financeiras, respectivamente.

* **Padrões de Documentação**: A documentação do código é realizada utilizando **TS Doc**, fornecendo uma visão clara do que cada função ou componente faz, quais são os parâmetros esperados e quais são os retornos possíveis. Isso ajuda os desenvolvedores a entenderem rapidamente o propósito de cada parte do projeto.

* **Persistência Local**: As transações financeiras são armazenadas localmente no navegador utilizando **localStorage**, permitindo que os dados sejam persistentes entre as sessões do usuário.

### Estrutura de Pastas

A estrutura de pastas do projeto foi organizada para seguir os padrões de modularização e facilitar a manutenção do código:

* **src**: Contém todo o código fonte do projeto.
  * **assets**: Contém recursos estáticos, como ícones e imagens.
  * **components**: Contém todos os componentes de interface.
    * **card**: Componentes relacionados à exibição de informações em forma de cartões, como `Body`, `Header` e `Item`.
    * **formulario**: Contém o componente de formulário (`Formulario`) utilizado para gerenciar transações financeiras.
    * **listaTransacoes**: Componentes responsáveis pela listagem de transações, como `HeaderTransacoes`, `ItemTransacao` e `ListaTransacao`.
    * **modal**: Componente de modal (`ModalForms`) utilizado para exibir formulários ou mensagens.
    * **templates**: Componentes mais abrangentes, como `AddNovaTransacao`, `Cabecalho`, e `Pagina`.
  * **data**: Contém hooks customizados utilizados para gerenciar a lógica de estado do projeto.
    * **hooks**: Contém os hooks `useFormulario` e `useTransacao`.
  * **logic**: Contém a lógica principal do projeto.
    * **financas**: Contém classes e enums, como `Transacao` e `TipoTransacao`, que representam as entidades financeiras do sistema.
  * **utils**: Contém funções auxiliares e utilitárias.


## Pré-requisitos e Instalação

Para executar o projeto em sua máquina, você precisará do **Node.js**. Recomendamos o uso do **NVM** (Node Version Manager) para garantir a versão correta do Node. O projeto utiliza a versão `v20.17.0`.

**Passos para Instalação**

1. **Instale o NVM** (caso ainda não tenha).
    
   * Siga as instruções no repositório oficial: [NVM GitHub](https://github.com/nvm-sh/nvm)

2. **Configure a versão do Node:**
   * No diretório do projeto, execute:
    ```bash 
    nvm use
    ```
    Caso você não tenha a versão instalada, utilize:
    ```bash 
    nvm install
    ```
3. **Execute o projeto:** 
   * Execute o comando:
   ```bash 
    npm install
   ```
4. **Execute o projeto:** 
    * Para iniciar o servidor de desenvolvimento:
   ```bash 
    npm run dev
   ```
   * O projeto será executado no endereço padrão http://localhost:3000.


## Scripts Disponíveis

* `npm run dev`: Inicia o servidor de desenvolvimento do Next.js.

* `npm run build`: Faz a build da aplicação para produção.

* `npm run start`: Inicia a aplicação já compilada.

* `npm run lint`: Verifica se há problemas no código com o ESLint.

## Arquivo `.nvmrc`
O projeto inclui um arquivo .nvmrc que especifica a versão do Node.js a ser utilizada (`v20.17.0`). Isso facilita a padronização do ambiente para todos os desenvolvedores, garantindo consistência na execução do código.

## Dependências e Ferramentas de Desenvolvimento

* **ESLint** v8: Ferramenta para garantir a qualidade do código e aderência aos padrões estabelecidos.

* **TypeScript** v5: Adiciona tipagem estática ao JavaScript, ajudando a evitar erros durante o desenvolvimento e facilitando a manutenção.

* **@types**: Tipos para bibliotecas Node e React, garantindo compatibilidade e segurança durante o desenvolvimento.

## Estrutura dos Componentes

Os componentes foram desenvolvidos seguindo padrões de modularização e reutilização, sempre com a responsabilidade única em mente. Isso significa que cada componente é responsável por uma parte específica da UI ou lógica do sistema. Exemplos incluem:

`Formulario`: Componente responsável por criar ou editar transações financeiras.

`ItemTransacao`: Componente para exibir uma transação específica.

`ListaTransacoes`: Componente que gerencia e exibe a lista de transações.

`Fomulario`: Componente que exibe o formulário para adicionar na lista de transações uma transação.

Os componentes são bem documentados utilizando **TS Doc**, o que permite fácil integração e compreensão por novos desenvolvedores que desejem contribuir para o projeto.

## Gerenciamento de Estado

O projeto utiliza hooks customizados para gerenciar o estado dos formulários e das transações. O hook `useFormulario` é responsável por facilitar o gerenciamento de dados dos formulários, enquanto o hook `useTransacao` lida com a lógica das transações financeiras, incluindo salvar, excluir, e buscar transações do localStorage.

## Autor

Desenvolvido por **Cleiton Oliveira**.
* **Desenvolvedor Front-End**: 

* **Contatos**:
  * Email: cleiton.o.dev@gmail.com
  * Telefone: 21964099980 -  [WhatsApp](https://api.whatsapp.com/send?phone=5521964099980&text=Ol%C3%A1%20Cleiton%2C%20gostaria%20de%20falar%20sobre%20Desenvolvimento%20web.%20)
  * LinkedIn: [Cleiton Oliveira](https://www.linkedin.com/in/cleiton-oliveira-8637b983/)
# financasTest
