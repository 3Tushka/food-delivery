import React from 'react'
import images from '../../constants/images'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../../../firebase.config'

import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const login = async () => {
        const response = await signInWithPopup(firebaseAuth, provider)
        console.log(response);
    };

    return (
        <header className="fixed z-50 w-screen p-6 px-16 ">

            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={'/'} className=" flex items-center gap-2 ">
                    <img src={images.logo} alt="logo" className='w-10 object-cover ' />
                    <p className="text-headingColor text-xl font-bold"> City </p>
                </Link>

                <div className="flex items-center gap-10">
                    <ul className="flex items-center gap-10">
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-150 transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>

                    <div className="relative flex items-center justify-center">
                        <MdShoppingBasket className='text-textColor  text-2xl ml-7 cursor-pointer' />
                        <div className="absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold ">2</p>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.img whileTap={{
                            scale:
                                0.6
                        }}
                            src={images.avatar}
                            alt="user-avatar"
                            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full '
                            onClick={login} />
                    </div>
                </div>
            </div>

        </header>
    )
}
