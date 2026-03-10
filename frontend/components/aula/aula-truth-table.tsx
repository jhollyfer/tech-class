interface AulaTruthTableProps {
  headers: string[];
  rows: string[][];
}

export function AulaTruthTable({ headers, rows }: AulaTruthTableProps) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-[var(--color-border)]">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="bg-[var(--color-surface)]">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-[var(--color-muted)] font-semibold uppercase tracking-wider text-xs">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[var(--color-border)]">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5">
                  {cell === "V" || cell === "1" ? (
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-[var(--color-success)]/15 text-[var(--color-success)]">
                      {cell}
                    </span>
                  ) : cell === "F" || cell === "0" ? (
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-[var(--color-error)]/15 text-[var(--color-error)]">
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
