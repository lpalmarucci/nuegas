import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center w-full gap-2 m-4 cursor-pointer">
      <Image src="/assets/logo.png" alt="Logo" width={34} height={34} priority />
      <h2 className="text-2xl font-semibold">Nuegas</h2>
    </div>
  );
}
