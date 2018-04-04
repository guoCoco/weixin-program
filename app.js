App({
  onLaunch: function (options) {
    console.log(options.scenes)
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null
  },
  aaa: 1321
  //App()函数是用来注册一个小程序，参数是一个对象object，object参数说明
  // onLaunch ， onShow ，onHide ，onError 这四个都是生命周期函数
  /***
  *onLaunch；小程序初始化的时候出发 
  *onShow:当小程序启动，或者从后台进入前台显示，触发
  *onHide: 当小程序进入后台触发，
  *onError：当小程序发生脚本错误，或者api调用失败触发
  *前台、后台定义：当用户点击左上角关闭，或者按了设备 Home 键离开微信，
  *小程序并没有直接销毁，而是进入了后台；当再次进入微信或再次打开小程序，
  *又会从后台进入前台。需要注意的是：只有当小程序进入后台一定时间，
  *或者系统资源占用过高，才会被真正的销毁。
  *
  *
  *
  *
  *App()函数只能注册一次，只能在app.js中使用
  *不要在onLaunch的时候调用getCurrentPage()，此时page还没有生成。
  *不要在定义于App()内的函数中调用getApp()，使用this就可以拿到app实例
  *通过getApp()获取实例之后，不要私自调用生命周期函数。
  *
  */


})
const app = getApp()
console.log(app.aaa)
console.log(wx)


/**
*1.如何获取场景值，在 onLaunch 和 onShow中的参数对象中 的 scenes属性值获取
*
*
*路由的相关api
*1. 打开新页面 wx.navigateTo()  不可以切换到tab页面
*2.页面重定向 wx.redirectTo()
*3.页面放回： wx.navigateBack()
*4.tab切换 wx.switchTab
*5.重启动： wx.reLauch 理解：场景页面刷新
*
*
*小程序不支持npm直接下载包，支持CommonJs规范
*使用require引入js文件，只支持相对路径，utils目录下的js文件就是抽离出来的公共模块
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/ 