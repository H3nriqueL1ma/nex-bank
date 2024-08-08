export async function sendData(url, data) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => { return response; })

        return res;
    } catch (error) {
        console.error("Error sending data: ", error);
    }
}