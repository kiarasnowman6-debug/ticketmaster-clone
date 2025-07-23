function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function createEvent(e) {
  e.preventDefault();
  const name = document.getElementById('eventName').value;
  const location = document.getElementById('eventLocation').value;
  const date = document.getElementById('eventDate').value;

  const eventList = document.getElementById('eventList');
  const li = document.createElement('li');
  li.textContent = `${name} – ${location} – ${date}`;
  eventList.appendChild(li);

  // Reset
  e.target.reset();
  showPage('events');
}
