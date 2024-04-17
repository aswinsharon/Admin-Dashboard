

export function parseCookies() {
    const cookies = document.cookie.split(';');
    const cookieObject = {};
    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        cookieObject[name.trim()] = decodeURIComponent(value);
    });
    return cookieObject;
};

export function getUserName() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    return username;
}
// Fetch the access token
