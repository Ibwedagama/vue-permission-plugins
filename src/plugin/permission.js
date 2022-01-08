export default {
  install(Vue, options) {
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
