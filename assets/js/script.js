precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


document.querySelector(".sumando").addEventListener("click",()=>{
    let contador = document.querySelector('.unidades')
    let aumentar = Number(contador.innerHTML)
        aumentar = aumentar + 1
        contador.innerHTML = aumentar
    let totales = document.querySelector('.valor-total')
    let totalMas = Number(totales.innerHTML)
        totalMas = aumentar * precio
        totales.innerHTML = totalMas

})

document.querySelector(".restando").addEventListener("click",()=>{
    let contador = document.querySelector('.unidades')
    let restar = Number(contador.innerHTML)
        restar = restar - 1
        contador.innerHTML = restar
    let totales = document.querySelector('.valor-total')
    let totalMas = Number(totales.innerHTML)
        totalMas = restar * precio
        totales.innerHTML = totalMas

})

