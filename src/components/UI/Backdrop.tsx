import { type ReactNode } from 'react'

type BackdropProps = {
  children: ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
  return (
    <div className='z-50 p-5 backdrop-blur-[10px] h-full w-full flex flex-col fixed'>{children}</div>
  )
}

export default Backdrop