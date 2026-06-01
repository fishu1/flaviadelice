export default function ProductCard({
  nume,
  imagine,
  introducere,
  link,
}: {
  nume: string;
  imagine: string;
  introducere: string;
  link: string;
}) {
  return (
    <div className="product-card">
      <img src={imagine} alt={nume} style={{ width: "100%", maxWidth: 300 }} />
      <h3>{nume}</h3>
      <p>{introducere}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Vezi oferta →
      </a>
    </div>
  );
}
