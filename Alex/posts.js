var http = require('http');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Comments';
const PORT = 3000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if( req.method == "GET" )
    {
        var params = require('url').parse( req.url, true ).query;

        var initID = params.id;
        var maxFetch = params.max;

        if( !initID || !maxFetch )
        {
            res.end( "{ error: \"message\": \"Too many items to fetch. Please provide a max and init id\" }" );
            return;
        }
        
        MongoClient.connect( url, { native_parser: true }, function( err, db ) {
            if( err ) throw err;

            var dbo = db.db("Comments");
            var posts = dbo.collection("Posts");
            var comments = posts.find({}).project({_id: 0}).toArray(function( error, result ){
                var _initID = parseInt( initID );
                var len = parseInt( maxFetch );
                var _max =_initID + len;  
                var first = true;

                res.write("{\"results\":[ ");
                result.forEach(element => {
                    var _id = parseInt( element.id );
                    if( _id >= _initID && _id < _max )
                    {
                        if( first )
                        {
                            first = !first;
                            res.write( JSON.stringify( element ) );
                        }
                        else
                            res.write( "," + JSON.stringify( element ) );
                    }
                });
                res.end( "]}");
            });
        });
    }
 });
 
 server.listen(PORT, () => {   
    console.log('Server running at http://localhost:' + PORT + '/');
 }) 