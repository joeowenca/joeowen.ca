export default function calculateScroll():number {
  const threshold = 1.5;
  const scroll = Math.min(
    window.scrollY / (window.innerHeight / threshold),
    1,
  );

  return parseFloat(scroll.toFixed(2));
}