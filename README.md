# BLOG LEVI - React + Vite

Para a criação deste blog foi utilizado o contentful para a geração dos itens servidos ao front, estes itens são servidos com base no arquivo de configuração situado na utils/createContentful.js, cujas variáveis de ambiente responsáveis para conectar com nossa tabela remota se localizam no arquivo .env.local (ignorado pelo git). Estes valores são encontrados na parte de API KEYS da sua tabela contentful.

# De acordo com a doc, um pouco do contentful:

[Contentful](https://www.contentful.com) provides a content infrastructure for digital teams to power content in websites, apps, and devices. Unlike a CMS, Contentful was built to integrate with the modern software stack. It offers a central hub for structured content, powerful management and delivery APIs, and a customizable web app that enable developers and content creators to ship digital products faster.

The Contentful Discovery web app gives you a quick and easy way to preview your content on a web environment, and explore the contents of your Spaces.

You can try out the app at https://discovery.contentful.com/ or you can check out the source code and suggest your own improvements.

# Running app locally

## Prepare

clone the app and `cd` to the directory

```shell
git clone https://github.com/leeviife/blog_fiap_levi.git
```

## Install dependencies via npm

```shell
npm install
```

## Install dependencies via yarn

```shell
yarn
```

## Start the app

```shell
npm start
```

Por padrão o app deve subir na porta 5173, logo você poderá acessar a url local: `http://localhost:5173/` .


# Para um novo build:

Após suas alterações, para que elas reflitam no ambiente ao qual vc às hospedou, é necessário a execução do build:

```shell
npm run build
```
# O ambiente foi hospedado no NETLIFY :

O Netflify leu a branch main do nosso repositório git do projeto à procura do repositório DIST. A url pública para acesso é a seguinte:

https://main--spiffy-meringue-bba6d4.netlify.app/

É necessário configurar as variáveis de ambiente no servidor netlify também para que o projeto tenha acesso ao contentful.
