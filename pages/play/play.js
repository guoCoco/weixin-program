Page({
  data: {
    song: {},
    isPlaying: false
  },
  onLoad: function(options){
    console.log(options)
    var data = {
        musicid: options.songid,
        showapi_appid: '60810',
        showapi_sign: '118146df7242463290977c32d281bf6f'
      };
      console.log(data)
    wx.request({
      url: 'http://route.showapi.com/213-2',
      data: data,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        console.log(res)
      }
    })
  }
})