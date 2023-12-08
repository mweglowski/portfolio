import { type ReactNode } from 'react'

type EmphasisProps = {
  children: ReactNode;
}

const Emphasis = ({ children }: EmphasisProps) => {
  return (
    <span className='emphasis'>{children}</span>
  )
}

export default Emphasis