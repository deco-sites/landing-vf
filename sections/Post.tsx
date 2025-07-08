import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { VideoWidget } from "apps/admin/widgets.ts";
import { Section } from "deco/blocks/section.ts";

export interface Props {
  /**
   * @title Post image.
   */
  photo?: ImageWidget;
  /**
   * @title Post body.
   * @format textarea
   */
  post: string;
  /** 
   * @title Publish date;
   * @format datetime;
  */
  datetime: string;
  /**
   * @title Post title
   */
  title: string;
  /** 
   * @title Title Video
   * */
  video?: VideoWidget;
  
  /**
   * @title Section
   */
  innerSection?: Section;

  layout?: "Grid" | "Table" | "List";
  
}

export default function Post({ title, photo, post, datetime }: Props) {
  return (
     <div class="flex flex-col justify-center items-center">
      {photo && (
        <Image
          src={photo}
          alt={`${title} image`}
          height={400}
          width={500}
          class="rounded"
        />
      )}
      <h1 class="font-bold text-lg">{title}</h1>
      <p>Published at: {datetime}</p>
      <p>This is an example section</p>
      <p>{post}</p>
    </div>
  );
}