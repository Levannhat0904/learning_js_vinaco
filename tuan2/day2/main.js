var promise = new Promise(
  function(resolve, reject){

  }
);

promise.
  then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(function(error){
    console.log(error);
  })