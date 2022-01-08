export default {
  install(Vue, options) {
    Vue.prototype.$permission = function(value) {
      const permissions = this.$store.state.permissions;

      // return false immediately when value is falsy
     if (!value) {
      return false
     }

    //  check if value is included on permissions Array
     if (Array.isArray(permissions) && permissions.includes(value)) {
      return true
    }

      return false;
    };
  },
};
