'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/navigation"
import{FaHamburger,FaSearch} from 'react-icons/fa'
import{FaBowlFood} from 'react-icons/fa6'

const Navbar = () => {
    const [searchToggle,setSearchToggle] = useState(false)
    const [searchRecipe,setSearchRecipe] = useState('')
    const router = useRouter()

    const handleSubmit = (e) =>{
        e.preventDefault()
         const searchCapitalized = searchRecipe.charAt(0).toUpperCase() + searchRecipe.slice(1)
        router.push(`/${searchCapitalized}`)
        console.log(searchRecipe)
        setSearchRecipe('')
    }
  return (
    <nav className='sticky top-0 w-full drop-shadow-lg z-20'>
        <div className='bg-green-800 text-white flex justify-between p-3 text-lg md:hidden'>
            <Link href={'/'}>
                <div className='flex justify-center items-center'>
                <FaBowlFood className='mr-2'/>
                <h1>Recipes web app</h1>
            </div>
            </Link>
            <FaHamburger onClick={() => setSearchToggle(!searchToggle)} className='text-2xl cursor-pointer'/>
        </div>
          <div className='bg-green-800 text-white md:flex justify-between p-3 text-lg hidden '>
            <Link href={'/'}>
                <div className='flex justify-center items-center'>
                <FaBowlFood className='mr-2'/>
                <h1>Recipes web app</h1>
            </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar