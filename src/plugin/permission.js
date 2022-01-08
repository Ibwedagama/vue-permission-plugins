export default {
  install(Vue, options) {
    /**
     * Permission plugin
     * Create global $permission instance property
     * 
     * @param {string} value - permission to check
     * 
     * @returns {boolean}
     */
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
