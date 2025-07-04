import { exec } from 'child_process'

// promesa que abre el editor de texto
setTimeout(()=>{
    exec('start notepad')
    exec('start brave')
},1000)
// funcion que hace que se ejecute cada cierto tiempo una tarea
setInterval(()=>{
    console.log('task Created: ', new Date().toLocaleDateString())
},2000)

// como pasar argumentos a un intervalo
const s = setInterval(callback2,2000,5,6)
/**
 * ಠ_ಠ No funciona
 */
const callback = (a,b)=> {
    console.log(a,b)
}
/**
 * ✔ funciona
 * ya que se puede pasar por parametro despues de delay los argumentos esperados 
 */
function callback2 (a,b){
    console.log(a,b)
}