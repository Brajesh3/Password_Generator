document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-btn').addEventListener('click', generatePassword);
    document.getElementById('length').addEventListener('input', function() {
        document.getElementById('length-value').innerText = this.value;
    });

    document.getElementById('about-btn').addEventListener('click', function() {
        window.location.href = 'https://brajesh.site/about/';
    });

    document.getElementById('projects-btn').addEventListener('click', function() {
        window.location.href = 'https://brajesh.site/projects/';
    });

    document.getElementById('password').addEventListener('click', copyPassword);
});

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').innerText = password;
}

function copyPassword() {
    const password = document.getElementById('password').innerText;

    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard!');
}