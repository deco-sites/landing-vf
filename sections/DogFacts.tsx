import type { DogFacts } from "../loaders/DogFactsLoader.ts";

// Tipo de Props que será configurado no Admin do deco.cx
export interface Props {
  title: string;
  dogFacts?: DogFacts;
}

export default function DogFactsSection(
  { title, dogFacts }: Props,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts?.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}