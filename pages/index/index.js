//index.js
//获取应用实例
const app = getApp()
console.log(app.aaa)


Page({
  data: {
    motto: 'guokeke',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
        // res是sucess函数返回的参数包含
        /**userInfo 用户信息对象
        *其他参加说明文档
        *
        *
        *
        */ 
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})




/**小程序的API
*1.获取用户信息接口  wx.getUserInfo(obj)
*参数对象的包含哪些属性 success fail complete 这三个都是函数
*这个接口需要用户授权，
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
*
*/ 
