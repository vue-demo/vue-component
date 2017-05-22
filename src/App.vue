<template>
  <div id="app" class="app">
    <CommentBox></CommentBox>
  </div>
</template>

<script>
 //import CommentBox from './CommentBox/CommentItem.vue';
export default {
  name: 'app',
   //components:{ CommentBox },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  body{
    color: #444;
    font-size: 14px;
    font-family: 'Microsoft Yahei';
  }
  .title{
    font-size: 20px;
    line-height: 50px;
    margin-bottom:20px;
    border-bottom: 1px solid #a5a5a5;
  }
  .app{
    width: 414px;
    margin: 50px auto;
  }
  .item{
    margin-bottom:10px;
  }
  .row{
    display: inline-block;
    line-height: 30px;
  }
  .date{
    font-size: 13px;
    color: #999;
    text-indent: 10px;
  }

  .reply-name,
  .reply-text,
  .reply-btn{
    display: block;
    width: 94%;
    padding: 0 3%;
    line-height: 30px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #a5a5a5;
  }
  .reply-name{
    height: 30px;
  }
  .reply-text{
    height: 90px
  }
  .reply-btn{
    width: 100%;
    color: white;
    font-size: 14px;
    background-color: blue;
    border: 1px solid blue;
    outline: none;
  }
</style>