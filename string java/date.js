function ex9 (hora){
    let data = new Date();
    data.setHours(hora);
    return data;
}
function ex9v2(hora){
    let data = new Date();
    let dat =data.setHours(data.getHours() + hora)
    return data ;
}
function addTime(date,hour){
    console.log(date);
    let y = new Date(date.setUTCHours(date.getHours()+1+hour))
    return y;
}



function finalDeSemana (data){
    const dia= ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
    let da = new Date(data);
    //let dat = dia[da.getDay()];
   if (dia[da.getDay()]== 0||dia[da.getDay()]== 6)
   return "final de semana";
   else 
   return "dia de semana";
}
function dataDeOntem(date){
    console.log(date);
    date=date.setDate(date.getDate()-1)
    return new Date (date);  
}

function menorData(data){
    let menor='';
    for (i=0; i<data.length;i++){
        if(menor>data[i])
        menor=data[i]
    }
    return menor;
}
function maiorData(data){
    let maior= undefined;
    for(i=0;i<data.length;i++){
        if(i==0){
        maior = data[i];
        }else if(maior<data[i]){
            maior=data[i];
        }
    }
    return maior;
}
function diaDaSemana(data){
    const dias= ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
    let da= new Date(data);
     let dia= dias[da.getDay()];
     return dia;
    }
    
    function time5 (){
        let da= new Date();
        let dia= da.getDay();
        let year= da.getFullYear();
        let mes=da.toLocaleString('default', { month: 'long' });
        let dat= dia+"/"+mes+"/"+year;
        document.getElementById("data").innerHTML=dtstring;
        }

function adicionar(){

   let da =  document.getElementById("msg")
   da.value +="laura" 
}

function getNumber(){
    let da =document.getElementById("numero").value
   let b= document.getElementById("showNumber")
   b.innerHTML= da;
 }
 
 