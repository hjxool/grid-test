const Test = {
    data() {
        return {
            bbb: new Array(4),
            point: 0,
            input: '',
            index: 0,
            arry: [],
            oldKey: '',
            paraObj: {}
        }
    },
    mounted() {
        // setInterval(function() {
        //     console.log(this)
        //     let index = this.point;
        //     index++;
        //     if (index >= this.bbb.length) {
        //         index = 0;
        //     }
        //     this.ccc(index);
        // }, 2000);
        // $('#qwe').val('789qwe')
    },
    methods: {
        eqweqw() {
            console.log(this.point);
        },
        ccc(index) {
            this.point = index;
        },
        previous() {
            console.log(14561465)
            if (this.index > 0) {
                this.index--;
                this.search();
            }
        },
        next() {
            console.log(4894)
            console.log($('.result').length)
            if (this.index < $('.result').length) {
                this.index++;
                this.search();
            }
        }
    },
};

Vue.createApp(Test).mount('#aaa');
var arr = [{
    'name': 'abc',
    'age': 20
},
{
    'name': 'cde',
    'age': 19
},
{
    'name': 'dfc',
    'age': 25
},
{
    'name': 'bde',
    'age': 21
},
]
function compare(property) {
    return (a, b) => {
        console.log(a[property])
        console.log(a)
        return (a[property] - b[property])
    }
}

console.log(arr.sort(compare('age')))
// console.log('大𠮷大利'.length)
// const tel = '13012345678'
// const newTel = tel.slice(-4).padStart(tel.length, '*')
// console.log(tel.length)
// console.log(newTel)
// let arry = [
//     {a:1,b:2,c:3},
//     {a:2,b:3,c:4},
//     {a:5,b:6,c:7},
//     {a:8,b:9,c:3},
// ]
// let arry = ['dasd','312321','eqwedasd']
// console.log(arry)
// console.log(Object.entries(arry))
// let map = new Map([arry])
// for(let [key, value] of map){
//     console.log(key)
//     console.log(value)
// }
// const course = {
//     math: 80,
//     english: 85,
//     chinese: 90
// }
// const res = arry.filter((a,b,c) => b > 3)
// for(let [index,value] of Object.entries(arry)){
//     console.log(index,value)
// }
// console.log(res)
// console.log(Object.fromEntries(res))
// const obj = {
//     name: 'imooc',
//     course: 'es'
// }
// const entries = Object.entries(obj)
// console.log(entries)
// function foo() {
//     // es10新特性
//     console.log('imooc')
// }
// console.log(foo.toString())
// const b = 0 // 或者null undefined false
// const a = b ?? 123
// console.log(a)
var oldKey = "";
var index = 0;
var arry = [];//用于记录每个关键词的位置，以方便跳转
// var oldCount = 0;//记录搜索到的所有关键词总数

// function previous(){
//     index--;
//     index = index < 0 ? oldCount - 1 : index;
//     search();
// }
// function next(){
//     index++;
//     //index = index == oldCount ? 0 : index;
//     if(index==oldCount){
//         index = 0 ;
//     }
//     search();
// }

// function search() {
//     $(".result").removeClass("res");//去除原本的res样式
//     var key = $("#key").val(); //取key值
//     if (!key) {
//         console.log("key为空则退出");
//         $(".result").each(function () {//恢复原始数据
//             $(this).replaceWith($(this).html());
//         });
//         // oldKey = "";
//         return; //key为空则退出
//     }
//     if (oldKey != key) {
//         console.log("进入重置方法");
//         //重置
//         index = 0;
//         $(".result").each(function () {
//             $(this).replaceWith($(this).html());
//         });
//         pos = new Array();
//         var regExp = new RegExp(key, 'ig');//正则表达式匹配
//         $("body").html($("body").html().replace(regExp, "<span id='result" + index + "' class='result'>" + key + "</span>")); // 高亮操作
//         $("#key").val(key);
//         oldKey = key;
//         $(".result").each(function () {
//             pos.push($(this).offset().top);
//         });
//         oldCount = $(".result").length;
//         console.log("oldCount值：",oldCount);
//     }

//     $(".result:eq(" + index + ")").addClass("res");//当前位置关键词改为红色字体

//     $("body").scrollTop(pos[index]);//跳转到指定位置
// }
// function search() {
//     $('.result').removeClass('res');
//     var key = $("#key").val()
//     if (!key) {
//         $('.result').each(function () {
//             $(this).replaceWith($(this).html())
//         });
//         this.oldKey = '';
//         return
//     }
//     if (this.oldKey != this.input) {
//         // 重置参数
//         this.index = 0;
//         $('.result').each(function () {
//             $(this).replaceWith($(this).html());
//         });
//         arry = [];
//         this.oldKey = this.input;
//         // 查找替换
//         let reg = new RegExp(this.input, 'ig');
//         let content = $('#aaa').html().replace(reg, `<span class="result">${this.input}</span>`);
//         console.log($('#search').html())

//         $('#aaa').html(content);
//         console.log($('#search').html())

//         $('#key').val(this.input);
//         $('.result').each(function () {
//             let obj = {};
//             obj.top = $(this).offset().top;
//             obj.left = $(this).offset().left;
//             arry.push(obj);
//         });
//     }
//     $('.result').eq(this.index).addClass('res');
//     window.scrollTo(arry[this.index].left, arry[this.index].top - 150);
// }