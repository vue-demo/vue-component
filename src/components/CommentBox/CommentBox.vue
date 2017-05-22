<template>
  <div class="comment">
    <h1 class="title">评论列表 <Clock></Clock></h1>
    <CommentList></CommentList>
  </div>
</template>

<script>
export default {
  name: 'CommentBox',
  data () {
    return {}
  },
  mounted(){
    this.CommentBox();
  },
  methods:{
    CommentBox(){
      console.log('commentBox');
    }
  }
}
</script>

