/**
 * Estamos probando la tres maneras de manejar el asincronimos primero que son
 * 1. Promises
 * 2. Callback
 * 3. async/await
 *
 * y observar como se usan y cuando
 */
const url = 'https://jsonplaceholder.typicode.com/posts';
// Funtions the get data url
const getData = async (url,_callback)=>{
    const data = fetch(url)
    _callback(data)
    return data
}
/**
 * recodemos que las promesas son base fundamental de lo que es el asincronimos, que no hacen
 * ver la magia de micro y macro tareas que se hagan "simultaneas",
 * al implementar el .json() tendremos que manejar al promesa que regresa, es decir una promesa
 * dentro de otra promesa
 */

//Promise-based fetch example
getData(url)
.then(Response => Response.json())
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log("Error encontrado" + err);
})

/**
 * Las callbacks no pueden acceder directamente al valor de una Promesa si esta aún no se ha resuelto.
 * Para manejar resultados asíncronos dentro de una callback,es necesario usar .then() o await,
 * dependiendo de si la función externa es síncrona o asíncrona.
 */


//Callaback-based fetch example
getData(url,(dataResponse)=>{
    dataResponse.then((res)=>{
        console.log(res);

    })
})

//async/await example
const data = await getData(url)
console.log(data);