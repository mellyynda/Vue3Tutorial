const app = Vue.createApp({
  //data, functions
  // template: '<h2>I am the template</h2>'
  data() {
    return {

      url: 'http://www.wikipedia.org',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick swazey', img: 'assets/1.jpg', isFav: true },
        { title: 'obstructed by night', author: 'alex thornfiels', img: 'assets/2.jpg', isFav: false },
        { title: 'flawless monstruosity', author: 'robert nesti', img: 'assets/3.jpg', isFav: true },
      ],
      age: 45,
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, num) {
      // console.log(event, event.type);
      // if (num) {
      //   console.log(num);
      // }
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app')

