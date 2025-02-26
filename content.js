chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'autofill') {
        // Example: Autofill fields on the page
        document.querySelector('#name').value = request.data.name;
        document.querySelector('#email').value = request.data.email;
        document.querySelector('#phone').value = request.data.phone;
    }
});
