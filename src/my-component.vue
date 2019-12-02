<template>
  <div>{{message}}</div>
</template>
<script>
export default {
  name:'MyComponent', 
  props: ['msg'],
  data() {
    return {
    }
  },
  computed:{
    message: function(){
      return this.msg || 'Missing "msg" prop';
    }
  },
}
</script>
