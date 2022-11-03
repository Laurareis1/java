function ex9 (hora){
    let data = new Date();
    data.setHours(hora);
    return data;
}
function ex9v2(hora){
    let data = new Date();
    let dat =data.setHours(data.getHours() + hora)
    return data + dat;
}