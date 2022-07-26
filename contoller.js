var fs=require('fs');

//callback functions
exports.getAll=function(req, res){
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            res.send(products);
        }
        else{
            res.send("data not available")
        }
    })
};

exports.getById=function(req, res){

    var producdId=req.params.id;
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            var product=products.find((p=>(p.id ==producdId)))
            res.send(product);
        }
        else{
            res.send("data not available")
        }
    })

};

exports.insert=function(req, res){
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            var newProduct=req.body;
            products.push(newProduct);
            fs.writeFile(path,JSON.stringify(products),(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("new product inserted into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })
};

exports.update=function(req, res){
    var producdId=req.params.id;
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            var newProduct=req.body;
            var oldProduct=products.find((p=>(p.id ==producdId)))
            var mapindex=products.indexOf(oldProduct);
            products[mapindex]=newProduct;
            fs.writeFile(path,JSON.stringify(products),(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send(" product updated into collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })

   // res.send("existing product updated");
};

exports.delete=function(req, res){
    var producdId=req.params.id;
    var path="./products.json";
    fs.readFile(path, (err, data)=>{
        if(data){
            var products=JSON.parse(data);
            var delProduct=products.find((p=>(p.id ==producdId)))
            var delProduct=products.filter(function(value,index,products){
                return value!=newProduct;
            });
            fs.writeFile(path,JSON.stringify(delProduct),(err)=>{
                if(err){
                    res.send("file IO problem")
                }
                else
                res.send("product deleted from collection.")
            } )
            
        }
        else{
            res.send("data not available")
        }
    })

    //res.send("product is removed from list");
};

