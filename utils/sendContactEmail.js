export function sendContactEmail(data) {
    const apiEndpoint = '/api/mail/contact';

    fetch(apiEndpoint, {
        method: 'POST',
        'Content-Type': 'multipart/formdata',
        body: JSON.stringify(data),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((response) => {
        alert(response.message);
    })
    .catch((err) => {
        alert('Error: ' + err.message);
    });
}