const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'roll rida' :{
        Age : 29,
        BirthName : 'roll rida',
        BirthLocation : 'Hyderabad, India'
    },
     'hanuman kind' :{
        Age : 32,
        BirthName : 'Sooraj Cherukat',
        BirthLocation : 'Kondotty, Malappuram, Kerala, India'
    },
     'karan aujla' :{
        Age : 32,
        BirthName : 'Jaskaran Singh Aujla',
        BirthLocation : 'Ludhiana district, Punjab, India'
    },
     'error' :{
        Age : 'Error',
        BirthName : 'Error',
        BirthLocation : 'Error'
    },
 
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersNames = request.params.rapperName.toLowerCase().replace(/\s+/g, ' ')

    if(rappers[rappersNames]){
        response.json(rappers[rappersNames])
    }else{
        response.json(rappers['error'])
    }

    // response.json(rappers)
})

app.listen( process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}, Go catch it! `)
})

