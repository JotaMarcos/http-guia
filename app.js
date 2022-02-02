let http = require('http')

http.createServer(function(requisicao, resposta){
    resposta.end('<h1>Seja Bem Vindo a Minha Home Page</h1><h4>https://masterbare.netlify.app/</h4>')
}).listen(3000)

console.log('Servidor está rodando!')
