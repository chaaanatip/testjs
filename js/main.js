
let book = {isbn: '1-23-4', title: 'JS', auther: 'US', pages: 300};
let book2 = {isbn: '5-67-8', title: 'JAVA'}
 
function merge(b1,b2) {
    let unique = {...b1, ...b2};
    console.log(unique);
}
 
merge(book, book2)
