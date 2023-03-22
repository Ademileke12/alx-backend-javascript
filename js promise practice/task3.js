import { uploadPhoto, createUser } from "./utils.js";
function handleProfileSignup(){
    return Promise.resolve([uploadPhoto(), createUser()])
    .then((value)=> {
        console.log(body, firstName, lastName);
    })
    .catch(() => {
        console.log('Signup system offline');
      });
}