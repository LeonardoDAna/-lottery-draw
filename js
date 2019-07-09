//随机函数
function GetRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}

function truncate(arr) {
  var newArr = arr.concat();
  newArr.pop();
  return newArr;
}

var clickTimes = 0;
var onClicked = false;
var numArr = ["giao"];
var currentPuni;
var currentDom;

var arr = $("div.box").toArray();
var ran = Math.floor(Math.random() * arr.length);

function initBoxs() {
  $.each($(".box"), function (index, val) {
    $(this).one("click", oP);
  });
}

// if (numArr[numArr.length - 1].dtitle_text == numArr[numArr.length - 2].dtitle_text) {
//   //  var dtitle_text = document.createTextNode(puniExam[8]);
//   op();
//  }

var puniExam = ['5000触手币','5000触手币','5000触手币','5000触手币','5000触手币', '5000触手币','5000触手币','5000触手币',
                '10000触手币','10000触手币','10000触手币',
                '20000触手币',
                '2个海星','2个海星','2个海星',
                '3个海星',
                '4个海星','4个海星',
                '5个海星',
                '6个海星','6个海星',
                '9个海星',
                '8个海星','8个海星','8个海星','8个海星',
                '10个海星',
                '16个海星',
                '喝醋','喝醋','喝醋','喝醋',
                '冠名弹幕抽海星','冠名弹幕抽海星',
                '10个俯卧撑','10个俯卧撑','10个俯卧撑','10个深蹲',
                '再来一次',
                '谢谢惠顾','谢谢惠顾',
                '脸上画画','脸上画画','脸上画画',
                '涂唇膏','涂唇膏','涂唇膏',
                '真心话',
                '大冒险','大冒险'
                ]

puniExam.sort(function(){ return 0.5 - Math.random() });  //打乱数组排列方法

function oP() {
  clickTimes = clickTimes + 1;
  
  var boxdom = document.getElementsByClassName("box");
  var Rightbox = document.getElementById("right");
  Rightbox.innerHTML = "";
  //text插入
  var dtitle = document.createElement("dt");
  Rightbox.appendChild(dtitle);
  var dtitle_text = document.createTextNode(puniExam[puniExam.length-1]);
  dtitle.appendChild(dtitle_text);

  //console.log(puniExam[puniExam.length-1],puniExam);
  //背景更改
  $(this).css("background-image", "none");
  let index = $(this).text();
  // result.push(arr.splice(ran, 1)[0]);
  // console.log(index);
  let index_array=arr.indexOf(this);
  let firstObj=delOneInArray(arr,index_array);
  //每次点击之后删除数组最后
  puniExam.pop();
}

// 随机选择
var result = [];
var ranNum = 1;
$(function () {
  initBoxs();
  $("#btn").click(function () {
    //  for (var i = 0; i < ranNum; i++) {
    //    result.push(arr.splice(ran, 1)[0]);
    //  };
    //  var firstObj = result[result.length-1];

   
    
    var randomNum=GetRandomNum(0,arr.length-1);
    $(arr[randomNum]).trigger("click");
    // $(arr[randomNum]).unbind("click");
  })
})

function delOneInArray(arr,ranNum){
  for (var i = 0; i < 1; i++) {
    result.push(arr.splice(ranNum, 1)[0]);
  };
   result[result.length-1];
  return result[result.length-1];
}
