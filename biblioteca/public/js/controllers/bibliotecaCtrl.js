app.controller('bibliotecaCtrl', function($scope, $firebaseObject) {
    var ref = new Firebase("https://bibliotecap3.firebaseio.com");
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    
    $scope.header = 'Biblioteca de p3';

    $scope.books = [{
        id: 0,
        title: 'Senhor dos anéis',
        desc: 'Descrição',
        img_url: 'url',
        authors: ['J. R. R. Tolkien'],
        price: 10.00,
        comments: ['Comentário']
    }];

    $scope.addBook = function(book) {
        $scope.books.push(book);
        delete $scope.book
    };

    $scope.deleteBooks = function(books) {
        $scope.books = books.filter(function(book) {
            if (!book.isSelected) return book;
        });
    };

    $scope.isAnyBookSelected = function(books) {
        return books.some(function(book) {
            return book.isSelected;
        });
    };


});
