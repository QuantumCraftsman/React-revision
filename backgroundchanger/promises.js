// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("hello")
//         resolve({user:"rahul",email:"rahulgoel03200303"})
        
//     },1000);
// }).then((user)=>{
//     console.log(user)
    

// })

//  const fivePromise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:"rahul",email:"rahulgoel03203"})
//         }
//         else{
//             reject("something went wrong")
//         }
        
        
//     }, 1000)
// })
// ).then((user)=>{
//     console.log(user)
//     return user.username

// }).then((username)=>
//     console.log(username)
// ).catch((error)=>
//     console.log(error)
// ).finally(()=>{
//     console.log("hello my promise is resolved")
// })
async function consumepromise() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        return data
    }
    catch(error){
        console.log(error)
    }
    
}
consumepromise().then((user)=>{
    // console.lg(user)
    return user[10].title
}).then((data)=>{
    console.log(data)

})