document.querySelectorAll("div.card").forEach((card, _, cards) => {
  card.addEventListener("click", () => {
    cards.forEach((card_) => {
      card_ !== card
        ? card_.classList.remove("focus")
        : card_.classList.toggle("focus");
    });
  });
});
