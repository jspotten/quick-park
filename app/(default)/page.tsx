'use client'

import Blocks from '@/components/blocks'
import Confirm from '@/components/confirm'
import { Dispatch, useState, SetStateAction } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const goConfirm = () => {
    setShowModal(true);
  }

  const goBack = () => {
    setShowModal(false);
  }

  return (
    <>
      {(showModal) ? <Confirm goBack={goBack}/> : <Blocks goConfirm={goConfirm}/>}
    </>
  )
}
