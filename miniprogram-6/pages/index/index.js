// index.js
var p,i,x,sum;
Page({
  principal:function(e){
    p=parseInt(e.detail.value);
  },
  interestrate:function(e){
    i=parseInt(e.detail.value);
  },
  calc:function(){
    x = p;
    for(var n=1;n<=5;n++){
      x=x*i/100+x
    }
    this.setData({
      sum:x
    })
  }
})
