export const tokenCheck = () => {
    let token = window.localStorage.getItem('jobdekho');
    if (token) {
        token = JSON.parse(token);
        const id = token.userId;
        if (!id) {
            return false;
        }
        return { id };
    }
    else {
        return false;
    }
}