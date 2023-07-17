"use client"
import { useRouter } from 'next/navigation'
import { ChangeEvent, FC,FormEvent,useState } from 'react'

const Home = () =>{

  const [value,setValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (event : FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    //console.log(value)
    router.push(`/${value}`)

    
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-4xl font-bold'>Prediction App</h1>
     
     <section className='mt-24 text-xl'>
      <form onSubmit={handleSubmit}>
      <label>Enter Your Name : </label>
      <input type='text' placeholder='name' id='name' className='w-24 m-2' value={value} onChange={(e : ChangeEvent<HTMLInputElement>)=>{setValue(e.target.value)}}/>
      <button type='submit' className='rounded p-2 bg-indigo-600 text-white hover:bg-indigo-700'>Get Prediction</button>
      </form>
     </section>

    </main>
  )
}
export default Home;