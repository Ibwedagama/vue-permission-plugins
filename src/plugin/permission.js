export default {
  install(Vue) {
    Vue.prototype.$permission = function(value) {
      const permissions = this.$store.state.permissions;

     if (value) {
       if (Array.isArray(permissions) && permissions.includes(value)) {
         return true
       }
     }

      return false;
    };
  },
};
