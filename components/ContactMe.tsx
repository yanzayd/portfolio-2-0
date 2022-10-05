import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from 'react-hook-form'


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {}


function ContactMe({ }: Props) {
    const { register, handleSubmit, formState: { errors} } = useForm <Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:nelsonnyzbedel@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} 
        (${formData.email}) `
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                contact
            </h3>

            <div className='flex flex-col mt-28 sm:mt-24  space-y-5'>
                <h4 className='text-lg font-semiblold text-center'>
                    I have got just what you need. {" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>

                <div className='space-y-2'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
                        <p className='text-md sm:text-xl'>+243 979 300 230</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <DevicePhoneMobileIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
                        <p className='text-md sm:text-xl'>+243 821 847 071</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse' />
                        <p className='text-md sm:text-xl'>68 Developer Lane</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
                        <p className='text-md sm:text-xl'>nelsonnyzbedel@gmail.com</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput w-auto' type="text" />

                    <textarea {...register('message')} placeholder='Message' className='contactInput w-auto h-auto' />
                    <button
                        type='submit'
                        className='bg-[#F7AB0A] items-center justify-center py-auto h-10'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe