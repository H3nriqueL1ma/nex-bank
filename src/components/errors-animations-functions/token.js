function random() {
    return Math.random().toString(36).substring(2);
}

export default function token() {
    return random() + random();
}