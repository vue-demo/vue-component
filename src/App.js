import Vue from 'vue';

import Clock from './components/Clock';
import CTime from './components/CTime';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import CommentItem from './components/CommentItem';
import CommentSend from './components/CommentSend';

Vue.use(Clock);
Vue.use(CTime);
Vue.use(CommentBox);
Vue.use(CommentList);
Vue.use(CommentItem);
Vue.use(CommentSend);

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
})
