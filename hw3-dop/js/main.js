document.getElementById('changePasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');



    if (!username || !newPassword || newPassword !== confirmPassword) {
        errorMessage.textContent = !username ? 'Username cannot be empty' :
            !newPassword ? 'New password cannot be empty' :
                'Пароли не совподают';
    } else {
        alert('Пароль изменен успешно!');
        errorMessage.textContent = '';
    }
});