import React, {useState, useEffect} from 'react'

import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
   setTimeout(() => {
      setIsOpen(true)
   }, 3000)
  }, [])
  

  return (
   <Layout>
    <div className='w-60 h-20'>
    <Button
       id="show-popup"
       label="Show Popup"
       onClick={() => setIsOpen(true)}
    />
    </div>
    <Modal isOpen={isOpen} onClick={() => setIsOpen(false)}>
      <div className='flex justify-center items-center w-96 h-80'>
          This is your Popup!
      </div>
    </Modal>
   </Layout>
  )
}

export default Home