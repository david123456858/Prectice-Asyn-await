const usersId = [1,2,3,4,5]

const getUserId = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}

/**
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
 * y esperar que termine las promesas y mandarlas de unoa en este caso se recorre el array con 
 * el metodo map para devovler un array de promesas no resueltas se verias algo aso
 * [Promises {<pending>}] es cada uno de los array pero llega el Promises luego de haber
 * creado cada uno de las promesas, esta las ejectua para mayor velocidad en vez de ejecutar
 * una por una lo hace todo en paralelo
 */
const getIdLoopPromiseAll = async ()=>{
    const result = usersId.map(id => getUserId(id))
    const users = await Promise.all(result)
    return users
}
console.time('paralelo')
await getIdLoopPromiseAll()
console.timeEnd('paralelo')

console.time('uno')
await fetchGetId()
console.timeEnd('uno')