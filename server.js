const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const routes=require('./routes')
const cors = require('cors')

const app=express()

app.use(cors())

app.set('port', 9000)

const dbOption={
    host: 'localhost',
    port: '3306',
    user: 'quirama',
    password: 'Quijoma.77',
    database: 'marcadores'

}
///middelwars------
app.use(myconn(mysql, dbOption,'single'))
app.use(express.json())

///routes
app.get('/',(req,res)=>{
    res.send('welcome to my app')
})

app.use('/api',routes)

app.listen(app.get('port'),()=>{
    console.log(`server running to port ${app.get('port')}`)
})