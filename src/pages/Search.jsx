import React, { useState, useContext } from 'react'
import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const { playWithId } = useContext(PlayerContext)

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='p-6 text-white'>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search songs..."
        className='w-full p-2 rounded bg-[#242424]'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Results */}
      <div className='mt-5 flex flex-col gap-2'>
        {filteredSongs.map((song) => (
          <div
            key={song.id}
            onClick={() => playWithId(song.id)}
            className="flex items-center gap-4 p-2 hover:bg-[#242424] rounded cursor-pointer"
          >
            <img className='w-12 h-12 object-cover' src={song.image} alt="" />
            <p>{song.name}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Search