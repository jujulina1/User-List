const url = `http://localhost:3030/jsonstore/users`

export {
    getAll,
    createUser,
    getById
}

async function getAll() {
    const res = await fetch(url);
    const users = await res.json();
    return Object.values(users);
    
}

async function createUser(data) {

    // let data = {
    // firstName,
    // lastName,
    // email,
    // imageUrl,
    // phoneNumber,
    // createdAt,
    // updatedAt,
    // address: {
    //     country,
    //     city,
    //     street,
    //     streetNumber
    // }
    // }

    let object = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }

    const res = await fetch(url, object);
    const result = res.json();
    console.log(result);
    
    return result;
    
}

async function getById(userId) {
    console.log(userId);
    
    const res = await fetch(`${url}/${userId}`);
    console.log(`${url}/${userId}`);
    
    const user = await res.json();
    console.log(user);
    return user;
    
}