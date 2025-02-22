import React, { useState } from 'react';

const App = () => {
  const initialState = {
    date: '',
    time: '',
    diners: '',
    firstname: '',
    lastname: '',
    email: '',
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setData((values)=>({...values, [name]:value}))
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted Successfully')
    console.log(data)
    setData(initialState)
  }
  return (
    <section className=" mx-auto min-w-screen min-h-screen flex flex-col items-center justify-center bg-[url('/Bg-Img.png')] bg-no-repeat bg-cover bg-center bg-black/60 bg-blend-overlay">
      <h1 className='text-4xl text-[#F0ED57] '>Little Lemon Reservation</h1>

      <form onSubmit={handleSubmit} className='text-center scale-90'>
        <fieldset className='space-y-10 '>
          <div className='flex flex-col'>
            <label htmlFor='date' className='text-2xl font-medium text-[#F0ED57]'>
              Select Date
            </label>
            <input
              type='date'
              id='date'
              name='date'
              className=' text-2xl border-none bg-white active:border-[#F0ED57] p-2 rounded-md w-[601px] h-[63px]'
              required
              value={data.date}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='time' className='text-2xl font-medium text-[#F0ED57]'>
              Select Time
            </label>
            <input
              type='time'
              id='time'
              name='time'
              className=' text-2xl border-none bg-white active:border-[#F0ED57] p-2 rounded-md w-[601px] h-[63px]'
              required
              value={data.time}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='diners' className='text-2xl font-medium text-[#F0ED57]'>
              Select Diners
            </label>
            <input
              type='number'
              id='diners'
              name='diners'
              className=' text-2xl border-none bg-white active:border-[#F0ED57] p-2 rounded-md w-[601px] h-[63px]'
              min='1'
              max={'10'}
              required
              value={data.diners}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row gap-4 w-[601px]'>
            <div className='flex flex-col w-1/2'>
              <label htmlFor='firstname' className='text-2xl font-medium text-[#F0ED57]'>
                First name
              </label>
              <input
                type='text'
                id='firstname'
                name='firstname'
                className=' text-2xl border-none bg-white active:border-[#F0ED57] p-2 rounded-md w-full h-[63px]'
                required
                value={data.firstname}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col w-1/2'>
              <label htmlFor='lastname' className='text-2xl font-medium text-[#F0ED57]'>
                Last name
              </label>
              <input
                type='text'
                id='lastname'
                name='lastname'
                className=' text-2xl border-none bg-white active:border-[#F0ED57] p-2 rounded-md w-full h-[63px]'
                required
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='email' className='text-2xl font-medium text-[#F0ED57]'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className=' text-2xl border-none bg-white active:border-[#F0ED57] p-2 rounded-md w-[601px] h-[63px]'
              required
              value={data.email}
              onChange={handleChange}
              pattern='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  
  '
            />
          </div>

          <button
            type='submit'
            className='w-[246px] h-[79px] scale-70 bg-[#4C625E] text-[36px] text-white rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-100 ease-in-out'
          >
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default App;
