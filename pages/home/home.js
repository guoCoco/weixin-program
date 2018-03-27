var helloData = {
  name: 'WeChat'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function(e) {
    // sent data change to view.
    this.setData({
      name: 'guokeke'
    })
    console.log(2222222)
    wx.navigateTo({
      url: '../index/index',
      success: function(){
        console.log('跳转页面成功')
      },
      fall: function(){
        console.log('跳转页面失败') 
      },
      complete:function(){
        console.log('执行了wx.navigateTo函数')
      }
    })
  },
  onShow: function(){
    console.log('dsfasdfa')
  }
})

/**
*wx.navigateTo()方法跳转的路径是非tabBar的页面路径，
*
*/ 