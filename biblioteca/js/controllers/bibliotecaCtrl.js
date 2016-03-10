app.controller('bibliotecaCtrl', function($scope) {

    $scope.header = 'Biblioteca de p3';

    $scope.books = [{
        title: 'Senhor dos anéis',
        desc: 'Description of Senhor dos anéis',
        img_url: 'url',
        authors: ['author1'],
        price: 10.00
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
