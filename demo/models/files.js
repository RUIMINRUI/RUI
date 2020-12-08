var baseUrl = "./data";
var fs = require("fs");

exports.save = function(phoneNum, data, callback){
//    fs.appendFile(fileUrl, data, callback);
    fs.writeFile(baseUrl +"/"+ phoneNum + ".txt", data, callback);
}

//單元測試
//var a = exports.getALLFileName = function(callback){
exports.getALLFileName = function(callback){
    fs.readdir(baseUrl, function(err, filenameArray){
        if(err){
            throw new Error("讀取清單錯誤");
            return;
        }
        var resultArr = [];
        for(var i=0;i<filenameArray.length;i++){
            resultArr.push(filenameArray[i].substr(0, filenameArray[i].length-4))
        }
        callback(resultArr);
    })
}


exports.read = function(phoneNum, callback){
    fs.readFile(baseUrl + "/" +phoneNum+".txt", function(err,data){
        if(err){
            callback(-1);
            return;
        }else{
            callback(data.toString());
        }
    })
}

//單元測試
// a("333", function( arr){
//     console.log(arr)
// });