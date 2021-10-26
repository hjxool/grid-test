// var test = {
//     data() {
//       return {
//         bbb: 48
//       }
//     }
//   }
const Test = {
    data() {
        return {
            bbb: new Array(3),
            point: 0,
        }
    },
    // mounted() {
    //     setInterval(() => {
    //         let index = this.point;
    //         index++;
    //         if (index >= this.bbb.length) {
    //             index = 0;
    //         }
    //         this.ccc(index);
    //     }, 2000);//
    // },
    methods: {
        ccc(index) {
            this.point = index;
        }
    },

};

Vue.createApp(Test).mount('#aaa');