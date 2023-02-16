function zipObject(keys, values) { 
  //create an object
  //loop through keys array
  //if values is not undefined, set obj[keys[i]] to values[i]
  //create object
 let obj = {}
 
 //loop through keys array
 for (let i = 0; i < keys.length; i++) {
   
    //if values are defined
    if (values !== undefined) {
      //object[first key] = first value
      obj[keys[i]] = values[i]
    
    //if values not defined  
    } else {
      
      //obj[indx 0 of key array]=[indx 1 of key array]
      obj[keys[i][0]] = keys[i][1]
    }
  }
  
  return obj
}
