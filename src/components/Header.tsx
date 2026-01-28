import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="px-5 py-4 flex items-center gap-5">
        <div className="w-20 h-20 relative flex-shrink-0">
          <Image
            src={withBasePath("/KBC_icon2.png")}
            alt="KBC Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-[24px] font-bold tracking-tight text-foreground">청년부</h1>
          <p className="text-text-secondary text-[14px] mt-0.5">
            San Angelo Korean Baptist Church
          </p>
        </div>
      </div>
    </header>
  );
}
