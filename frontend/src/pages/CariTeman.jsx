import React from 'react'
import Title from '../components/cariTeman/Title'
import SearchBar from '../components/cariTeman/searchBar'
import Mahasiswa from '../components/cariTeman/Mahasiswa'
import Dosen from '../components/cariTeman/Dosen'
import Praktisi from '../components/cariTeman/Praktisi'
import Komunitas from '../components/cariTeman/Komunitas'

const CariTeman = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
        <div className='m-8 flex flex-col justify-center max-w-lg'>
          <Title/>
          <SearchBar/>
          <Mahasiswa/>
          <Dosen/>
          <Praktisi/>
          <Komunitas/>
        </div>
    </div>
  )
}

export default CariTeman