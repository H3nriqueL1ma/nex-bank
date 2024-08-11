export default function encodeCredentials(user, pass) {
    return btoa(`${user}:${pass}`);
} 