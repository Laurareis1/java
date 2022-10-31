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

function calculo (lista,operacao){
    let total = 0;
    if(operacao == '+'){
        for( value of lista){
            total +=value;
        }
        
    }
       
    else if (operacao =='-'){
        for( value in lista){
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

function listCalculo (num1,num2,parametro) {
    let total=0;
    if(parametro == '+'){
     total = num1 + num2;
        }
         else if(parametro == '-'){
            total = num1 - num2;
        }
        else if (parametro == '*'){
            total = num1 * num2;
        }
        else (parametro == '/')
         total = num1 / num2;
        
  return total;
}
 
function procurarNum (number){
    let phoneBook={
        Abel :5802943,
        Laura : 9761405,
        Lisa : 5850628,
        Adilson : 9240912,
        Victor : 9519228
    };
 for(key in phoneBook){
   const savedPhoneNumber = phoneBook[key]
    if(savedPhoneNumber== number)
          return key;
    
 }
}

function procurarNom (name){
    let phoneBook={
        Abel :5802943,
        Laura : 9761405,
        Lisa : 5850628,
        Adilson : 9240912,
        Victor : 9519228
    };
    for (key in phoneBook){
        const saveName = key
        if(saveName == name)
       return saveName ; 
    }
}
function giveMePhoneNumber(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    for (key in phoneBook) {
        // console.log(key, phoneBook[key]);
        const savedName = key;
        const savedPhoneNumber = phoneBook[key];
        
        if(savedName == name)
            return savedPhoneNumber;
    }
    return 'The name '+name+ ' is not registered!';

}



function giveMePhone(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
        return phoneBook[name];
}

function AddPhoneNumber(name, number){
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
phoneBook[name] = number
    return phoneBook
}
function eliminar (name){
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    delete phoneBook[name];
    return phoneBook

}