import { useSection } from "deco/hooks/useSection.ts";
export interface Props { count?: number }
export default function ContadorTesteUnico({ count = 0 }: Props) {
  return (
    <section>
      <button
        hx-get={useSection({ props: { count: count - 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
      >-</button>
      <span>{count}</span>
      <button
        hx-get={useSection({ props: { count: count + 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
      >+</button>
    </section>
  );
}