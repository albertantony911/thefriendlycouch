document.addEventListener("DOMContentLoaded", function() {
  const scrollGroup = document.getElementById("scrollGroup");

  // Number of tiny cards
  const numCards = 10;

  // Create tiny cards with tick marks
  for (let i = 0; i < numCards; i++) {
    const tinyCard = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    tinyCard.setAttribute("x", i * 20); // Adjust spacing
    tinyCard.setAttribute("y", 10);
    tinyCard.setAttribute("width", 15);
    tinyCard.setAttribute("height", 20);
    tinyCard.setAttribute("fill", "#3498db"); // Adjust color
    tinyCard.setAttribute("opacity", "0");

    const tickMark = document.createElementNS("http://www.w3.org/2000/svg", "line");
    tickMark.setAttribute("x1", i * 20 + 2);
    tickMark.setAttribute("y1", 15);
    tickMark.setAttribute("x2", i * 20 + 8);
    tickMark.setAttribute("y2", 25);
    tickMark.setAttribute("stroke", "#fff"); // Adjust color
    tickMark.setAttribute("stroke-width", "2");
    tickMark.setAttribute("opacity", "0");

    tinyCard.appendChild(tickMark);
    scrollGroup.appendChild(tinyCard);
  }

  // Animation
  const tl = gsap.timeline({ repeat: -1 });

  tl.to("#scrollGroup", { duration: 2, x: -180 * numCards, ease: "linear" });
  tl.to("#scrollGroup rect", { duration: 0.5, opacity: 1, stagger: 0.1 });
  tl.to("#scrollGroup rect", { duration: 0.5, opacity: 0, stagger: 0.1 });
});
