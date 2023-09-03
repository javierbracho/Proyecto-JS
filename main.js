function IVA (subTotal, impuesto) {
    return  subTotal * impuesto
}

function pagoConCuotas (total, numerodecuotas) {
    return total / numerodecuotas
}

let seguirComprando;
let precio = 0
let producto = ""
let cantidad = 0
let subTotal = 0
let impuesto = 1.19
let cuotas;
let numeroDeCuotas = 0
let cuotasDePago = 0
let total = 0

    do { 
    
        do {
            producto = prompt("Indique que producto desea comprar: notebook, tarjeta de video, teclado o mouse")
    
        } while ((producto != "notebook") && (producto != "tarjeta de video") && (producto != "teclado") && (producto != "mouse"))
    
        do {
            cantidad = parseInt(prompt("Cuantas unidades desea comprar?"))
    
        } while (isNaN(cantidad) || cantidad <=0)
            alert("Has seleccionado " + cantidad + " unidades de " + producto)
    
        if (producto == "notebook") 
                precio = 1000
          else if (producto == "tarjeta de video") 
                precio = 500
           else if (producto == "teclado") 
                precio = 100
           else if (producto == "mouse") 
                precio = 80
        
        subTotal += precio * cantidad

        alert("Tu carrito de compras es de: "+subTotal)

        seguirComprando = confirm ("Quieres agregar otro producto?")

        if (!seguirComprando) 
            alert("Tu carrito de compras se ha cargado con exito")
            
    } while (seguirComprando); 


total = IVA (subTotal, impuesto)    

cuotas = confirm ("Deseas pagar con cuotas?")
    
if (!cuotas) 
        alert("Tu compra es por un total de: " +total+ " pesos")

else {
    numeroDeCuotas = parseInt(prompt("Cuantas cuotas?"))
    cuotasDePago = pagoConCuotas (total, numeroDeCuotas)
    alert("Tu compra es por un total de: " +total+ " pesos")
    alert("Tus cuotas son por un total de " +cuotasDePago)


}   

alert("Muchas gracias por tu compra vuelve pronto")
           
   
    
        

