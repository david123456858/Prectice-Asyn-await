const usersId = [1,2,3,4,5]

const getUserId = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}

/**
 * 
 * Esta funcion recorre el array con un simple for y luego lo que hace
 * es ir ejecutando la busqueda de cada id uno por uno, y esto hace el retraso o latencia 
 * en la entrega de información
 */

const fetchGetId = async ()=>{
   const result = []

   for (let id of usersId){
    const data = await getUserId(id)
    result.push(data)
   }
   return result
}

/**
 * es muy interesante ya que con esto podemos realizar en este caso muchas busquedas por blques
 * y esperar que termine las promesas y mandarlas de una, en este caso se recorre el array con 
 * el metodo map para devovler un array de promesas no resueltas se verias algo así
 * [Promises {<pending>}] es cada uno de los array pero llega el Promises luego de haber
 * creado cada uno de las promesas, esta las ejectua para mayor velocidad en vez de ejecutar
 * una por una lo hace todo en paralelo
 */
const getIdLoopPromiseAll = async ()=>{
    const result = usersId.map(id => getUserId(id))
    const users = await Promise.all(result)
    return users
}

/**
 * 
 * @returns { Promise.allSettled(result) }
 * y bueno en algunos casos (si no en todos) al aparecer dura mucho menos el utilizarlo
 * realmente la comparativa es muy interesante de observar en este pequeño ejemplo
 */


/**
 * 
 * @returns { Comparativa }
 * paralelo: 267.093ms --> resolviendo promesas en paraleo con Promise.all
 * uno: 363.964ms --> resolviendo promesa por promesa
 * paralelo2: 68.239ms --> resolviendo promesas en paraleo con Promise.allSettled
 */
const getIdLoop = async ()=>{
    const users =  await Promise.allSettled(
        usersId.map( id =>  getUserId(id))
    )
    return users
}


/**
 * JAJAJAJ lo documento porque no estoy termiando de entender este tema
 * y sale algo mas nuevo, bueno hay una alternativa para el promise.All()
 * es una nueva actualizacino para resolver las promesas en conjunto
 * llamada Array.fromAsync() PERO NO FUNCIONA TODAVIA
 */
const getArray = async ()=>{
    const arr = Array.fromAsync(usersId.map( id =>  getUserId(id)))
    return arr
}

console.time('paralelo')
await getIdLoopPromiseAll()
console.timeEnd('paralelo')

console.time('uno')
await fetchGetId()
console.timeEnd('uno')

console.time('paralelo2')
await getIdLoop()
console.timeEnd('paralelo2')
