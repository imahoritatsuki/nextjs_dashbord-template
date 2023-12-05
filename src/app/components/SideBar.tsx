import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <aside className="bg-gray-100 text-white border rounded-xl h-full">
      <div className='px-5 text-center'>
        <div className="p-4 px-5 ">
          LOGO
        </div>
      </div>
      <nav className='my-5 p-5'>
        <ul>
          <li className="px-2 py-3rounded-xl">
            <Link href="/">
              <div className='flex items-center' >
                <div className='p-2 border-none rounded-xl flex-none bg-white text-black shadow-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className='flex-1 ml-2 text-gray-700 '>
                  ホーム
                </p>
              </div>
              
            </Link>
          </li>
          {/* 他のナビゲーションリンクを追加 */}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar