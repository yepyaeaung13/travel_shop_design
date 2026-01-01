"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// const localServiceDesktop = [
//   {
//     id: 1,
//     src: "/images/admin/service-page.png",
//   },
//   {
//     id: 2,
//     src: "/images/admin/service-create-page.png",
//   },
//   {
//     id: 3,
//     src: "/images/admin/service-edit-page.png",
//   }
// ];
// const localServiceMobile = [
//   {
//     id: 10,
//     src: "/images/admin/service-page-mobile.png",
//   },
//   {
//     id: 11,
//     src: "/images/admin/service-create-page-mobile.png",
//   },
//   {
//     id: 12,
//     src: "/images/admin/service-edit-page-mobile.png",
//   }
// ];

export default function Page() {
  const [indexUrl, setIndexUrl] = useState(0);

  const handlePrev = () => {
    setIndexUrl(indexUrl - 1);
  };
  const handleNext = () => {
    setIndexUrl(indexUrl + 1);
  };
  return (
    <div>
      {/* <div className="hidden md:block">
        <Button
          onClick={handlePrev}
          disabled={indexUrl === 0}
          variant={"outline"}
          className={cn(
            "w-16 h-16 border-none fixed left-2.5 -50 top-1/2 bg-neutral-800/50 hover:bg-neutral-800/50 active:scale-95",
            indexUrl === 0 && "hidden"
          )}
        >
          <ChevronLeft className="size-10 text-[#056CF2]" />
        </Button>
        {localServiceDesktop.map((service, index) => (
          <Image
            key={service.id}
            src={service.src}
            alt="photo"
            width={1366}
            height={1000}
            className={cn("w-full h-full", indexUrl !== index && "hidden")}
          />
        ))}
        <Button
          onClick={handleNext}
          disabled={indexUrl === localServiceDesktop.length - 1}
          variant={"outline"}
          className={cn(
            "w-16 h-16 border-none fixed right-2.5 -50 top-1/2 bg-neutral-800/50 hover:bg-neutral-800/50 active:scale-95",
            indexUrl === localServiceDesktop.length - 1 && "hidden"
          )}
        >
          <ChevronRight className="size-10 text-[#056CF2]" />
        </Button>
      </div>
      <div className="md:hidden">
        <Button
          onClick={handlePrev}
          disabled={indexUrl === 0}
          variant={"outline"}
          className={cn(
            "w-14 h-14 border-none fixed left-2.5 -50 top-1/2 bg-neutral-800/30 hover:bg-neutral-800/30 active:scale-95 duration-300",
            indexUrl === 0 && "hidden"
          )}
        >
          <ChevronLeft className="size-10 text-[#056CF2]" />
        </Button>
        {localServiceMobile.map((service, index) => (
          <Image
            key={service.id}
            src={service.src}
            alt="photo"
            width={1366}
            height={1000}
            className={cn("w-full h-full", indexUrl !== index && "hidden")}
          />
        ))}
        <Button
          onClick={handleNext}
          disabled={indexUrl === localServiceMobile.length - 1}
          variant={"outline"}
          className={cn(
            "w-14 h-14 border-none fixed right-2.5 -50 top-1/2 bg-neutral-800/30 hover:bg-neutral-800/30 active:scale-95 duration-300",
            indexUrl === localServiceMobile.length - 1 && "hidden"
          )}
        >
          <ChevronRight className="size-10 text-[#056CF2]" />
        </Button>
      </div> */}
    </div>
  );
}
