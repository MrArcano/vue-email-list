const { createApp } = Vue;

createApp({
  data() {
    return {
      emailArray: [],
    }
  },
  methods: {
    getAPI(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          // handle success
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log("ciao");
          console.log(error);
        });
    }
  },
  mounted() {
    this.getAPI();
  },

}).mount("#app");