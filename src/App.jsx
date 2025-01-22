import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './assets/Image/BG.jpg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

<div className="flex flex-col lg:flex-row gap-8 p-8 bg-white">
  {/* Left Section */}
  <div className="lg:w-2/3">
    <div className="relative">
      <img src={Image} alt="Modern Minimalist Living Room" className="rounded-lg w-full object-cover" />
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow">
        <p className="font-semibold text-sm">Gorgeous Interior</p>
        <h1 className="text-4xl font-bold">Modern Minimalist</h1>
      </div>
    </div>
  </div>
  {/* Right Section */}
  <div className="lg:w-1/3 flex flex-col gap-6">
    {/* Card 1 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <p className="text-sm font-semibold uppercase text-gray-600">Aesthetic</p>
      <h2 className="text-2xl font-bold mt-2">
        Into a gallery of elegance
      </h2>
      <p className="mt-4 text-gray-600">
        Aesthetic furniture where every piece tells a story of style.
      </p>
    </div>
    {/* Card 2 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <p className="text-sm font-semibold uppercase text-gray-600">Best Furniture</p>
      <h2 className="text-2xl font-bold mt-2">
        Indulge in the artistry of everyday living
      </h2>
      <p className="mt-4 text-gray-600">
        Transform your space with timeless furniture designs.
      </p>
    </div>
  </div>
</div>


    </>
  )
}

export default App
