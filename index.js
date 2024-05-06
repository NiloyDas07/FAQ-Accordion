class Accordion {
  constructor(accordionHead) {
    this.accordionHead = accordionHead;
    this.accordionBodyId = accordionHead.getAttribute("aria-controls");
    this.accordionBody = document.getElementById(this.accordionBodyId);
    this.expanded = accordionHead.getAttribute("aria-expanded") === "true";

    this.accordionHead.addEventListener("click", () => {
      this.expanded = !this.expanded;
      this.accordionHead.setAttribute(
        "aria-expanded",
        this.expanded.toString()
      );
    });
  }
}

const accordions = document.querySelectorAll(".question");
const accordionHeads = [
  accordions.forEach((accordionHead) => new Accordion(accordionHead)),
];
accordionHeads.forEach(
  (accordionHead) => (accordionHead.accordions = accordionHeads)
);
