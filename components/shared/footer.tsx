'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className='bg-black text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-orange-700 w-full rounded-none'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back To Top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-content gap-3 text-sm'>
          <Link href='/page/conditions-of-use'>Conditions of Use</Link>
          <Link href='/page/privacy-policy'>Privacy Notice</Link>
          <Link href='/page/help'>Help</Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p> &copy; 2024-2025, {APP_NAME}, Inc. or its affiliates </p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          123, Main Street, Cainta, Rizal, PH, ZIP 123 | +6391231231123
        </div>
      </div>
    </footer>
  )
}
