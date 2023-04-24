import React, { useCallback, useState } from 'react'
import Input from '@/components/input'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
  }, [])



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
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {variant === "register" ? "Register" : "Login"}
            </button>
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