document.getElementById('contactForm').addEventListener('submit', SendMail);

function SendMail(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message_me = document.getElementById('message_me').value;

  if (name === '' || email === '' || subject === '' || message_me === '') {
    alert('Please fill in all the fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }


  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message_me: message_me
  };

  emailjs.send('service_kxzjysv', 'template_rjeszzb', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully.');
      document.getElementById('contactForm').reset(); // Clear the form
    },
    (error) => {
      console.log('FAILED...', error);
      alert('Failed to send your message.');
    }
  );
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}


