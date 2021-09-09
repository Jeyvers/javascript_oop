class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    };

    revise(newYear){
       
            this.year = newYear;
            this.revised = true;
        
    }

    // Showing static methods. In static methods, you do not need to instantiate and object for it to run. Also, when calling a property or function in the static methods, you use the actual class where tis defined. ie (You can get the revise function using book1.revise, but for the topBookStore, use Book.topBookStore)
    static topBookStore(){
        return 'Barnes & Noble';
    }
 }

// Instantiate Object 
const book1 = new Book ('Book One', 'John Doe', '2013');

console.log(Book.topBookStore);


