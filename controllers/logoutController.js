const logout = async () => {
    try {
        localStorage.clear();
        sendStatus(200);
    } catch(error) {
        console.error(error);
    }
}
module.exports = logout