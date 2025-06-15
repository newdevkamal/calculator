 'use client';

import React from 'react'
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '../components/ui/sheet';
import { cn } from '@/lib/utils';
import HeaderAddTodoButton from '@/features/addTodo/components/HeaderAddTodoButton';


export default function Header() {
    const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    ];

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 ">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full ">
          <Link href="/" className="text-xl font-bold tracking-tight">
            MyLogo
          </Link>
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className='hidden md:flex'>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>


        

         {/* Mobile Sidebar Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5s " />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <Link href="/" className="text-lg font-bold tracking-tight ">
                  Todo App
                </Link>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-sm font-medium transition-colors '
                      )}
                    >
                      <div className='hover:bg-blue-300 px-3 py-3'>   
                        {link.name}
                      </div>
                    </Link>
                ))}
                <div className="mt-4 flex justify-center align-center gap-20">
                  <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className=" text-xl font-bold tracking-tight md:hidden">
          Todo App
        </Link>

        <div className='md:hidden'>
            <HeaderAddTodoButton/>
        </div>

        
      </div>
    </header>
  );
}