export interface Props {
  title: string;
}

export default function Post({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
      <p>This is an example section</p>
    </div>
  );
}