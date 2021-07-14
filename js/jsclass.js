function juzi(){
    // 底下句子
    var juzi = [
        "最灵繁的人也看不见自己的背脊。",
        "最困难的事情就是认识自己。",
        "要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。",
        "一切节省，归根到底都归结为时间的节省。",
        "学问是异常珍贵的东西，从任何源泉吸收都不可耻。",
        "活得快乐的最重要因素是人生有事干、有人可去爱，以及生命中有所冀望。",
        "哪里有理性智慧，哪里就有尊严。",
        "尧舜之道，孝悌而已。",
    ];
    var zuozhe = [
        "——非洲",
        "——希腊",
        "——培根",
        "——马克思",
        "——阿卜·日·法拉兹",
        "——约瑟夫·艾迪生",
        "——马丹·杜·加尔",
        "——李纲",
    ];
    var content = document.getElementsByClassName('content')[0];
    var zuozhe1 = document.getElementsByClassName('zuozhe')[0];
    var sum1 = Math.floor(Math.random()*(juzi.length));
    var mingju = juzi[sum1];
    content.innerHTML = mingju;
    zuozhe1.innerHTML = zuozhe[sum1];
}




function date(){
// 当前时间
Date.prototype.format = function (fmt) {
    var o = {
        "y+": this.getFullYear, //年
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds() //秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
    }
    document.getElementById('dateText').innerHTML = (new Date()).format('hh:mm');
    document.getElementById('dateText_s').innerHTML = (new Date()).format(':ss');
    document.getElementById('dateText_y').innerHTML = (new Date()).format('yyyy年MM月dd日');
    setInterval("document.getElementById('dateText').innerHTML = (new Date()).format('hh:mm');"+
        "document.getElementById('dateText_s').innerHTML = (new Date()).format(':ss');"+
        "document.getElementById('dateText_y').innerHTML = (new Date()).format('yyyy年MM月dd日');", 1000);
}

function isBack(){
	if (localStorage.getItem("back") == null) {
		localStorage.setItem("back","1");
	    console.log("第一次back");
	}
	if (localStorage.getItem("sum") == null) {
		localStorage.setItem("sum","0");
		console.log("第一次sum");
	}
}




url = 
	["https://www.baidu.com/s?ie=utf-8&f=8&tn=02003390_hao_pg&wd=",
	"https://www.sogou.com/web?query=",
	"https://cn.bing.com/search?q=",
	"https://www.google.com/search?q="];
url1 = url[0];
searchOptBox = document.getElementsByClassName("searchOptBox");
sList = searchOptBox[0].getElementsByClassName("searchOpt");
// 切换搜索引擎
function engine(){
    for(let i = 0; i < sList.length; i++){
        sList[i].onclick = function(){
            for(var j = 0; j<sList.length; j++){
                sList[j].className = "searchOpt";
            }
            this.className = "searchOpt selected";
            url1 = url[i];   
        localStorage.setItem("sum",i);
        }
    }
}

//赋值上一次的搜索引擎
function searchClick(){
    var i = localStorage.getItem("sum");
    if(localStorage.length > 0){
        for(var j = 0; j<sList.length; j++){
        sList[j].className = "searchOpt";
        }
        sList[i].className = "searchOpt selected";
        url1 = url[i];
    }
    
}

//搜索
function search(){
    //回车按键
    document.onkeydown = function (event) {
                        var e = event || window.event || arguments.callee.caller.arguments[0];
                        if (e && e.keyCode == 13) {
                            search();
                        }
                    }

    var searchText = document.getElementById("searchText").value;
    if(searchText){
        window.location=url1+searchText;
    }
}
  



function randomback(){
    // 点击随机背景
    var sum = Math.floor(Math.random()*(61+1));
	localStorage.setItem("back",sum);
    document.getElementById("bgbox").src = "img/"+sum+".jpg";
    }
	
function getback(){
    // 赋值上一次的背景
	var sum = localStorage.getItem("back");
    document.getElementById("bgbox").src = "img/"+sum+".jpg";
    }



function displayWindowSize(){
	// 高小于400px隐藏
    var saying = document.getElementsByClassName("saying")[0];

    var w = document.body.clientWidth;
    var h = window.innerHeight;

    if(h < 400){
        saying.style.display = "none";
    }else{
        saying.style.display = "";
    }

    document.getElementById("searchText").style.width = w*0.8 + "px";
}

function backFilter(){
    // 背景虚化
    var input = document.getElementById("searchText");
    var box1 = document.getElementById("box1");

    input.onclick = function(){
        document.getElementById("bgbox").style.filter = "blur(5px)";
    }

    box1.onclick = function(){
        document.getElementById("bgbox").style.filter = "blur(0px)";
    }
}


