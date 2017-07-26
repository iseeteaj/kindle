var Chapter = require('../src/Chapter')
var path = require('path')
var fs = require('fs')

function Book(chapters){
    this._chapters = chapters

}

Book.prototype = {
    getChapters: function(){
        
    return this._chapters
    }
}

module.exports = Book
