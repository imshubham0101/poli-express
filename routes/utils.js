

function createResult(error ,data) {
    const result = {}
        if(error){
            result['status'] = 'my_error'
            result['error'] = error
        }
        else{
            result['status']= 'Sucess'
            result['data'] = data
        }
        return result;
}

module.exports = {
    createResult : createResult
}