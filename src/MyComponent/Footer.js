import React from 'react'

const Footer = () => {
  let footer = {
    position: 'relative',
  left: '0',
  bottom: '0',
  width: '100%',
  color: 'white',
  'min-height': '20vh'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footer}>
      <p className='text-center'>
       Copyright &copy; || All Right Are Reserve My TodoList.com
      </p>
    </footer>
  )
}

export default Footer
