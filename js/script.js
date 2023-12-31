const { createApp } = Vue;

createApp({
  data() {
    return {
      emailArray: [],
      items: 10,
    }
  },
  methods: {
    getAPI(items){
      for (let index = 0; index < items; index++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            // handle success
            console.log(response.data.response);
            this.emailArray.push(response.data.response);
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
        
      }
    }
  },
  mounted() {
    this.getAPI(this.items);
  },

}).mount("#app");