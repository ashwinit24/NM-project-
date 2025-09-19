// Toggle project details on click or keyboard enter

document.querySelectorAll('#projects .project').forEach(project => {

  project.addEventListener('click', () => {

    const details = project.querySelector('.project-details');

    details.style.display = details.style.display === 'block' ? 'none' : 'block';

  });

  project.addEventListener('keydown', e => {

    if (e.key === 'Enter' || e.key === ' ') {

      e.preventDefault();

      project.click();

    }

  });

});

// Handle form submit

function handleSubmit(event) {

  event.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const message = document.getElementById('message').value.trim();

  if(name && email && message) {

    alert(`Thank you, ${name}! Your message has been received.`);

    event.target.reset();

  } else {

    alert('Please fill out all fields.');

  }

}