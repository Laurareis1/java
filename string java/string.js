function inicioString (str1,str2){
console.log (str1.startsWith(str2))
}

function inicioString1 (str1,str2){
           if(str1.substring(0,str2.length-1)==str2){
             return true;
           } else{
            return false;
           }
         
}
function inicioString2 (str1,str2){
 let resul;
 for (i=0;
  i<str2.length;
  i++){
    if(str2[i]==str1[i]){
        resul=true;
    }else if (str2[i]!=str1[i]){
      resul=false;
    }
  }
  return resul;
}

function concatString(str,num=1){
let resul='';
  for(i=1;
    i<=num;
    i++){
    resul+=str
  }
  return resul;
}

function concatstring1 (str,num=1){
let result='';
for(i=0;
  i<=num;
  i++){
  result=str.concat(str)
  }
return result;
  }

  /*function divideCarater(str,num=1){
    console.log(chunkString(str,num))
  }*/

  function chunkString(msg, divide=1){
    const chunks = [];
    if(divide==1){
        chunks.push(msg);
        return chunks;
    }
    let part="";
    for(let i=0;i<msg.length;i++){
        part=part+msg[i];            
        if(part.length==divide){
            chunks.push(part);
            part='';
        }
    }
    chunks.push(part);
    return chunks;
}

function chunkString1 (str,num=1) {

  const size = Math.ceil(str.length/num)
  const r = Array(size)
  let offset = 0
  
  for (let i = 0; i < size; i++) {
    r[i] = str.substr(offset,num)
    offset += num
  }
  
  return r
}

function time (se){
let da= new Date();
let dia= da.getDay();
let year= da.getFullYear();
let mes= da.getMonth()+1;
let data= dia+se+mes+se+year;
return data;
}

function time1 (se){
  let da= new Date();
  let dia= da.getDay();
  let year= da.getFullYear();
  let mes=da.toLocaleString('default', { month: 'long' });
  let data= dia+se+mes+se+year;
  return data;
  }

  function time2 (se){
     const meses = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     let da= new Date();
     let dia= da.getDay();
     let year= da.getFullYear();
     let mes = meses[da.getMonth()];
     let data= dia+se+mes+se+year;
     return data;
     }
   
     function comparaDatas(data1,data2){
     //let dat= Date.parse(data1);
     //let da= Date.parse(data2);
     
     if(data1==data2){
       return "as duas datas sao iguais";
     }
     else if (data1 < data2){
       return "a primeira data é maior";
     }
     else if(data1> data2){
       return "a segunda data inseria é maior";
     } 
     }

     function data(date1,date2){
     let dat1=  setDate (date1)
     let dat2 = setDate (date2)

      if(dat1 ==dat2){
        return "as duas datas sao iguais";
      }
      else if (dat1 < dat2){
        return "a primeira data é maior";
      }
      else if(dat1> dat2){
        return "a segunda data inseria é maior";
      } 
     }



     
  