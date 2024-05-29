const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        "grupo":'Grupo N°3',
        "integrantes":[
            'Estefanía Sánchez',
            'John Mata',
            'Samuel Cuti',
            'Dustin Marcatoma',
            'Alan Rios',
            'Anthony Minga'
        ]
    })
})

let integrantesGT=[
    {
        id:1,
        nombre: 'Estefanía Melisa Sánchez Párraga',
        edad: 23,
        peso:'57kg',
        altura: '1.59cm',
        carrera: 'Desarrollo de software',
        nacimiento:'11-12-2000',
        sangre:{
            tipo:'A',
            Rh:'+',
        },
        nacionalidad: 'Rusa',
        ubicacion:{
            pais: 'Ecuador',
            ciudad: 'Quito',
            sector: 'La Ofelia'
        },
        correo: 'estefania.sanchez01@epn.edu.ec',
        celular:'0992190967'
    },
    {
        id:2,
        nombre: 'John Jairo Mata Manosalvas',
        edad: 21,
        peso:'70kg',
        altura:'1.87cm',
        carrera: 'Desarrollo de software',
        nacimiento:'27-04-2003',
        sangre:{
            tipo:'A',
            Rh:'+',
        },
        nacionalidad: 'Ecuatoriana',
        ubicacion:{
            pais: 'Ecuador',
            ciudad: 'Quito',
            sector: 'Solanda'
        },
        correo: 'jhon.mata@epn.edu.ec',
        celular:'0990123317'
    },
    {
        id:3,
        nombre:'Rob Samuel Cuti Umaquinga',
        edad: 21,
        peso:'83kg',
        altura: '1.74cm',
        carrera: 'Desarrollo de software',
        nacimiento:'11-10-2003',
        sangre:{
            tipo:'O',
            Rh:'+',
        },
        nacionalidad: 'Ecuatoriana',
        ubicacion:{
            pais: 'Ecuador',
            ciudad: 'Quito',
            sector: 'Pifo'
        },
        correo: 'robsamuel.cuti@epn.edu.ec',
        celular:'0984253930'
    },
    {
        id:4,
        nombre: 'Dustin Joel Marcatoma Saldaña',
        edad: 20,
        peso:'74kg',
        altura: '1.60cm',
        carrera: 'Desarrollo de software',
        nacimiento:'19-03-2004',
        sangre:{
            tipo:'O',
            Rh:'+',
        },
        nacionalidad: 'Ecuatoriana',
        ubicacion:{
            pais: 'Ecuador',
            ciudad: 'Quito',
            sector: 'La Cocha'
        },
        correo: 'dustin.marcatoma@epn.edu.ec',
        celular:'0979008923'
    },
    {
        id:5,
        nombre: 'Alan Josue Rios Mendoza',
        edad: 21,
        peso: '70kg',
        altura: '1.67cm',
        carrera: 'Desarrollo de software',
        nacimiento:'02-01-2003',
        sangre:{
            tipo:'O',
            Rh:'+',
        },
        nacionalidad: 'Ecuatoriana',
        ubicacion:{
            pais: 'Ecuador',
            ciudad: 'Quito',
            sector: 'Martha Bucaram'
        },
        correo: 'alan.rios@epn.edu.ec',
        celular:'0960131442'
    },
    {
        id:6,
        nombre: 'Anthony Alejandro Minga Campoverde',
        edad: 22,
        peso:'82kg',
        altura: '1.76cm',
        carrera: 'Desarrollo de software',
        nacimiento:'27-03-2002',
        sangre:{
            tipo:'A',
            Rh:'+',
        },
        nacionalidad: 'Ecuatoriana',
        ubicacion:{
            pais: 'Ecuador',
            ciudad: 'Quito',
            sector:'Los Cóndores'
        },
        correo: 'anthony.minga@epn.edu.ec',
        celular:'0968862213'
    },
]


app.get('/integrantes',(req,res)=>{
    res.json(integrantesGT)
})

app.get('/integrantes/:id',(req,res)=>{
    const {id} = req.params
    const response = integrantesGT.find(p=> p.id === +id)

    response ? res.json(response): res.send("No se encontró el integrante")

})

app.use(express.static(path.join(__dirname,'public')))

app.get('/productos',(req,res)=>res.send(`
    <h1> Productos </h1>
    <hr>
    <h2> Teclado </h2>
    <img src="teclado.jpg" alt="Teclado" width="300 height="300">
    <h2> Mouse </h2>
    <img src="mouse.jpg" alt="Mouse" width="300" height="300">
    <h2> Monitor </h2>
    <img src="monitor.avif" alt="Monitor" width="300" height="300">
    <h2> CPU </h2>
    <img src="cpu.webp" alt="CPU" width="300" height="300">
    <h2> Tarjeta de video </h2>
    <img src="tarjeta_video.jpg" alt="Tarjeta de video" width="300 height="300">
`))

app.listen(3000)
console.log("Server running")