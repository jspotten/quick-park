export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Cards from '@/components/card'
import Blocks from '@/components/blocks'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'


export default function Home() {
  return (
    <>
      <Hero />
      <Blocks />
      <Cards />
      <Testimonials />
    </>
  )
}
