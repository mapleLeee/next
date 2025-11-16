import Image from 'next/image'
import React from 'react'
import MainPage from "@/app/components/m_main";

export const metadata = {
  title: 'Home',
  description: '我的圖愛上',
}

export default function page() {
  return (
    <MainPage imgUrl={'/image/2.jpg'} alt="Main Background" content="Welcome to My World" />
  )
}
