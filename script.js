const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  
  const mailtoLink = `mailto:youremail@example.com?subject=New Message from ${name} (${email})&body=${message}`;
  
  window.location.href = mailtoLink;
});