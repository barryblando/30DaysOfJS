// In Singleton you can't have more the one instance
// Use this pattern like in an instance if you want one user object created at a time / Logged In User
// Hard to Debug

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Barry'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);