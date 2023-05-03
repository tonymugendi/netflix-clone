import React, { useCallback, useState } from 'react'
import axios from 'axios';
import Input from '@/components/input'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from 'react-icons/fa'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const router = useRouter()

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
  }, [])


  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      })

      router.push('/');

    } catch (error) {
      console.log(error)
    }
  }, [email, password, router])


  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });

      login()

    } catch (error) {
      console.log(error)
    }

  }, [email, name, password, login])

  return (
    <div className="relative h-full w-full  bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cober " >
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/images/logo.png' alt='Logo' className='h-12' />
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 self-center p-16 mt-2 lg:w-2/6 lg:max-md rounded w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === "register" ? (
                <Input
                  label='Username'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  id='name'
                  value={name}
                />
              ) : null}

              <Input
                label='Email'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {variant === "register" ? "Register" : "Login"}
            </button>
            <div className='flex flex-row items-center justify-center gap-4 mt-8'>
              <div
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FcGoogle />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/' })}
                className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FaGithub />
              </div>

            </div>



            <p className='text-neutral-500 mt-12'>
              {variant === "login" ? "New to Netflix?" : "Already have an account?"}
              <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth