"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const blogDesktop = [
  {
    id: 10401,
    src: "/images/myaccount/account_web_1.png",
  },
  {
    id: 10402,
    src: "/images/myaccount/account_web_2.png",
  },
   {
    id: 10403,
    src: "/images/myaccount/account_web_3.png",
  },
   {
    id: 10404,
    src: "/images/myaccount/account_web_4.png",
  },
   {
    id: 10405,
    src: "/images/myaccount/account_web_5.png",
  },
   {
    id: 10406,
    src: "/images/myaccount/account_web_6.png",
  },
   {
    id: 10407,
    src: "/images/myaccount/account_web_7.png",
  },
];

const blogMobile = [
  {
    id: 10408,
    src: "/images/myaccount/account_mob_1.png",
  },
  {
    id: 10409,
    src: "/images/myaccount/account_mob_2.png",
  },
   {
    id: 10410,
    src: "/images/myaccount/account_mob_4.png",
  },
   {
    id: 10411,
    src: "/images/myaccount/account_mob_5.png",
  },
   {
    id: 10412,
    src: "/images/myaccount/account_mob_6.png",
  },
   {
    id: 10413,
    src: "/images/myaccount/account_mob_7.png",
  },
];

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
      <div className="hidden md:block">
        <Button
          onClick={handlePrev}
          disabled={indexUrl === 0}
          variant={"outline"}
          className={cn(
            "w-16 h-16 border-none fixed left-2.5 -50 top-1/2 bg-neutral-800/50 hover:bg-neutral-800/50 active:scale-95",
            indexUrl === 0 && "hidden"
          )}
        >
          <ChevronLeft className="size-10 text-[#357ABD]" />
        </Button>
        {blogDesktop.map((service, index) => (
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
          disabled={indexUrl === blogDesktop.length - 1}
          variant={"outline"}
          className={cn(
            "w-16 h-16 border-none fixed right-2.5 -50 top-1/2 bg-neutral-800/50 hover:bg-neutral-800/50 active:scale-95",
            indexUrl === blogDesktop.length - 1 && "hidden"
          )}
        >
          <ChevronRight className="size-10 text-[#357ABD]" />
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
        {blogMobile.map((service, index) => (
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
          disabled={indexUrl === blogMobile.length - 1}
          variant={"outline"}
          className={cn(
            "w-14 h-14 border-none fixed right-2.5 -50 top-1/2 bg-neutral-800/30 hover:bg-neutral-800/30 active:scale-95 duration-300",
            indexUrl === blogMobile.length - 1 && "hidden"
          )}
        >
          <ChevronRight className="size-10 text-[#056CF2]" />
        </Button>
      </div>
    </div>
  );
}
