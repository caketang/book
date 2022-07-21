define(['dataService'],function(dataService){
  let name = 'tom'
  function showMsg(){
    console.log(11)
    alert(dataService.getMsg()+'.'+name)
  }
  return {showMsg}
})