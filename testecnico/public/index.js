Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    wordList: null
  },
  mutations: {
    async load (state) {
      axios
        .get('http://localhost:3001/get')
        .then(
          response => (
            state.wordList = response.data
          )
        )
    }
  },
  actions: {
    retrieveWords ({ commit }) {
      setTimeout(() => {
        commit('load')
      }, 100)
    }
  }
});

store.commit('load')

new Vue ({
  el: '#wordlist',
  store,
  computed : Vuex.mapState([
    'wordList'
  ]),
  methods : {
    DeleteWord(nombre) {
      axios
        .delete('http://localhost:3001/delete', {
          data : {
            nombre : nombre
          }
        })
        .then(
          response => (
            console.log(response)
          )
        )
      this.$store.dispatch('retrieveWords')
    },
    UpdateWord(nombre, definicion) {
      axios
        .put('http://localhost:3001/update',{
          data : {
            nombre : nombre,
            definicion : definicion
          }
        })
        .then(
          response => (
            console.log(response)
          )
        )
        this.$store.dispatch('retrieveWords')
    }
  }
})

new Vue ({
  el: '#addtolist',
  store,
  data: {
    nombre : '',
    definicion : ''
  },
  methods : {
    InsertWord() {
      if (this.nombre === "") return console.log("The word is mandatory")
      axios
        .post('http://localhost:3001/add', {
          nombre : this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1),
          definicion : this.definicion.charAt(0).toUpperCase() + this.definicion.slice(1)
        })
        .then(
          response => (
            console.log(response)
          ),
          this.nombre = "",
          this.definicion = ""
        )
        this.$store.dispatch('retrieveWords')
    }
  }
})
