import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          TailwindCSS Template
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'></div>
      <div className='navbar-end'>
        <a
          href='https://daisyui.com'
          target='_blank'
          alt='DaisyUI'
          rel='noreferrer'
        >
          <button className='btn btn-primary'>Get Started</button>
        </a>
      </div>
    </div>
  )
}
export default Navbar
