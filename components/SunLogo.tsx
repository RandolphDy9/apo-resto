const angles = [45, 90, 135, 180, 225, 270, 315];

export function SunLogo() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="#ffc533">
        <circle cx="20" cy="20" r="8" />
        <path d="M20 1l2.2 8h-4.4z" />
        {angles.map((a) => (
          <path key={a} d="M20 1l2.2 8h-4.4z" transform={`rotate(${a} 20 20)`} />
        ))}
      </g>
    </svg>
  );
}
