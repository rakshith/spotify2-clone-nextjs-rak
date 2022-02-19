import React from 'react'
import {
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'

function Sidebar() {
  const { data: session, status } = useSession()

  console.log(session, status)
  return (
    <div className="h-screen overflow-y-scroll border-r border-gray-900 p-5 text-sm text-gray-500 scrollbar-hide">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Like Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  )
}

export default Sidebar
