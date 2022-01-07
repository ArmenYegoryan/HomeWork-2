const obj = {
    name: "Jhon",
    country: {
     name: "Armenia",
     code: 374
    }
  };

function reverse_obj(obj){
    let result = {};
    for(let key in obj){
        if(typeof(obj[key]) === "object") {
            result[key] = reverse_obj(obj[key]); 
        } else {
            result[obj[key]] = key;
        }
    }
    return result;
  }

console.log(reverse_obj(obj));

  
