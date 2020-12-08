var formidable = require("formidable");
var file = require("../models/files.js");

exports.showIndex = function(req, res){
    res.render("index.ejs");
}

exports.order = function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields){
        // file.save(JSON.stringify(fields), function(err){
        //     if(err){
        //         res.send("-1");
        //     }else{
        //         res.send("1");
        //     }
        // });

        var phoneNum = fields.phone;
        var cai =  fields.foodName;
        file.save(phoneNum, cai, function(err){
            if(err){
                res.send("-1");
            }else{
                res.send("1");
            }
        });

    })
};

exports.getALLFileName = function(req, res){
    file.getALLFileName(function(arr){
        res.render("allFoodName.ejs", {
            "allPhomeNum":arr
        })
    });
}

exports.showOrder = function(req, res){
    var phoneNum = req.params.phoneNum;
    file.read(phoneNum, function(data){
        if(data == -1){
            res.render("orderFood.ejs", {
                "cando":false,
                "phoneNum":phoneNum,
                "food" : ""
            })
        }else{
            res.render("orderFood.ejs", {
                "cando":true,
                "phoneNum":phoneNum,
                "food" : data
            })
        }
    })
}