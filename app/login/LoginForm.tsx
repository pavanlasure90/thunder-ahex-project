"use client"
import React, { useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/inputs/input'
import Button from '../components/Button'
import Link from 'next/link'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineGoogle } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { SafeUser } from '@/types'

// interface LoginFormProps{ 
//   currentUser: SafeUser | null
// }

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: ''
        }
    })

    const router = useRouter()

    // useEffect(()=>{
    //   if(currentUser){
    //     router.push('/')
    //     router.refresh()
    //   }
    // }, [])

    const onSubmit:SubmitHandler <FieldValues> = (data)=>{
        setIsLoading(true)
        signIn('credentials', {
          ...data,
          redirect: false
        }).then((callback)=>{
          setIsLoading(false)

          if (callback?.ok) {
            router.push("/");
            router.refresh();
            toast.success("Logged In");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        })
    }

    // if(currentUser){
    //   return <p className='text-center'>Logged in. Redirecting...</p>
    // }

    return (
        <>
          <Heading title="Signin for thunder" />  
          <br />
          <hr className='bg-slate-300 w-full h-px ' />
          <br />
        
          <br />
          <Input 
            id='email'
            label='Email'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <br />
          <Input 
            id='password'
            label='Password'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type='password'
          /> <br />

          <Button label= {isLoading ? 'Loading' : 'Login'} onClick={handleSubmit((onSubmit))} /> <br />
          <p className='text-sm'>
            Do not have an account ? 
            <Link className="underline" href='/register'>Sign up</Link>
             <br /> <br />
            <Button 
             outline 
             label='Continue with Google'
             icon={AiOutlineGoogle}
             onClick={()=>{}}
             >

            </Button>
          </p>
        </>
        
    )
}

export default LoginForm
