

function getAuthorsData(){
    getAuthors().then((users) => {
    const output = document.getElementById('authorList');
    console.log(users);
    users.map((user) =>{
        let author = document.createElement("li");
        author.innerHTML =[user.name + ", " + user.email];
        output.append(author);
    })
});
}

async function getAuthors(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}


    
