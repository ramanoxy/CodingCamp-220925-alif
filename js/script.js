document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt('Masukkan nama Anda:');
    const userNameElement = document.getElementById('user-name');
    if (userName) {
        userNameElement.textContent = userName;
    } else {
        userNameElement.textContent = 'Guest';
    }
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    currentTimeElement.textContent = now.toLocaleString();
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const name = document.getElementById('name').value;
        const birthDate = document.getElementById('birth-date').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value;
    if (!name || !birthDate || !gender || !message) {
            alert('Mohon lengkapi semua data!');
            return;
        }
    const genderValue = gender ? gender.value : 'Tidak diketahui';
        const resultHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
            <p><strong>Jenis Kelamin:</strong> ${genderValue}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
    formResult.innerHTML = resultHTML;

    contactForm.reset();
    });
});