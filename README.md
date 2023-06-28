## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## commands
> npx create-next-app@latest web --use-npm
# yes for all
> npm i @rocketseat/eslint-config -D
> npm i prettier-plugin-tailwindcss -D

# Ajustar arquivo
adicionar o "@rocketseat/eslint-config/react" com array ao arquivo eslintrc.json
criar arquivo prettier.config.json e add

```
module.exports = {
  plugin: [require('prettier-plugin-tailwindcss')],
}
```

## Build and run:
```
docker build -t web-to-docker . 
docker run -d -p 8088:3000 --name web-to-docker web-to-docker
```
Open `http://localhost:8088` in your browser.