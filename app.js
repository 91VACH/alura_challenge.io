//APARTADO DE INICIALIZACIÓN

//FUNCION OCULA Y MUESTRA IMAGEN PINGUINO
function funcionOcultaMuestra() {
    document.getElementById('muneco').style.display='none'
    document.getElementById('penguin').style.display='inline'
}

//FIN DE LA FUNCION OCULTA Y MUESTRA IMAGEN PINGUINO

//FUNCION QUE CAMBIA EL TEXTO DENTRO DE UN ELEMENTO

function cambiarTexto(elemento,texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//FIN DE FUNCION QUE CAMBIA EL TEXTO DENTRO DE UN ELEMENTO


//FUNCION QUE ENCRIPTA EL TEXTO
function funcionReescribir() {
    let texto = document.getElementById('txt1').value;
    let buscar= /[A-UÁÉÍÓÚÀÈÌÒÙÄËÏÖÜá-ú]/gm;
    let esMayuscula = texto.match(buscar);
    
    if(esMayuscula){
         alert('No se permiten mayúsculas ni tildes')
        document.location.reload();
        }else{
    funcionOcultaMuestra();
    function funcionEncriptar() {

    let encriptado=texto.replace(/e/igm,"enter");
    let encriptado2=encriptado.replace(/i/igm,"imes");
    let encriptado3=encriptado2.replace(/a/igm,"ai");
    let encriptado4=encriptado3.replace(/o/igm,"ober");
    let encriptado5=encriptado4.replace(/u/igm,"ufat");
    return encriptado5;

}
    console.log(funcionEncriptar());
    document.querySelector("#txt1").value = funcionEncriptar();
    //alert('Listo! Tu mensaje ha sido encriptado O,.O');
    cambiarTexto('h3','Listo! Tu mensaje ha sido encriptado');
    document.getElementById('txtrec2').style.display ='none';
    }
}
//FIN DE LA FUNCION QUE ENCRIPTA EL TEXTO

//FUNCION QUE DESENCRIPTA EL TEXTO
function funcionDevolver() {
 let texto = document.getElementById('txt1').value;
 let buscar= /[A-UÁÉÍÓÚÀÈÌÒÙÄËÏÖÜá-ú]/gm;
 let esMayuscula = texto.match(buscar);

    if (esMayuscula){ 
        alert('No se permiten mayúsculas ni tildes')
        document.location.reload();
    }else{
    funcionOcultaMuestra();
   function funcionDesencriptar(){
        
        let desencriptado=texto.replace(/[ente]{4}r/gm,"e");
        let desencriptado2=desencriptado.replace(/[ime]{3}s/gm,"i");
        let desencriptado3=desencriptado2.replace(/[a]{1}i/gm,"a");
        let desencriptado4=desencriptado3.replace(/[obe]{3}r/gm,"o");
        let desencriptado5=desencriptado4.replace(/[ufa]{3}t/gm,"u");
        return desencriptado5;
    }
    console.log(funcionDesencriptar());
    document.querySelector("#txt1").value = funcionDesencriptar();
    //alert('Eureka! desencriptamos el mensaje O,.o');
    cambiarTexto('h3','Eureka! Tu mensaje ha sido desencriptado');
    document.getElementById('txtrec2').style.display ='none';
    }

}
//FIN DE LA FUNCION QUE DESENCRIPTA EL TEXTO

//FUNCION QUE COPIA EL TEXTO EN EL PORTAPAPELES AL PRESIONAR EL BOTON COPIAR
function funcionCopiar() {
    
    let texto=document.getElementById('txt1').value;
    navigator.clipboard.writeText(texto);
    console.log('texto copiado',texto);
    alert('Texto copiado!')

}
//FIN DE LA FUNCION QUE COPIA EL TEXTO EN EL PORTAPAPELES AL PRESIONAR EL BOTON COPIAR


// FUNCIÓN QUE CUENTA LOS CARACTERES DENTRO DE LA CADENA
function countChars(obj){
    let maxLength = 148;
    let strLength = obj.value.length;
    
    if(strLength == maxLength){
        document.getElementById("charNum").innerHTML = 'Alcanzaste el límite de caracteres';
        
    }else{
        document.getElementById("charNum").innerHTML = strLength+' de '+maxLength+' caracteres';
    }
}
// FIN DE LA FUNCIÓN QUE CUENTA LOS CARACTERES DENTRO DE LA CADENA
