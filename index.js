function submitData(username, useremail) {
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: username,
        email: useremail
    })
    })
    .then(response => response.json())
    .then(object => buildId(object))
    .catch(error => buildError(error))
}

function buildId(obj) {
    const p = document.createElement('p');
    p.textContent = `${obj.id}`;
    document.body.append(p);
}

function buildError(err) {
    const p = document.createElement('p');
    p.textContent = `${err.message}`;
    document.body.append(p);
}