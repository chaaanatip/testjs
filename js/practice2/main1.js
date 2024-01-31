const book1={id:1,title:'JS Beginner'}
const book2={page: 300, id: 2, title: 'JS Advanced'}

function mergeBook(b1,b2) {
    return{...b1,...b2}
}
console.log(mergeBook(book1,book2))