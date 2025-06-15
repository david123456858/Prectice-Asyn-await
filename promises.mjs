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

const getDataTime = async ()=>{  
    const data = await getSetTime();
    console.log(data);
}

getDataTime()