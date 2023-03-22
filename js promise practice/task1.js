function getFullResponseFromAPI(success){
    return new Promise((resolve, reject)=>{
        /*when argument is true  */
        if(success==true){
            resolve({
                status:200,
                body:'Sucess',
            });
        }
        /*if false returns a statement*/
        else{
            reject(Error("The fake API is not working currently"));
        }
    });
}
export default getFullResponseFromAPI;