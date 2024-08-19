# My GIPHY App

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue.js](https://img.shields.io/badge/vue.js-3.x-brightgreen.svg)
![Quasar](https://img.shields.io/badge/quasar-2.x-green.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.x-blue.svg)

## 📝 Descrição

My GIPHY App é uma aplicação web construída com Vue.js, Quasar, Tailwind CSS e a API do GIPHY. Ela permite que os usuários pesquisem GIFs, adicionem aos favoritos e explorem GIFs por categorias. O projeto foi projetado para ser responsivo e fácil de usar.

## 🚀 Recursos

- Exibir GIFs em tendência
- Pesquisar GIFs por termo
- Favoritar e desfavoritar GIFs
- Explorar GIFs por categorias
- Design responsivo com Quasar e Tailwind CSS

## 🖼️ Preview

![App Screenshot](./screenshot.png)

## 🛠️ Tecnologias

- **Vue.js 3**: Framework JavaScript progressivo para construir interfaces de usuário.
- **Quasar Framework**: Framework baseado em Vue.js para criar interfaces ricas e responsivas.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **Pinia**: Sistema de gerenciamento de estado para Vue.js.
- **API do GIPHY**: Fonte de dados para os GIFs exibidos na aplicação.

## 🖥️ Pré-requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes que vem com o Node.js) ou **Yarn**

## 🛠️ Configuração e Execução do Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/DerekCardoso/sgbr-giphy-app.git
```

### 2. Acesse o diretório do projeto

```bash
cd sgbr-giphy-app
```

### 3. Instale as dependências

Se você estiver usando npm:

```bash
npm install
```

Ou se você estiver usando Yarn:

```bash
yarn install
```

### 4. Executando o Projeto em Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

ou

```bash
yarn dev
```

O projeto estará disponível em http://localhost:8080.

### 5. Compilando para Produção

Para criar uma versão otimizada para produção, use:

```bash
npm run build
```

ou

```bash
yarn build
```

## 🚀 Funcionalidades Principais

### 🏠 Página Inicial

- Exibe GIFs em tendência com uma barra de pesquisa.
- GIFs dispostos em um layout grid, ajustável conforme o tamanho da tela.

### 🌟 Página de Favoritos

- Lista de GIFs que o usuário marcou como favorito.
- Layout grid para exibir os GIFs de maneira uniforme.

### 📚 Página de Categorias

- Lista de categorias disponíveis para explorar.
- Exibe GIFs de uma categoria selecionada pelo usuário.

## 📂 Estrutura do Projeto

Abaixo está a estrutura principal do projeto:

```bash
src/
├── assets/          # Arquivos estáticos
├── components/      # Componentes Vue.js reutilizáveis
├── pages/           # Páginas da aplicação
├── router/          # Configurações de rotas do Vue Router
├── stores/          # Pinia stores para gerenciamento de estado
├── css/             # Arquivos de estilo global (SCSS, CSS)
├── App.vue          # Componente raiz
├── main.js          # Arquivo principal que inicializa a aplicação
```

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

**Derek Cardoso**

- GitHub: [@DerekCardoso](https://github.com/DerekCardoso)
- LinkedIn: [Derek Cardoso](https://www.linkedin.com/in/derek-cardoso)
