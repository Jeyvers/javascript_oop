// Almost everything is an object.
//  const s1 = 'Hello';
// //  console.log(typeof s1);

//  const s2 = new String('Hello');
//  console.log(typeof s2);
//  By default, most data types are primitive. Reread on primitive and reference types. 

// console.log(window);
// console.log(navigator.appVersion)
// Manipulate some of the window methods to gain knowledge and understanding. 


// OBJECT LITERALS .........
const bookOne = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

};
// To create more books, we could duplicate the above code and  edit its functions. However, the next page will teach us how to do this with Constructors.  
// 'this' refers to the specific object you're working in, in this case, book1. So this.title gives you the title of book1(Book One). 

// console.log(book1.getSummary());

// To get all values in an object(values: what was passed into each key), (keys: the name of the 'variable);
// console.log(Object.values(book1));
// console.log(Object.keys(book1));


