// Register a Page.
Page({
  data: {
    ranks: [
      {type: 4, text: '流行榜'},
      {type: 28, text: '网络歌曲'},
      {type: 36, text: 'K歌金曲'},
      {type: 27, text: '新歌'},
      {type: 26, text: '热歌'},
      {type: 23, text: '销量'},
      {type: 18, text: '民谣'},
      {type: 19, text: '摇滚'},
      {type: 5, text: '内地'},
      {type: 6, text: '港台'},
      {type: 16, text: '韩国'},
      {type: 17, text: '日本'},
      {type: 3, text: '欧美'}
    ]
  },
  onLoad: function(){
  }
})

/**
*wx.navigateTo()方法跳转的路径是非tabBar的页面路径，
*
*Page()函数是用来注册一个页面的，参数是一个对象
*onLoad、onReady、onHide、onUnload、onPullDownRefresh、onReachBottom、onShareAppMessage、onPageScroll和其他的任意函数或者数据都可以，页面函数中的this可以访问
*各个页面的生命周期
*onLoad页面加载时调用，一个页面只调用一次，
*onShow页面显示打开页面是调用 
onReady 页面渲染完成是调用，对页面的设置在onReady之后设置
*onHide页面隐藏， 当navigateTo或者底部切换tab的时候调用
*onUnload页面卸载，当redirectTo或者navigateBack时调用
*
*绑定事件 : 在标签中bindtap='事件处理程序'， bindtap属性制定函数名，类似于onclick
*
*
*wx:for = '{{array}}'  wx:for-index :指定数组当前元素下标的变量名  wx:for-item: 指数组当前元素的变量名
*
*/ 