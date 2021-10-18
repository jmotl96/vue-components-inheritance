const Library = Vue.component('Library', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: [
                new Book('Interaction Design', 200),
                new Movie('Paw Patrol!', 78),
                new Movie('Harriet', 122),
                new Book('Brown Bear, Brown Bear', 0),
            ]
        }
    },

    template: `
      <div class="card-columns">
        <library-item v-for="item in library" :item="item"></library-item>
<!--          <div class="card" v-for="item in library">-->
<!--            <book v-if="item.constructor.name === 'Book'" :item="item"></book>-->
<!--            <movie v-else-if="item.constructor.name === 'Movie'" :item="item"></movie>-->
<!--          </div>-->
      </div>
    `
})

const LibraryItemComponent = Vue.component('LibraryItem', {
    // values/bindings passed to this component
    props: {
        item: LibraryItem
    },

    computed: {
      typeOfItem(){
          return this.item.constructor.name;
      }
    },

    // the view
    template: `
            <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'">
<!--                <h3 class="card-title">{{item.title}}</h3>-->
<!--                <p class="card-text" v-if="item.constructor.name == 'Book'">Pages: {{item.pages}}</p>-->
<!--                <p class="card-text" v-if="item.runningTime">Running Time: {{item.runningTime}}</p>-->
            <div class="card-body">
              <component :is="typeOfItem" :item="item"></component>
            </div>
            <div class="card-footer">
              <button @click="item.checkOut()" class="btn btn-secondary">Check Out</button>
              <button @click="item.checkIn()" class="btn btn-secondary">Check In</button>
            </div>
            </div>
        `,
});


const Cart = Vue.component('cart',{
    data() {
        return {
            cart: [
                new Book('Interaction Design', 200),
                new Movie('Paw Patrol!', 78),
            ]
        }
    },
    template:`
      <div class="card-columns">
      <cart-item v-for="item in cart" :item="item"></cart-item>
      </div>
    `

})

const CartItemComponent = Vue.component('cartItem', {
    // values/bindings passed to this component
    props: {
        item: LibraryItem
    },

    computed: {
        typeOfItem(){
            return this.item.constructor.name;
        }
    },

    // the view
    template: `
            <div class="card" :class="item() ? 'border-success' : 'border-warning'">
<!--                <h3 class="card-title">{{item.title}}</h3>-->
<!--                <p class="card-text" v-if="item.constructor.name == 'Book'">Pages: {{item.pages}}</p>-->
<!--                <p class="card-text" v-if="item.runningTime">Running Time: {{item.runningTime}}</p>-->
            <div class="card-body">
              <component :is="typeOfItem" :item="item"></component>
            </div>
            <div class="card-footer">
              <button @click="item.checkOut()" class="btn btn-primary">delete</button>
            </div>
            </div>
        `,
});


const BookComponent = Vue.component('Book', {
    // inherit props/methods
    extends: LibraryItemComponent,

    template: `
            <div class="book">
                <h3 class="card-title">{{item.title}}</h3>
                <p class="card-text">Pages: {{item.pages}}</p>
            </div>
        `,
});

const MovieComponent = Vue.component('Movie', {
    // inherit props/methods
    extends: LibraryItemComponent,

    template: `
            <div class="movie">
                <h3 class="card-title">{{item.title}}</h3>
                <p class="card-text">Running Time: {{item.runningTime}}</p>
            </div>
        `,
});