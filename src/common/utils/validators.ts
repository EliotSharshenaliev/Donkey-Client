export const validatePassword = (_, value) => {
    if (value && value.length < 8) {
        return Promise.reject('The password must be more than 8 characters.');
    }
    return Promise.resolve();
};


export const validateIPAddress = (rule, value, callback) => {
    const proxyIPRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!value || !proxyIPRegex.test(value)) {
        return Promise.reject('Please enter a valid IP address!');
    }
    return Promise.resolve();
};


export const validatePort = (rule, value, callback) => {
    const portRegex = /^(?:\d{1,5})$/;
    if (!value || !portRegex.test(value)) {
        return Promise.reject('Please enter a valid port!');
    }
    return Promise.resolve();
};



export const validateUsername = (rule, value, callback) => {
    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/

    if (!value || !usernameRegex.test(value)) {
        return Promise.reject('Please enter a valid username!');
    }
    return Promise.resolve();
}

export const validateEmail = (rule, value, callback) => {
    const emailIndividualRegex = /^[a-zA-Z0-9._%+-]+@mailkg\.ru$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!value || !emailRegex.test(value)) {
        return Promise.reject('Please enter a valid username!');
    }else if(!value || !emailIndividualRegex.test(value)){
        return Promise.reject('Only @mailkg.ru domain are allowed');
    }
    return Promise.resolve();
}