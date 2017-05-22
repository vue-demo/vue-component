<template>
    <div class="reply">
      <input class="reply-name" type="text" placeholder="姓名"/>
      <textarea class="reply-text" placeholder="评论"></textarea>
      <input class="reply-btn" type="button" value="添加评论"/>
    </div>
</template>

<script>
export default {
  name: 'CommentSend',
  data () {
    return {}
  },
  mounted(){
    this.CommentSend();
  },
  methods:{
    CommentSend(){
    }
  }
}
</script>