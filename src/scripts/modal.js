// JavaScript for the modal
function openModal() {
  document.getElementById("hyperlink-modal").classList.add("active");
}

function closeModal() {
  document.getElementById("hyperlink-modal").classList.remove("active");
}

// Use Intersection Observer to detect when the element is in view
const targetElement = document.querySelector(
  ".project-template-third-sec-container"
);

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    openModal(); // Element is in view, open the modal
    observer.unobserve(targetElement); // Stop observing once triggered
  }
});

observer.observe(targetElement);
