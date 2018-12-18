const USER_ID=1;

console.log("Starting The Application");
//
getUserAndRepositories(USER_ID, (err, user)=>{
    if(err)
        console.log("Error Occured: "+err);
    else{
        console.log("User Details: "+JSON.stringify(user));
        // console.log("Repositoties: "+repos.join(" , "));

        getTheRepositories(user.name, (err, repos)=>{
            if(err)
                console.log("Error Occured: "+err);
            else
                console.log("Repositories: "+repos.join(" , "));
        })
    }
});

console.log("End of Application");
// getTheRepositories(USER_ID, (err, repos)=>{
//     if(err)
//         console.log("Error Occured: "+err);
//     else
//         console.log("Repositoties: "+repos.join(" , "));
// })
//Display The user details

function getUserAndRepositories(userId, callback){
    let user= getUserDetails();
    let repositories=getUserRepositories();
    //send User Details along with repository details
    setTimeout(()=>{
        if(userId===1)
            callback(null, user)
        else
            callback(new Error(`User having Id ${userId} is not present`), null)
    }, 2000)
    // //Send Repository Details
    // setTimeout(()=>{
    //     if(userId===1)
    //         callback(null, repositories)
    //     else
    //         callback(new Error(`User having Id ${userId} is not present`), null)
    // }, 2000)
}

function getTheRepositories(userName, callback){
    let repos=getUserRepositories();
    setTimeout(()=>{
    if(userName==="Soumya Dey")
        callback(null, repos)
    else
        callback(new Error(`Sorry, there is no repository found for user ${userName}`), null);
    }, 2000)
}

function getUserDetails(){
    return {"id": 1, "name":"Soumya Dey"};
}

function getUserRepositories(){
    const repos=['Repo1', 'Repo2', 'Repo3', 'Repo4', 'Repo5']
    return repos;
}