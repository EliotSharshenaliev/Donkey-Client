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
