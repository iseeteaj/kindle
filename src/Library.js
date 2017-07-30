

function Library (books){
this._books =[]
}

Library.prototype = {

    getBooks: function(){
        return this._books
        
    }
    
}

module.exports = Library