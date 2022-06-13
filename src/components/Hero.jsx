function Hero() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='font-Yeseva text-5xl font-bold'>
            React App with TailwindCSS
          </h1>
          <p className='py-6'>
            A abrebones template that integrates TailwindCSS and Daisy UI with
            Create React App. It also includes React Router v6 as well as a
            basic Navbar & Hero component, provided by DaisyUI.
          </p>
          <a
            href='https://daisyui.com'
            target='_blank'
            alt='DaisyUI'
            rel='noreferrer'
          >
            <button className='btn btn-secondary'>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Hero
