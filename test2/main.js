//Data and img counter

function countImages() {
		const images = document.querySelectorAll('.item');
		return images.length;
	}
	function formatDate(date) {
		const options = { 
			day: '2-digit', 
			month: '2-digit', 
			year: 'numeric', 
			hour: '2-digit', 
			minute: '2-digit' 
		};
		return date.toLocaleDateString('ua-Ua', options);
	}

const imageCountElement = document.getElementById('counter');

const currentDate = new Date();

const numberOfImages = countImages();

const formattedDate = formatDate(currentDate);

imageCountElement.textContent = `Количество картинок: ${numberOfImages}, ${formattedDate}`;

//gallery

const images = document.querySelectorAll('.gallery__img');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');
const popupImage = document.getElementById('popup-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        popupImage.setAttribute('src', src);
        overlay.style.display = 'flex';
		popup.classList.add('active');
    });
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});