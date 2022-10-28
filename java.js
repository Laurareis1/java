function welcome (name){

    var texto ="hello! how are you";
    var C = texto.concat( name);
    //outras formas de fazer 
   // console.log(name.concat(texto))
   //let C = hello! how are you ${name}?
   return C;
}

 
function myConcat(lista,parametro) {

    for(pos in lista) {
      lista[pos] = lista[pos] + parametro;
    }
    return lista;
}

function compara (lista,operacao){
    let total = 0;
    if(operacao == '+'){
        for( value of lista){
            total +=value;
        }
        
    }
       
    else if (operacao =='-'){
        for( value of lista){
            if(pos==0)
            continue;
            total -=value[pos];
        }

    }
    
    else if (operacao == '*'){
        for( value in lista){
            if(pos==0)
            continue;
            total *=value[pos];
        }

    }
    return total;
}




