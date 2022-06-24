import { BsGithub } from 'react-icons/bs'

export default function App() {
  return (
    <div className='flex h-full'>
      <div className='m-auto flex flex-col space-y-1'>
        <h1 className='text-4xl'>
          <span className='dark:text-blue-nordic text-blue-nordic-100 bg-blue-no'>Nordic</span> Keyboard
        </h1>
        <span className='dark:text-gray-400 text-gray-600'>Under development...</span>
      </div>
      <div className='fixed bottom-0 right-0 p-4 hover:text-blue-nordic'>
        <a className='mx-auto hover:underline font-light'
          href='https://github.com/nordickey'
          title='Open Github profile in a new tab'
          target='_blank'>
          <BsGithub />
        </a>
      </div>
    </div>
  )
}
