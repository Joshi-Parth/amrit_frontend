'use client';
// export const metadata = {
//   title: 'Home - Simple',
//   description: 'Page description',
// }
import { useState, useEffect } from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <FeaturesBlocks /> */}
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
