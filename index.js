module.exports = function(myless, done){
    var args = [].slice.call(arguments, 2).map(function(i){ 
        return i.value;
    });

    var result = JSON.stringify(""
        + "foo-asyn-func => input args: " 
        + args.join(", ")
    );
    
    setTimeout(function(){
        done(null, myless.util.value.toLessStr(result));
    }, 1000)
}