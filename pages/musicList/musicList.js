
function secondsTomin (s) {
	var result;
	var m = Math.floor(s / 60);
	if (m < 10) {
		m = '0' + m
	}
	var s = s % 60;
	if (s < 10) {
		s = '0' + s
	}
	result = m + ':' + s;
	return result;
}

Page({
	data:{
		board: '',
		songlist: [],
		loading: false
	},
	onLoad: function (options){
		var that = this;
		var topid = options.type;
		console.log(options);
		this.setData({
			loading: true
		})
		wx.request({
	      url: 'http://route.showapi.com/213-4',
	      data: {
	        topid: topid,
	        showapi_sign: '118146df7242463290977c32d281bf6f',
	        showapi_appid: '60810'
	      },
	      method: 'POST',
	      header: {
	        'Content-Type': 'application/x-www-form-urlencoded'
	      },
	      success: function(res){
	        console.log(res.data)
	        if (res.data.showapi_res_code === 0) {
	        	var songlist = res.data.showapi_res_body.pagebean.songlist
	        	for(var i = 0; i<songlist.length; i++) {
	        		songlist[i].seconds = secondsTomin(songlist[i].seconds)
	        	}

	        	var board = songlist[0].albumpic_big
	        	that.setData({
	        		board: board,
					songlist: songlist,
					loading: false
	        	})
	        }else {

	        }
	      },
	      fail: function(){
	        console.log('请求失败')
	      }
	    })
	}
})