/**
 * en este apartado estoy descubriendo lo que envuelve una promesa en verdad
 * me doy cuenta por documentacion que tiene dos parametros y estos se covierten 
 * en valores
 */

const getSetTime = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('📦 Data received!')
        },1000)
    })
}

const hoa = new Promise((resolve, reject)=>{
    resolve('Se resolvio la promesa correctamente')
    if(reject){
        reject('paso algo malo')
    }
})

const getDataTime = async ()=>{  
    const data = await getSetTime();
    console.log(data);
}

getDataTime()