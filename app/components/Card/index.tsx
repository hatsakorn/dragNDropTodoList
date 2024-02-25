// import Image from "next/image";
import { ICardProps } from "@/app/Interfaces/components/Card";

export default function Card(props: ICardProps) {
  const { children } = props;
  return (
    <div className="w-64 rounded-md p-2">
      <div>
        <div>{children}</div>
        {/* when hover
        <div>Icon svg</div> */}
      </div>
      <div className="flex justify-between">
        <div>Icon</div>
        <div>pImg</div>
        {/* <Image src={""} alt="" /> */}
      </div>
    </div>
  );
}
