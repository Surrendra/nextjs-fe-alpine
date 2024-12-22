import Image from "next/image";
import Logo from "@/assets/images/logos/logo.svg";

export default function Home() {
  return (
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <div
        id="Top-Bar"
        className="flex items-center justify-between px-4 mt-[60px] z-10"
      >
        <Image
          src={Logo}
          width={126}
          height={40}
          className="flex shrink-0 w-[126px]"
          alt="icon"
        />
        <div className="flex items-center justify-end gap-3">
          <div className="text-right">
            <p className="text-sm leading-[21px] text-alpina-grey">
              Your Location
            </p>
            <p className="font-semibold">Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
