export default {
  install(Vue, options) {
    Vue.prototype.$permission = function (value) {
      try {
        const permissions = this.$store.state.permissions;

        return value && permissions.includes(value);

      } catch (error) {
        console.error(error);
      }

      return false;
    };
  },
};
