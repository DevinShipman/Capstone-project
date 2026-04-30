document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      buttons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      products.forEach(product => {
        const category = product.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          product.style.display = "flex";
        }
        else {
          product.style.display = "none";
        }
      });
    });
  });
});

// Alert on contact page load
if (document.title.includes("Contact")) {
  alert("Have a question? Fill out the form below and I'll get back to you as soon as possible!");
}

// Form validation
function validateForm() {
  const firstName = document.getElementById("First-Name").value.trim();
  const lastName = document.getElementById("Last-Name").value.trim();
  const email = document.getElementById("Email").value.trim();
  const message = document.getElementById("Message").value.trim();

  if (firstName === "") {
    alert("Please enter your first name.");
    return false;
  }
  if (lastName === "") {
    alert("Please enter your last name.");
    return false;
  }
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (message === "") {
    alert("Please enter a message before submitting.");
    return false;
  }

  alert("Thank you, " + firstName + "! Your message has been sent successfully. We will get back to you soon.");
  return true;
}