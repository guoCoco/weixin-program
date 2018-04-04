
Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    },
    path: ''
  },
  changeText: function () {
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function () {
    this.data.num ++
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function () {
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.data.num ++;
    this.setData({
      'newFiled.text': 'new data' + this.data.num
    })
  },
  onReady: function() {
    console.log(getCurrentPages())
  },
  handleTouch: function () {
    console.log('1111')
  },
  chooseImg(){
    wx.chooseImage({
      success: (res) =>{
        console.log(res)
        var path = res.tempFilePaths;
        console.log(path)
        this.setData({
          path: path[0]
        })
      }
    })
  },
  previewImg:function(){
    console.log(this.data.path)
    wx.previewImage({
      urls: [this.data.path]
    })
  },
  saveImg: function(){
    wx.saveImageToPhotosAlbum({
      filePath: '../../image/pause.png',
      success(res) {
        console.log('成功了')
      },
      fail(res){
        console.log('失败了')
      }
    })
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
*Page
*
*
*
*/ 