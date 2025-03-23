export {
    getAll,
    get
}

async function getAll() {
    const res = await fetch(`http://localhost:3030/jsonstore/users`);
    const users = await res.json();
    return Object.values(users);
    
}
function get(params) {
    
}