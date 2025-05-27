document.addEventListener("DOMContentLoaded", () => {
    const filterLinks = document.querySelectorAll(".sidebar ul li a");
    const cards = document.querySelectorAll(".tutorial-card");
  
    filterLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
  
        // Remove active class from all links
        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
  
        const category = link.getAttribute("data-filter");
  
        cards.forEach(card => {
          const cardCat = card.getAttribute("data-category");
          if (category === "all" || cardCat === category) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  