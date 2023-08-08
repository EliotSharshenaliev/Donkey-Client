

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

export const validatePassword = (_, value) => {
    if (value && value.length < 8) {
        return Promise.reject('The password must be more than 8 characters.');
    }
    return Promise.resolve();
};
