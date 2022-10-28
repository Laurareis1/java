function welcome (name){
  var texto ="hello! how are you";
  var C = texto.concat( name);
  //outras formas de fazer 
 // console.log(name.concat(texto))
 //let C = hello! how are you ${name}?
 return C;
}
 
function myConcat(lista,appendvalue){
    for(pos in lista) {
      lista[pos] = lista[pos] + apppendvalue;
    }

    return lista;
}
