import { useState } from 'react';
import 'animate.css';

const App = ()=>{
  const model = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
    mobile: '',
  }

  const errModel = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    username: null,
    mobile: null,
  }

  const [form, setForm] = useState(model)
  const [formError, setFormError] = useState(errModel)

  const validator = (key, value)=>{
    if(!value.length)
    {
      setFormError({
        ...formError,
        [key]: `${key} field is required`
      })
    }
    else {
      setFormError({
        ...formError,
        [key]: null
      })
    }
  }

  const getFormValue = (e)=>{
    const input = e.target
    const value = input.value
    const key = input.name
    setForm({
      ...form,
      [key]: value
    })

    validator(key, value)
  }

  const signup = (e)=>{
    e.preventDefault()
    const keys = Object.keys(form)
    for(let key of keys)
    {
      let value = form[key]
      validator(key, value)
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white px-8 py-6 w-[450px] shadow-lg rounded-lg animate__animated animate__zoomIn">
        <h1 className='text-2xl font-bold mb-4 text-center'>CodingOtt Signup Form</h1>
        <form className='flex flex-col gap-4' onSubmit={signup}>
          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Firstname</label>
            <input 
              name="firstname"
              type="text"
              placeholder="Enter first name here"
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            { formError.firstname && <small className='text-rose-600 font-semibold text-sm'>{formError.firstname}</small> }
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-lg font-semibold'>Lastname</label>
            <input 
              name="lastname"
              type="text"
              placeholder="Enter last name here"
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            { formError.lastname && <small className='text-rose-600 font-semibold text-sm'>{formError.lastname}</small> }
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Email</label>
            <input 
              name="email"
              type="email"
              placeholder="email@gmail.com"
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            { formError.email && <small className='text-rose-600 font-semibold text-sm'>{formError.email}</small> }
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Password</label>
            <input 
              name="password"
              type="password"
              placeholder="*************"
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            { formError.password && <small className='text-rose-600 font-semibold text-sm'>{formError.password}</small> }
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Username</label>
            <input 
              name="username"
              type="text"
              placeholder="@Username"
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            { formError.username && <small className='text-rose-600 font-semibold text-sm'>{formError.username}</small> }
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Mobile no</label>
            <input 
              name="mobile"
              type="number"
              placeholder="9472395194"
              className='border p-2 rounded border-gray-300'
              onChange={getFormValue}
            />
            { formError.mobile && <small className='text-rose-600 font-semibold text-sm'>{formError.mobile}</small> }
          </div>

          <button className='border-0 bg-indigo-600 text-white rounded py-2 font-semibold'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App

/*
  padding
    p-12
    px-12
    py-12
    pt-12
    pb-12

  margin
    m-12
    mx-12
    my-12
    mt-12
    mb-12

  display
    flex
    hidden
    block
    justify-center
    justify-around
    justify-between
    justify-evenly
    items-center

  width
    w-
    w-fit
    w-full

  height
    h-
    h-full
    h-screen

  shadow
    shadow
    shadow-sm
    shadow-md
    shadow-lg
    shadow-xl

  border-radius
    rounded
    rounded-sm
    rounded-md
    rounded-lg
    rounded-full
*/
