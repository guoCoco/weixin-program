//logs.js

Page({
  data: {
    starInfo: {},
    star: '',
    love_star:[],
    summary_star: [],
	work_star: [],
	money_star: [],
	aa: '接口的房间爱睡懒觉但是开发经理'
  },
  onLoad: function (options) {
   console.log(options)
   this.setData({
   	star: options.name
   })
   var that = this;
   var data = {
        star: options.star,
        showapi_appid: '60810',
        showapi_sign: '118146df7242463290977c32d281bf6f'
      };
   wx.request({
   	url: 'http://route.showapi.com/872-1',
   	mothod: 'POST',
   	data: data,
   	header: {
	  'Content-Type': 'application/x-www-form-urlencoded'
	},
	success:function(res){
		console.log(res)
		if(res.statusCode === 200) {
			var love_star = [];
			var summary_star = [];
			var work_star = [];
			var money_star = [];
			var star = res.data.showapi_res_body.star;
			var starInfo = res.data.showapi_res_body.day;
			love_star.length = starInfo.love_star;
			summary_star.length = starInfo.summary_star;
			work_star.length = starInfo.work_star;
			money_star.length = starInfo.money_star;
			console.log()
			console.log(starInfo)
			that.setData({
				starInfo: starInfo,
				love_star: love_star,
				summary_star: summary_star,
				work_star: work_star,
				money_star: money_star
			})
		}
	}
   })
  }
})
