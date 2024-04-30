import Image from 'next/image';

export default function FavoriteOutlineIcon() {
  return (
    <Image
      src="/favorite-outline.svg"
      alt="Favorite Outline Icon"
      width={23}
      height={23}
      priority
    />
  );
}