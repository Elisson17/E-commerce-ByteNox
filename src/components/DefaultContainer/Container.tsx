import React from 'react'
import Header from '../Header'

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <>
    <main className='bg-black'>
      <Header />
      <div className='mt-18 p-4'>
        {children}
      </div>
    </main>
    </>
  )
}
