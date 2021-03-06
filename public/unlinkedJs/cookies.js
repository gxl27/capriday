 
const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value, expire) => {
        MaxAge = "max-age="+ expire
        document.cookie = `${item}=${value};`+MaxAge;
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'cookies_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true, 31536000);
// 1 year
window.onload = () => {

    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('none');
    }
    const consentPopup = document.querySelector('.consent-popup');
    const acceptBtn = document.querySelector('.consent-accept');
    acceptBtn.addEventListener('click', acceptFn);

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('none');
        }, 2000);
    }

};
