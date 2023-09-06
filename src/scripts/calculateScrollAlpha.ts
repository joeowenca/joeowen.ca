export default function calculateScrollAlpha():number {
  const threshold = 3;
  const scrollAlpha = Math.min(
    window.scrollY / (window.innerHeight / threshold),
    1,
  );

  return parseFloat(scrollAlpha.toFixed(2));
}