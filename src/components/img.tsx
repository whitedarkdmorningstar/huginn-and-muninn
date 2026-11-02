import { ImageZoom } from "@/components/image-zoom";

export default function Img(props: any) {
  return <ImageZoom caption={props.alt || props.title} {...props} />;
}
