"use client";

import { useTheme } from '@/context/theme_context';
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/10 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white dark:border-opacity-20 dark:border-[0.125rem]"
      onClick={toggleTheme}
    > 
    {
      theme === 'light' ? ( <BsSun /> ) : ( <BsMoon /> )
    }
    </button>
  )
}
