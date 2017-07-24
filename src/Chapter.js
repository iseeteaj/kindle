var fs = require('fs')

var path = require('path')

function Chapter (file) {
    this._file = file
}

Chapter.prototype ={

    read: function(){
         return fs.readFileSync(path.join(__dirname, '../tests/fixtures/samplechapter.txt'), 'utf8')
         
    }
}

module.exports = Chapter