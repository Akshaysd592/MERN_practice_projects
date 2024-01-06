class apiResponse {
     constructor(statusCode,data,message="success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode<400;// if less than 400 then true else false
     }
}

export {apiResponse}