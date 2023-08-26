export default function calculateScrollAlpha() {
  return Math.min(
    window.scrollY / (window.innerHeight / 3),
    1,
  ).toFixed(2);
}