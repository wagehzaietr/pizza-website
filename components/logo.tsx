import Image from 'next/image';



export const LogoIcon = () => {
    return (
          <Image priority loading='eager' src='/header-logo.png' alt='logo image' width={35} height={35} className=' rounded-full object-contain'/>
    )
}

