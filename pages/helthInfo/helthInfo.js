Page({
  data:{

  },
  onLoad:function(options){
  	console.log(options)
  	var data = {
      showapi_appid: '60810',
      showapi_sign: '118146df7242463290977c32d281bf6f',
      tid: options.type
    };
    var that = this;
    wx.request({
      url: 'http://route.showapi.com/90-87',
      data: data,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        if(res.statusCode === 200){
          var ranks = res.data.showapi_res_body.pagebean.contentlist
          console.log(ranks)
        }
      }
    })  
  }
})