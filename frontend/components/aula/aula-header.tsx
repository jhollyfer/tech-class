interface AulaHeaderProps {
  modulo: string;
  titulo: string;
  subtitulo: string;
}

export function AulaHeader({ modulo, titulo, subtitulo }: AulaHeaderProps) {
  return (
    <header className="relative pt-12 pb-16 px-6 text-center">
      <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-6">
        {modulo}
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl mx-auto mb-4">
        {titulo}
      </h1>
      <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
        {subtitulo}
      </p>
    </header>
  );
}
