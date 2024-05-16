function convertHashToArray(hash){
    let result = []
    // loop through object keys
    for (let key in hash){
    //push each key/value to a array as an array (within loop)
    let newHash = []
    newHash.push(key, hash[key])
      result.push(newHash)
  }
    return result;
  }  

  console.log(convertHashToArray({"name":"Terrance","age":24,"role":"stunt double"}));