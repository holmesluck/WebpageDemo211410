var nano = require('nano')('https://97966228-6ae2-47c5-b355-68982b4447e9-bluemix:cc9cdfe97378460cc59198a9712e0712a03eb0954f102e794fea2bae8420ff9b@97966228-6ae2-47c5-b355-68982b4447e9-bluemix.cloudant.com');

// clean up the database we created previousl
nano.db.destroy('prints', function() {
    // create a new database
    nano.db.create('prints', function() {
        // specify the database we are going to use
        var prints = nano.use('prints');
        // and insert a document in it
        prints.insert({ 'landscapes': [
            {
                'id' : 1,
                'title':  'Antarctica' ,
                'description': "Lauren's husband took this spectacular photo when they visited Antarctica in December of 2012. This is one of our hot sellers, so it rarely goes on sale."  ,
                'imgsrc': 'penguin.jpg' ,
                'price': 100 ,
                'quan':  6 },
            {
                'id' : 2,
                'title':  'Alaska' ,
                'description': "Lauren loves this photo even though she wasn't present when the photo was taken. Her husband took this photo on a guy's weekend in Alaska."  ,
                'imgsrc': 'alaska.jpg' ,
                'price': 75 ,
                'quan':  1 },
            {
                'id' : 3,
                'title':  'Australia' ,
                'description': "This photo is another one of Lauren's favorites! Her husband took these photos of the Sydney Opera House in 2011."  ,
                'imgsrc': 'sydney.jpg' ,
                'price': 100 ,
                'quan':  0 },
        ]}, 'inventory', function(err, body, header) {
            if (err) {
                console.log('Error creating document - ', err.message);
                return;
            }
            console.log('all records inserted.')
            console.log(body);
        });
    });
});
