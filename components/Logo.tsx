import Image from "next/image";

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <>
      <Image
        alt="Logo LOMA Creativity Studio"
        className={`${className} object-contain dark:hidden`}
        src="/LOMA-logo.svg"
        width={36}
        height={40}
      />
      <Image
        alt="Logo LOMA Creativity Studio"
        className={`${className} object-contain hidden dark:block`}
        src="/LOMA-logo-blanc.svg"
        width={36}
        height={40}
      />
    </>
  );
}
