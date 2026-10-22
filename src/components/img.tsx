import { ImageZoom } from "@/components/image-zoom";

export default function Img(props: any) {
  return <ImageZoom {...props} caption={props.alt} />;
}
