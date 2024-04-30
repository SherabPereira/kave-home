import Image from 'next/image';

export default function KaveHomeLogo() {
  return (
    <Image
      src="/kave-home-logo.svg"
      alt="Kave Home Logo"
      width={160}
      height={35}
      priority
    />
  );
}
