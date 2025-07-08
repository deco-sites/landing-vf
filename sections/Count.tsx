import { useSection } from "deco/hooks/useSection.ts";

export default function Count({ count = 0 }: { count: number }) {
  return (
    <div class="container h-screen flex items-center justify-center gap-4">
      <button
        hx-get={useSection({ props: { count: count - 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
        type="button"
      >
        <span>-</span>
      </button>
      <span>{count}</span>
      <button
        hx-get={useSection({ props: { count: count + 1 } })}
        hx-target="closest section"
        hx-swap="outerHTML"
        class="btn btn-sm btn-circle btn-outline no-animation"
        type="button"
      >
        <span>+</span>
      </button>
    </div>
  );
}