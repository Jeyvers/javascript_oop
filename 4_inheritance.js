// Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary (prototype method)
Book.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine constructor to inherit the properties of book Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
}


// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);



// Instantiate magazine object.
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'April');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

//The below code will result in an error as Magaine hasn't inherited the prototype of Book(getSummary) yet. In order to do this: (Magazine.prototype)
// console.log(mag1.getSummary())


