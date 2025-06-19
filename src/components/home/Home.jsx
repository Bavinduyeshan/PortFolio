import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between">
      <header className="w-full bg-transparent py-4">
        <nav className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Tutorial</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Figma</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Motion</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Web Design</a>
        </nav>
      </header>
      <main className="flex flex-col items-center text-center py-10">
        <h1 className="text-4xl font-bold text-orange-500">After 🔥</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-2">Portfolio website design 🎨</h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h3 className="text-xl font-semibold text-gray-900">Hello I'm Zaid Akhtar</h3>
          <p className="text-gray-600 mt-2">A Web Designer</p>
          <p className="text-gray-600 mt-1">Super dope at what I do, trust me! Websites that not only look great but deliver.</p>
          <div className="mt-4 space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Contact Me!</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">See My Work</button>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-2 rounded">Collections</div>
            <div className="bg-gray-100 p-2 rounded">Storytelling</div>
            <div className="bg-gray-100 p-2 rounded">Healthy Life</div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-transparent py-4 text-center">
        <p className="text-gray-600">© 2025 All rights reserved</p>
        <a href="https://webtdesign.com" className="text-blue-500 hover:text-blue-700 mt-2 block">webtdesign.com 🚀</a>
      </footer>
    </div>
  )
}
