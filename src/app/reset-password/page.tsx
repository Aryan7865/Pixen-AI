import React from 'react'
import AuthImg from '@/public/Abstract Curves and Colors.jpeg'
import Image from 'next/image'
import { Logo } from '@/components/Logo'
import ChangePasswordForm from '@/components/account/ChangePasswordForm'

const ResetPasswordPage = async () => {

 
    
  return (
    <main className='h-full md:h-screen grid grid-cols-1 md:grid-cols-2 relative'>
        <div className='relative w-full hidden md:flex flex-col bg-muted p-10 text-primary-foreground'>
<div className='w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10' />
<div className='w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10' />


            <Image src={AuthImg} alt="login Image" fill className='w-full h-full object-cover' priority />
            <div className='relative z-20 flex items-center'>
            <Logo />
            </div>
            
            <div className='relative z-20 mt-auto'>
                <blockquote className='space-y-2'>
                    <p className='text-lg'>
                    &ldquo;Pictoria AI is a game changer for me. I have been able to generate high quality professional headshots within minutes. It has saved me countless hours of work and cost as well.&rdquo;
                    </p>
                    <footer className='text-sm'>David S.</footer>
                </blockquote>
            </div>

        </div>
        <div className='relative flex flex-col items-center justify-start md:justify-center p-8 sm:p-12 md:p-8 h-ful w-full'>
        <div className="relative md:absolute top-none md:top-8 px-0 md:px-8 w-full flex items-center justify-start ">
          <div className="relative z-20 items-center text-lg font-medium flex md:hidden">
            <Logo />
            </div>
          </div>

            <div className='max-w-xl sm:w-[350px] mt-12 md:mt-0 mx-auto'>
            <ChangePasswordForm />
            </div>
        </div>
    </main>
  )
}

export default ResetPasswordPage