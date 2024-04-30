import Image from 'next/image';

export default function ImagePlaceholder() {
  return (
    <Image
      src="/product-img-skeleton.svg"
      alt="Image Placeholder"
      width={200}
      height={150}
      priority
    />
  );
}
