function openModal(event) {
  event.preventDefault(); // Prevent the default link behavior

  var modal = document.getElementById("registrationModal");
  modal.style.display = "block";

  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeModal() {
  var modal = document.getElementById("registrationModal");
  modal.style.display = "none";

  document.body.style.overflow = "auto"; // Restore scrolling
}
