import Image from 'next/image';
import { cn } from '../lib/utils'


export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
          <Image src='/header-logo.png' alt='logo image' width={35} height={35} className=' rounded-full'/>
    )
}

