function JSend()
{
    //static E {
        this.ERROR='error';
        this.SUCCESS='success';
        this.FAIL='fail';
}
    
JSend.prototype.returnSuccess=function(data){
        if(!data)
            throw "Data is required on Success";
        
        let returnObj = {status:JSend.SUCCESS};
        returnObj.data = data;        
        return returnObj;        
};

JSend.prototype.returnFail=function(data){
        if(!data)
            throw "Data is required on Fail";
        
        let returnObj = {status:JSend.FAIL};
        returnObj.data = data;
        return returnObj;        
};

JSend.prototype.returnError=function(message, data){
        if(!message)
            throw "Message is required on Error";
        
        let returnObj = {status:JSend.ERROR};
        returnObj.message = message;
        if(data)
            returnObj.data = data;
        
        return returnObj;        
}

module.exports = JSend;
