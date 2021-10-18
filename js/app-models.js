// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those)
function LibraryItem(title){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    this.title = title || 'Default Title';
    this.id = Math.floor(Math.random() * 10e16);
    this.status = STATUSES.CHECKED_IN;

    // methods
    this.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    this.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    this.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }

}

// let book = new LibraryItem('Interaction Design', 200);
// let movie = new LibraryItem('Paw Patrol!', null, 78);
//
// console.log(book);


function Book(title, pages){
    //LibraryItem.apply(this, [title])
    LibraryItem.call(this, title)

    this.pages = pages;
}
// sets the prototype
Book.prototype = Object.create(LibraryItem.prototype);
// resets the constructor
Book.prototype.constructor = Book;

// same as above using class syntax
class Movie extends LibraryItem{
    runningTime;

    constructor(title, runningTime){
        super(title);

        this.runningTime = runningTime;
    }
}

//LibraryItem.prototype.catalog = '201.34';

let book = new Book('Interaction Design', 200);
let movie = new Movie('Paw Patrol!', 78);

console.log(book.constructor.name, book, movie.constructor.name, movie);