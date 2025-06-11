### Alunos

#### Lucas Teodoro Barbosa - `UC22200699`

#### Rodger Vidal Dias - `UC23100279`

#### Plinio Augusto - `UC23103024`

#### Letícia Rodrgues de Souza - `UC23101873`

#### Pedro Thiago Pereira Revoredo - `UC23102203`

#### Luis Gustavo Correia da Silva – `UC23100032`

## Como Rodar

### Passo 1
Entre na pasta e instale as dependências 

```bash
cd ifood_clone_nest
npm install
```
### Passo 2 
Depois altere as credenciais de banco de dados para o seu postgres e o nome do banco de dados também
`app.module.ts`
```typescript
@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '******',
      password: '********',
      database: '******',
      synchronize: true,
      autoLoadEntities: true,
    }),
```

### Passo 3 

Após concluído os passos anteriores 
Rodar api e executar os testes `teste.http`

```bash
npm start run:dev 
``` 

