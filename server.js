const http = require('http')
const express = require ('express')
const bodyParser = require('body-parser')



let contador = 3
let clientes = [
    {
        id: 1,
        nome: 'joao',
        email: 'joao@email.com'
    },
    {
        id:2,
        nome: 'crisitn',
        email: 'cristiana@email.com'
    }
]

const app = express()
app.use(bodyParser.json())
const porta = 3000
app.set('port', porta)

//localhost:3000/cliente (POST)
app.post('/clientes', (req, res) =>{
    const cliente = {
        id: contador++,
        nome: req.body.nome,
        email: req.body.email
    }
    clientes.push(cliente)
    res.status(201).json(clientes)
})


//localhost:3000/cliebtes (GET)
app.get('/clientes',(req, res) =>{
    res.json(clientes)
})

//localhost:3000/teste
app.get('/teste', (req, res) => {
    console.log("passando por aqui")
    res.send('ola')
})


const server = http.createServer(app)
server.listen(porta)
