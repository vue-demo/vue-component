<template>
  <div class="list">
    <CommentItem :arrData="list"></CommentItem>
    <CommentSend></CommentSend>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  data () {
    return {
      list:[{
        author:'张三',
        text:'出去玩啊!',
        date:'2018-05-22 10:20:01'
      },{
        author:'李四',
        text:'天气不错啊!',
        date:'2017-05-22 12:20:01'
      },{
        author:'王五',
        text:'都在干嘛呢',
        date:'2017-05-21 14:20:01'
      },{
        author:'赵六',
        text:'我在学习VueJs!',
        date:'2017-05-20 16:20:01'
      }]
    }
  },
  mounted(){
    this.CommentList();
  },
  methods:{
    CommentList(){
      console.log('CommentList');
    }
  }
}
</script>