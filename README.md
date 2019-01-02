# PETS (backend em NodeJS)

O projeto utiliza as seguintes tecnologias:
- NodeJS v10.x
- PostgreSQL 11.x (docker)
- Typescript 3.x
- Typescript Node 7.x
- TypeORM
- Nodemon

## Banco de dados

#### Criando um novo banco de dados

Para criar banco de dados do projeto com as configurações padrões, use o comando:

`npm run db:create`

> É necessário o Docker instalado para que o banco de dados suba com sucesso.

O comando acima sobre um banco Postgres 11.x na porta `5432` com o usuário `postgres` e senha `123456`.

Caso queira subir o container com configurações diferentes, execute o comando usado no arquivo `package.json` para ajustar os parâmetros.

#### Subindo o banco de dados

Use o comando:

`npm run db:start`

## Executando o backend

Após o checkout do projeto do repositório, execute um `npm install` no diretório para instalar as dependências.

Depois, basta iniciar o projeto com `npm start`. Neste comando os migrations serão executados antes de iniciar o backend.

Para subir o backend sem executar os migrations, use o comando `npm run dev`.

### Testando se tudo está OK

Acesse o endereço http://localhost:8080/ e verifique se a mensagem (TODO: mensagem aqui) aparece.

## Migrations

Esta seção descreve como trabalhar com os [migrations](http://typeorm.io/#/migrations) do [TypeORM](http://typeorm.io).

### Criando novos migrations

Execute o comando `npm run migrations:create -- <NomeDoMigration>`, onde `<NomeDoMigration>` é o nome da ação a ser executada.

*Ex.: supondo que o migration a ser executado seja a criação da tabela de donos de pets, a execução do comando `npm run migrations:create -- CreateTableDonos` gerará um arquivo chamado `1546186083594-CreateTableDono.ts`. A numeração no início do arquivo indica o timestamp do momento da geração do arquivo e variará de acordo com a hora gerada.*

Depois do arquivo criado, basta implementar as devidas alterações no arquivo criado em `src/migrations`. A documentação sobre como escrever os migrations estão na [documentação do TypeORM](http://typeorm.io/#/migrations).

#### Executando os migrations

Os migrations são executados normalmente pelo `npm start`. Caso haja necessidade de executá-los manualmente, use o comando:

`npm run migrations:run`

### Revertendo migrations

O comando a ser usado é o:

`npm run migrations:revert`

Cada vez que um migration é revertido