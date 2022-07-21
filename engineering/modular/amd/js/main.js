;(function(){
  require.config({
    baseUrl:'js/',
    paths:{
      //映射: 模块标识名: 路径
      alerter: './modules/alerter', //此处不能写成alerter.js,会报错
      dataService: './modules/dataService'
    }
  })

  require(['alerter'],function(alerter){
    alerter.showMsg()
  })
})()

