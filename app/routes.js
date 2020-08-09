var request = require('request');


module.exports = function(app, fs)
{

    app.post('/orders', function(req, res)
    {
        savedatatofirebase()
        saveddatatoexcel()
         
    });

    function savedatatofirebase()
    {

    }
    function saveddatatoexcel()
    {
        
    }
    app.post('/cancelled', function(req, res)
    {
         
    });
   
}