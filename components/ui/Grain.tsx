export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[126] opacity-[0.05] mix-blend-multiply"
      style={{
        backgroundImage: "url(/textures/grain.svg)",
        backgroundSize: "180px 180px",
      }}
    />
  );
}
