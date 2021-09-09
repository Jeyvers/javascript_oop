// TO CONSTRUCTORS *ES5
// book is now a constructor. 
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary (prototype method)
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};
// getSummary is now stored in the prototype rather than in the actual object itself. Why we do that? Cause we would want the title, author and year for every book but not the getSummary for every book.

// getAge (will give number of years past since book was created)
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};

// Revise / Change year after a revision or reqwriting
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}


// Instantiate an object. When you instantiate an object from the constructor, it runs whatever is in the constructor. 
const book1 = new Book('Book One','John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);
book2.revise('2018');
console.log(book2);