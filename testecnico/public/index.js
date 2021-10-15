new Vue ({
  el: '#wordlist',
  data: {
    wordList: null
  },
  mounted () {
    axios
      .get('http://localhost:3001/get')
      .then(
        response => (
            this.wordList = response.data
        )
      )
  },
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
    }
  }
})

new Vue ({
  el: '#addtolist',
  data: {
    nombre : '',
    definicion : ''
  },
  methods : {
    InsertWord : function () {
      if (nombre = "") return console.log("The word is mandatory")
      axios
        .post('http://localhost:3001/add', {
          nombre : this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1),
          definicion : this.definicion.charAt(0).toUpperCase() + this.definicion.slice(1)
        })
        .then(
          response => (
            console.log(response)
          )
        )
    }
  }
})
