import { Noto_Serif, Poppins } from 'next/font/google';

// Title
export const notoSerif = Noto_Serif({ subsets: ['latin'], /*weight: '400'*/})

// Texts
export const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin']})