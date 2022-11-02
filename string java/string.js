function inicioString (str1,str2){
console.log (str1.startsWith(str2))
}

function inicioString1 (str1,str2){
  let i=1;
  for (;i<str2.length;
       i++){
           if(str1.substring(0,str2.length)==str2){
             return true;
           } else{
            return false;
           }
          }     
}
function inicioString2 (str1,str2){
 resul=0;
 for (i=0;i<str2.length-1;
  i++){
    if(str2[i]==str1[i]){
        resul=true;
    }else if (str2[i]!=str1[i]){
      resul=false;
    }
  }
  return resul;
}