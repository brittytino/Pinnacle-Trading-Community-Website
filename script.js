let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxXG-UXI66Q-GaB2KxCJMZanu3RTgRof1SYH_Hsr3dcmeIB0UKDYx91WKX7DElkSGlH/exec'

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      const messages = [
        "Boom! Your message is en route to us!",
        "High five! Your message is zooming through the internet!",
        "Message sent! Time to celebrate!",
        "Form submitted! Your virtual carrier pigeon is on its way!",
        "You did it! Your message is off on a digital adventure!"
      ];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      alert(randomMessage);
      window.location.reload();
    } else {
      throw new Error('Oops! Something went wrong. Please try again later.');
    }
  })
  .catch(error => console.error('Error!', error.message));
});
