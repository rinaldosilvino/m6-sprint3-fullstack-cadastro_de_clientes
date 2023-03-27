# Nome do projeto

Cadastro de clientes-fullstack

## Projeto e Funcionalidades:

A aplicação tem como objetivo criar um pequeno cadastro de contatos com vínculo, depois mostrar os clientes e seus contatos vinculados.

# Clone do projeto
```
git clone git@github.com:rinaldosilvino/m6-sprint3-fullstack-cadastro_de_contactses.git
```

# Tecnologias utilizadas

React (JavaScript)
Node.js
Express
Insomnia
PostgreSQL
TypeScript
TypeORM


### Primeiro passo é acessar o Backend

# BACKEND

# Acessar diretorio

````
cd backend
````

# Instalar dependencias

````
yarn add package.json
````

# Configurar variáveis de ambiente (crie um arquivo .env, copiando o formato do arquivo .env.example com suas credenciais do Postgres e uma nova database)
````
cp .env.example .env 
````

# Rodar Migrations
````
yarn typeorm migration:run -d src/data-source.ts
````
# Iniciar projeto
````
yarn dev
````


### Em seguida o Frontend pode ser acessado

# FRONTEND 

# Acessar diretorio
````
cd frontend
````

#  Instalar dependencias
````
yarn add
````

# Iniciar projeto
````
yarn start
````


