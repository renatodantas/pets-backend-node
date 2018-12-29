# PETS (backend em NodeJS)

O projeto utiliza as seguintes tecnologias:
- NodeJS v10.x
- PostgreSQL 11.x (docker)
- Typescript 3.x
- TypeORM
- Nodemon (para autoreload)

### Configuração do banco de dados

Para criar banco de dados que servirá de exemplo para o projeto (usando docker):

`$ docker run \
  --name pets \
  -v pets:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=123456 \
  -p 5432:5432
  -d postgres:11`

Para iniciar o banco depois de criado:

`$ docker start pets`

### Iniciando o projeto

Após o checkout do projeto do repositório, execute um `npm install` no diretório para instalar as dependências.
Depois, basta iniciar o projeto com `npm run dev`.

### Testando se tudo está OK

Acesse o endereço http://localhost:8080/ e verifique se a mensagem (TODO: mensagem aqui) aparece.
