/*
 * @Description: 
 * @Autor: YuBiao
 * @Date: 2019-08-29 09:40:17
 */
var gc = `[00:01.06]难念的经
[00:03.95]演唱：周华健
[00:06.78]
[00:30.96]笑你我枉花光心计
[00:34.15]爱竞逐镜花那美丽
[00:36.75]怕幸运会转眼远逝
[00:39.32]为贪嗔喜恶怒着迷
[00:41.99]责你我太贪功恋势
[00:44.48]怪大地众生太美丽
[00:47.00]悔旧日太执信约誓
[00:49.66]为悲欢哀怨妒着迷
[00:52.56]啊 舍不得璀灿俗世
[00:57.66]啊 躲不开痴恋的欣慰
[01:02.86]啊 找不到色相代替
[01:08.09]啊 参一生参不透这条难题
[01:13.15]吞风吻雨葬落日未曾彷徨
[01:15.73]欺山赶海践雪径也未绝望
[01:18.23]拈花把酒偏折煞世人情狂
[01:20.90]凭这两眼与百臂或千手不能防
[01:23.76]天阔阔雪漫漫共谁同航
[01:26.09]这沙滚滚水皱皱笑着浪荡
[01:28.68]贪欢一刻偏教那女儿情长埋葬
[01:32.38]
[01:34.09]吞风吻雨葬落日未曾彷徨
[01:36.50]欺山赶海践雪径也未绝望
[01:39.07]拈花把酒偏折煞世人情狂
[01:41.69]凭这两眼与百臂或千手不能防
[01:44.68]天阔阔雪漫漫共谁同航
[01:46.93]这沙滚滚水皱皱笑着浪荡
[01:49.54]贪欢一刻偏教那女儿情长埋葬
[01:53.41]
[02:15.45]笑你我枉花光心计
[02:18.53]爱竞逐镜花那美丽
[02:21.14]怕幸运会转眼远逝
[02:23.76]为贪嗔喜恶怒着迷
[02:26.43]责你我太贪功恋势
[02:28.98]怪大地众生太美丽
[02:31.60]悔旧日太执信约誓
[02:34.26]为悲欢哀怨妒着迷
[02:36.90]啊 舍不得璀灿俗世
[02:42.04]啊 躲不开痴恋的欣慰
[02:47.34]啊 找不到色相代替
[02:52.52]啊 参一生参不透这条难题
[02:57.47]吞风吻雨葬落日未曾彷徨
[03:00.05]欺山赶海践雪径也未绝望
[03:02.64]拈花把酒偏折煞世人情狂
[03:05.27]凭这两眼与百臂或千手不能防
[03:08.22]天阔阔雪漫漫共谁同航
[03:10.49]这沙滚滚水皱皱笑着浪荡
[03:13.06]贪欢一刻偏教那女儿情长埋葬
[03:18.45]吞风吻雨葬落日未曾彷徨
[03:20.90]欺山赶海践雪径也未绝望
[03:23.54]拈花把酒偏折煞世人情狂
[03:26.21]凭这两眼与百臂或千手不能防
[03:29.07]天阔阔雪漫漫共谁同航
[03:31.32]这沙滚滚水皱皱笑着浪荡
[03:33.92]贪欢一刻偏教那女儿情长埋葬
[03:39.32]吞风吻雨葬落日未曾彷徨
[03:41.84]欺山赶海践雪径也未绝望
[03:44.38]拈花把酒偏折煞世人情狂
[03:47.04]凭这两眼与百臂或千手不能防
[03:49.99]天阔阔雪漫漫共谁同航
[03:52.20]这沙滚滚水皱皱笑着浪荡
[03:54.89]贪欢一刻偏教那女儿情长埋葬
[04:00.28]吞风吻雨葬落日未曾彷徨
[04:02.68]欺山赶海践雪径也未绝望
[04:05.25]拈花把酒偏折煞世人情狂
[04:07.90]凭这两眼与百臂或千手不能防
[04:10.85]天阔阔雪漫漫共谁同航
[04:13.08]这沙滚滚水皱皱笑着浪荡
[04:15.75]贪欢一刻偏教那女儿情长埋葬
[04:19.48]`;
var ul = document.querySelector("ul");
var gcarray = createArray();
var audio = document.querySelector("audio");
var config = {
    ulheight: 450,
    liheight: 35,
    offset: 0.7 ////修正值，播放时间会加上该值，然后进行比较
};

/**
 * 把歌词变成数组 数组中每一个为一个对象 样式为
 * {time:255.75, word:"贪欢一刻偏教那女儿情长埋葬"}
 */

function createArray() {
    var gcarray = gc.split("\n");
    for (var i = 0; i < gcarray.length; i++) {
        var str = gcarray[i];
        // console.log(str);
        gcarray[i] = createObject(str);
        // console.log(gcarray[i]);
    }
    return gcarray;

}

/**
 * 根据一个歌词字符串   [04:15.75]贪欢一刻偏教那女儿情长埋葬   ，返回一个对象
 * 对象格式：{time:255.75, word:"贪欢一刻偏教那女儿情长埋葬"}
 * @param {*} str 
 */
function createObject(str) {
    var object = str.split("]");
    // console.log(object);
    var time = object[0];
    var word = object[1];

    time = time.replace('[', '');//把前面的左中括号去掉
    var times = time.split(':');
    var minute = times[0];
    var second = times[1];
    time = parseInt(minute * 60) + parseFloat(second);
    return {
        time: time,
        word: word
    };
}

createArray();
/**
 * 根据歌词创建li元素添加到ul里面
 */
function createLi() {
    for (var i = 0; i < gcarray.length; i++) {
        var word = gcarray[i];
        var li = document.createElement('li');
        li.innerText = word.word;
        ul.appendChild(li);
    }
}
createLi();

/**
 * 根据当前播放时间 从gcarray数组获得对应的时间
 * 返回-1 表示不对应如何歌词
 */
function getCurrentIndex() {

    var playtime = audio.currentTime;//播放器播放时间
    // console.log(playtime);
    var playtimes = playtime + config.offset;
    for (var i = gcarray.length - 1; i > 0; i--) {
        var liobject = gcarray[i];
        //  console.log(gcarray);
        if (playtimes >= liobject.time) {
            return i;
        }
    }
    return -1;

}

/**
 * 根据当前播放器的播放时间，设置当前播放歌词的效果：
 * 1. ul的margin-top
 * 2. li的active样式
 */
function setCurrent() {
    var index = getCurrentIndex();
    /**
     * 设置li高亮 添加active样式
     */
    function setActive() {
        var li = ul.querySelector(".active");
        if (li) {
            li.className = '';
        }
        if (index !== -1) {
            ul.children[index].className = "active";
        }
    }
    setActive();
    /**
     *设置ul的margin-top 使得歌词滚动
     */
    function setMarginTop() {
        var midHeight = config.ulheight / 2 - config.liheight / 2;
        var margintop = midHeight - index * config.liheight;

        if (margintop > 0) {
            margintop = 0;
        }
        ul.style.marginTop = margintop + 'px';
    }
    setMarginTop();
}

audio.ontimeupdate = function () {
    setCurrent();
};


$(document).ready(function () {

    $('body').ripples({
        resolution: 512,
        dropRadius: 20, 
        perturbance: 0.04
    });
});
