"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const activityDesktop = [
  {
    id: 30,
    src: "/images/activity/activity-page.png",
  },
  {
    id: 31,
    src: "/images/activity/activity-detail.png",
  },
];

const activityMobile = [
  {
    id: 32,
    src: "/images/activity/activity-page-mobile.png",
  },
  {
    id: 33,
    src: "/images/activity/activity-detail-mobile.png",
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
          <ChevronLeft className="size-10 text-[#056CF2]" />
        </Button>
        {activityDesktop.map((service, index) => (
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
          disabled={indexUrl === activityDesktop.length - 1}
          variant={"outline"}
          className={cn(
            "w-16 h-16 border-none fixed right-2.5 -50 top-1/2 bg-neutral-800/50 hover:bg-neutral-800/50 active:scale-95",
            indexUrl === activityDesktop.length - 1 && "hidden"
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
          <ChevronLeft className="size-10 text-[#357ABD]" />
        </Button>
        {activityMobile.map((service, index) => (
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
          disabled={indexUrl === activityMobile.length - 1}
          variant={"outline"}
          className={cn(
            "w-14 h-14 border-none fixed right-2.5 -50 top-1/2 bg-neutral-800/30 hover:bg-neutral-800/30 active:scale-95 duration-300",
            indexUrl === activityMobile.length - 1 && "hidden"
          )}
        >
          <ChevronRight className="size-10 text-[#357ABD]" />
        </Button>
      </div>
    </div>
  );
}
