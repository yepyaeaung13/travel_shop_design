import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/images/home/home.png" alt="" width={1366} height={1000}  className="hidden md:block w-full h-full" />
      <Image src="/images/home/home-mobile.png" alt="" width={600} height={1000} className="md:hidden w-full h-full" />
    </div>
  );
}
