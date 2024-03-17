import React from 'react'

const SearchBar = () => {
  return (
    <form className='w-[800px] relative py-6'>
      <div className='relative'>
        <input type="search" placeholder='Keyword: [Nama Pengguna/Komunitas] [Perguruan Tinggi] [Jurusan] [Topik]' className='w-full p-4
        rounded-md bg-slate-200' />
      </div>
      <button
          className='ml-2 p-4 bg-slate-400 rounded-md text-white'
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
        >
        Cari
      </button>
    </form>
  )
}

export default SearchBar