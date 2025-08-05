import { useSection } from "deco/hooks/useSection.ts";

export default function ContadorHtmx({ count = 0 }) {
  return (
    <section class="flex gap-4 items-center justify-center">
      <button
        hx-get={useSection({ props: { count: count - 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn"
      >
        -
      </button>
      <strong>{count}</strong>
      <button
        hx-get={useSection({ props: { count: count + 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn"
      >
        +
      </button>
    </section>
  );
}