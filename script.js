// Requests (cats)
document.getElementById("searchButton").addEventListener("click", function () {
  window.location.href = "https://http.cat/images/204.jpg";
});

document.getElementById("cartButton").addEventListener("click", function () {
  window.location.href = "https://http.cat/images/503.jpg";
});

// Quantity Increment/Decrement
document.getElementById("increment").addEventListener("click", () => {
  const quantityInput = document.getElementById("quantity");
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById("decrement").addEventListener("click", () => {
  const quantityInput = document.getElementById("quantity");
  if (quantityInput.value > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

// Magnifier
document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".col-md-5 img");
  const magnifier = document.createElement("div");
  magnifier.classList.add("magnifier");
  document.body.appendChild(magnifier);

  img.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    magnifier.style.backgroundImage = `url('${img.src}')`;
    magnifier.style.backgroundPosition = `${x}% ${y}%`;
    magnifier.style.left = `${e.clientX - 50}px`;
    magnifier.style.top = `${e.clientY - 50}px`;
    magnifier.style.display = "block";
  });

  img.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
  });
});

document
  .getElementById("search-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const searchBox = document.getElementById("search-box");
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
      searchBox.style.display = "block";
    } else {
      searchBox.style.display = "none";
    }
  });

function incrementHelpful(button) {
  if (button.getAttribute("data-clicked") === "true") return;

  let countSpan = button.querySelector(".helpful-count");
  let currentCount = parseInt(countSpan.textContent);

  countSpan.textContent = currentCount + 1;
  button.setAttribute("data-clicked", "true");
  button.classList.add("disabled");
}
