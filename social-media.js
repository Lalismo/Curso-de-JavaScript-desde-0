/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña

2. El sistema debe ser capaz de validar si el usuario y
contraseña ingresados por el usuario existen en la base de datos.

3. Si el usuario y contraseña son correctos, 
en la base de datos debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario

4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y
no mostrar ningun timeline
*/

const usersDatabase=[
        {username:"Estefany",timeline:"Me encata Javascript!", password:"123",},
        {username:"Oscar",timeline:"Bebeloper es lo mejor!", password:"456",},
        {username:"Mariana",timeline:"A mi me gusta mÃ¡s el cafÃ© que el tÃ©",password:"789"},
        {username:"Andres",timeline:"Yo hoy no quiero trabajar",password:"475"},
]



function findUser(user,pass){
    const data =  usersDatabase.find(person => person.username === user && person.password == pass)
    return data || "El usuario o contraseña son incorrectos"
}

function displayUser(data){
    if (data !== undefined && data != null && data !== 'El usuario o contraseña son incorrectos'){
        console.log(`Bienvenido ${data.username} Tu timeline es: ${data.timeline}`)
    }else{
        console.log('Usuario no encontrado')
    }
}

displayUser(findUser('Estefany', '123'))
