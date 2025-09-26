document.addEventListener('DOMContentLoaded', () => {
    
    const nameModal = document.getElementById('nameModal');
    const modalNameInput = document.getElementById('modal-name-input');
    const modalSubmitBtn = document.getElementById('modal-submit-btn');
    const userNameElement = document.getElementById('user-name');

    if (document.title.includes('Ramadev-CodingCamp RevoU') && nameModal) {
        
        nameModal.classList.add('show');

        const processName = () => {
            let userName = modalNameInput.value.trim();
            
            if (userName === '') {
                userNameElement.textContent = 'Sobat Teknologi';
            } else {
                userNameElement.textContent = userName;
            }
            
            nameModal.classList.remove('show'); 
        };

        modalSubmitBtn.addEventListener('click', processName);
        

        modalNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                processName();
            }
        });
        
        if (userNameElement) {
             userNameElement.textContent = 'Sobat Teknologi';
        }
    }


    const contactForm = document.getElementById('contact-form');
    
    const validationMessage = document.createElement('div');
    validationMessage.style.color = 'red';
    validationMessage.style.marginTop = '10px';
    
    if (contactForm) {
        contactForm.parentNode.insertBefore(validationMessage, contactForm.nextSibling);

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('full-name').value;
            const emailAddress = document.getElementById('email-address').value;
            const phoneNumber = document.getElementById('phone-number').value;
            const message = document.getElementById('message').value;
            const interestedIn = document.getElementById('interested-in').value;

            if (!fullName || !emailAddress || !phoneNumber || !message || !interestedIn) {
                validationMessage.textContent = 'Mohon lengkapi semua data yang diperlukan.';
                return;
            }

            validationMessage.textContent = '';
            alert('Formulir berhasil dikirim! Kami akan menghubungi Anda 1x24 jam.');
            
            console.log('Data yang dikirim:', {
                nama: fullName,
                email: emailAddress,
                telepon: phoneNumber,
                pesan: message,
                tertarik_pada: interestedIn
            });

            contactForm.reset();
        });
    }
});