## # Ifood Clone

## Pré-requisitos

* Node.js v16+ e npm instalados
* PostgreSQL (ou outro banco compatível) rodando localmente
* [Nest CLI]() (opcional)

## Passos para rodar

1. **Clonar o repositório**

   ```
   git clone <URL_DO_REPO>
   cd ifood_clone
   ```
2. **Instalar dependências**

   ```
   npm install
   ```
3. **Configurar variáveis de ambiente**
   Crie um arquivo** **`<span>.env</span>` na raiz com as seguintes chaves (ajuste conforme seu ambiente):

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=ifood_clone
   ```
4. **Rodar migrations (opcional)**
   Se você usar migrations em vez de** **`<span>synchronize: true</span>`, execute:

   ```
   npm run typeorm migration:run
   ```
5. **Iniciar em modo de desenvolvimento**

   ```
   npm run start:dev
   # ou
   nest start --watch
   ```

   Isso habilita** ****hot-reload**, reiniciando o servidor automaticamente quando você salvar alterações.
6. **Testar endpoints**

   * Abra o arquivo** **`<span>testes.http</span>` no VSCode com a extensão REST Client.
   * Clique em** ****Run All** ou execute cada request individualmente.
7. **Acessar**

   * API rodando em:** **`<span>http://localhost:3000</span>`
   * Exemplo de health-check:** **`<span>GET http://localhost:3000/</span>`

---
