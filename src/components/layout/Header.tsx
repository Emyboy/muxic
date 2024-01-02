'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { HiMagnifyingGlass, HiMiniUserCircle } from 'react-icons/hi2'
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { googleProvider } from '@/firebase';


type Props = {}

export default function Header({ }: Props) {
    const [keyword, setKeyword] = useState('')
    const router = useRouter();

    const auth = getAuth();
    const user = auth.currentUser;

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/?q=${keyword}`)
    };

    const onAuth = async () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <>
            <header className='bg-fg h-[80px] fixed left-0 right-0 top-0 flex items-center px-[20px] justify-between gap-[50px] ml-[300px] z-50 shadow-lg'>

                <Link href={`/`} className='text-theme text-3xl font-bold'>
                    Muxic
                </Link>

                <form className='bg-black flex p-3 rounded-full w-[40%] items-center gap-4' onSubmit={onSubmit}>
                    <HiMagnifyingGlass className='text-gray-500' size={25} />
                    <input
                        className='flex-1 bg-inherit outline-none text-gray-400'
                        placeholder='Search song here...'
                        onChange={e => setKeyword(e.target.value)}
                    />
                </form>
                <button className='text-gray-500' onClick={user ? () => { } : onAuth}>
                    {
                        user ? <img className='h-9 w-9 rounded-full' src={user.photoURL as string} alt='user' /> : <HiMiniUserCircle size={45} />
                    }
                </button>
            </header>
        </>
    )
}