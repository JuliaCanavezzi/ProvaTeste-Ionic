Prova Angular!!!<br><br>
instalar ionic:<br>
npm install -g @ionic/cli
<br><br>
criar projeto:<br>
ionic start nomeprojeto blank --type=angular
<br><br>
rodar o app:<br>
ionic serve
<br><br>
criação de páginas:<br>
ionic g page (nome da pagina)
<br><br>
Forma de implementar Http em Ionic: (mais eficiente e mais leve):<br>
app.modules
provideHttpClient(withInterceptorsFromDi())
<br><br>
chamadas Http com Json.server:<br>
enviroment.ts<br>
baseUrl : 'http://localhost:3000'
<br><br>
new folder: models<br>
new file: product.ts<br>
export interface Product<br>
<br><br>
ionic g service services/product (criando um serviço)
<br><br>
no constructor você vai implantar as dependencias 
<br><br>
no app-routing tem que alterar a busca por (id)
