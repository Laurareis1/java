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
function finalDeSemana (){
    const dias = ["segunda","terça","quarta","quinta","Sexta","sabado","Domingo"];
    let da= new Date();
    let dia= dias[da.getDay()];
    let year= da.getFullYear();
    let mes =da.getMonth();
    let data= dia+se+mes+se+year;
    return data;
    }