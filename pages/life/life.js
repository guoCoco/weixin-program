Page({
  data:{
    month: '4',
    day: '3',
    ranks: []
  },
  onLoad:function(){
    var data = {
      showapi_appid: '60810',
      showapi_sign: '118146df7242463290977c32d281bf6f'
    };
    var that = this;
    wx.request({
      url: 'http://route.showapi.com/119-42',
      data: data,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        if(res.statusCode === 200){
          var ranks = res.data.showapi_res_body.list
          console.log(ranks)
          var month = ranks[0].month
          var day = ranks[0].day
          that.setData({
            ranks: ranks,
            month: month,
            day: day
          })
        }
      }
    })
  }
})