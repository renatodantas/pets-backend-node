# PETS (backend em NodeJS)

O projeto utiliza as seguintes tecnologias:
- NodeJS v10.x
- PostgreSQL 11.x (docker)
- SQORN
- db-migrate

### Configuração do banco de dados

Para criar banco de dados que servirá de exemplo para o projeto (usando docker):

`$ docker run v pets:/var/lib/postgresql/data --name pets -e POSTGRES_PASSWORD=123456 -d postgres:11`
