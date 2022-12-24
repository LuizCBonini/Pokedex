export const API_URL = 'http://localhost:3000/'

export async function GET_USER(body) {
        const response = await fetch(API_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const json = await response.json();
        // const error = !response.ok ? json : ''
        return json;
}

export async function CREATE_USER(body) {
    const response = await fetch(API_URL + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return response.json()
}
