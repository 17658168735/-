//index.js
var a = new Array();
var b;
Page({
  mysubmit: function () {
    b = parseInt(Math.random() * 32);
    a[0] = b;
    for (var i = 1; i < 7; i++) {
      b = parseInt(Math.random() * 32);
      a[i] = b;
      for (var j = 0; j < i; j++) {
        if (a[j] == a[i]) {   
          i = i-1;
          break;
        }
      }
    }
    this.setData({
      a:(a[0]/Math.pow(10,2)).toFixed(2).substr(2),
      b:(a[1]/Math.pow(10,2)).toFixed(2).substr(2),
      c:(a[2]/Math.pow(10,2)).toFixed(2).substr(2),
      d:(a[3]/Math.pow(10,2)).toFixed(2).substr(2),
      e:(a[4]/Math.pow(10,2)).toFixed(2).substr(2),
      f:(a[5]/Math.pow(10,2)).toFixed(2).substr(2),
      g:(a[6]/Math.pow(10,2)).toFixed(2).substr(2),
    })
  }
})
