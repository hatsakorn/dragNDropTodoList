// import Image from "next/image";
import { ICard } from "@/app/Interfaces/components/Card";

export default function Card(props: ICard) {
  const { children } = props;
  return (
    <div className="w-32 p-2">
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
