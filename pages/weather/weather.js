var util = require('../../utils/util.js');

Page({
  data: {
    weather: {
      wendu: 18,
      ganmao: '沙发沙发大时代发生撒旦法师打发',
      yesterday: {
        date: '17日 星期四',
        type: '阴',
        fx: '南风',
        fl: '微风级',
        low: '低温 10ºC',
        high: '高温 20ºC'
      },
      forecast: [
        {
          date: '17日 星期四',
          type: '阴',
          fengxiang: '南风',
          fengli: '微风级',
          low: '低温 10ºC',
          high: '高温 20ºC'
        },
        {
          date: '17日 星期四',
          type: '阴',
          fengxiang: '南风',
          fengli: '微风级',
          low: '低温 10ºC',
          high: '高温 20ºC'
        },
        {
          date: '17日 星期四',
          type: '阴',
          fengxiang: '南风',
          fengli: '微风级',
          low: '低温 10ºC',
          high: '高温 20ºC'
        },
        {
          date: '17日 星期四',
          type: '阴',
          fengxiang: '南风',
          fengli: '微风级',
          low: '低温 10ºC',
          high: '高温 20ºC'
        },
        {
          date: '17日 星期四',
          type: '阴',
          fengxiang: '南风',
          fengli: '微风级',
          low: '低温 10ºC',
          high: '高温 20ºC'
        }
      ]
    },
    city: '北京',
    today: '2017/03/21',
    inputCity: ''
  },
  onLoad: function (options){
    console.log(new Date())
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
      }
    })
    this.setData({
      today: util.formatTime(new Date()).split(' ')[0]
    })
    var that = this;

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        wx.request({
          // url: 'http://api.map.baidu.com/geocoder/v2/?ak=zVwXegaHEB5KHf6jTBnih6BjmgYN3Ckm&location=' + res.latitude + ','+ res.longitude + '&output=json&pois=0',
          url: 'http://api.map.baidu.com/geocoder/v2/',
          data: {
            ak: 'zVwXegaHEB5KHf6jTBnih6BjmgYN3Ckm',
            location: res.latitude + ','+ res.longitude,
            output: 'json',
            pois: '0'
          },
          method: 'GET',
          header: {
            'Content-Type': 'application/json'
          },
          success: function(res){
            console.log(res)
            var city = res.data.result.addressComponent.city.replace('市', '');
            that.searchWeather(city)
          }
        })
      }
    })
  },
  searchWeather:function(cityName){
    var that = this;
    wx.request({
      url: 'http://wthrcdn.etouch.cn/weather_mini',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        city: cityName
      },
      success: function(res){
        console.log(res);
        if (res.data.status === 1002){
          wx.showModal({
            title: '错误信息',
            content: '城市不存在',
            showCancel: false,
            succes: function(res){
              console.log(res)
              that.setData({
                inputCity: ''
              })
            }
          })
        } else {
          var weather = res.data.data;
          var fl = weather.yesterday.fl
          weather.yesterday.fl = fl.slice(9, 11)
          console.log(weather.yesterday.fl)
          for(var i = 0; i<weather.forecast.length; i++) {
            var d = weather.forecast[i].date;
            var fengli = weather.forecast[i].fengli;
            weather.forecast[i].fengli = fengli.slice(9, -3);
            weather.forecast[i].date = '  ' + d.replace('星期', '\n     星期')
          }
          that.setData({
            city: cityName,
            weather: weather,
            inputCity: ''
          })
        }
      }
    })
  },
  searchBtn: function(){
    console.log(this.data.inputCity)
    this.searchWeather(this.data.inputCity)
    // wx.showModal({
    //   title: '错误信息',
    //   content: 'asfasdf',
    //   showCancel: false,
    //   succes: function(res){
    //     console.log(res)
    //     that.setData({
    //       inputCity: ''
    //     })
    //   }
    // })
  },
  getCityInfo(e){
    this.data.inputCity = e.detail.value
    console.log(e.detail.value)
  }
})