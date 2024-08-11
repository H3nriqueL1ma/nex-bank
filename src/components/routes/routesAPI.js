export async function sendData(url, data) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => { return response; })

        return res;
    } catch (error) {
        console.error("Error sending data: ", error);
    }
}

export async function authData(url, credentials) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${credentials}`
            }
        })
        .then(response => response.json())
        .then(response => { return response; });
    
        return res;
    } catch (error) {
        console.error("Error sending login credentials", error);
    }
}