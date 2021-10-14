
Vue.component('todo-item', {
    props: ['todo'],
    template : `<li>{{ todo.text }}</li>`
})

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
                this.wordList = response.data,
                console.log(this.wordList)
            )
          )
    }
})
