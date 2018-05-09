const async = require('async');
//1st param; array of functions
async.parallel([
    function(callback){
        setTimeout(function(){
            console.log('one');
            callback(null, 'one');
        }, 200)
    },
    function(callback){
        setTimeout(function(){
            console.log('two')
            callback(null, 'two');
        }, 100)
    }
],
//2nd param: optional callback when all finish

function onComplete(err, results){
    //results = ['one', 'two']
    results.forEach(res => {
        console.log(res);
    });
});