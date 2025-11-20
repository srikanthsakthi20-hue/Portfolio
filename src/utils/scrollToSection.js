export const scrollToSection = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    const headerHeight = 70;
    const offset = element.offsetTop - headerHeight;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
};