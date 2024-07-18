import React, { useState } from 'react';

function InForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    city: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className='you'>Thank you ! </div> ;
  }
  return (
    <>
    <section >
       <h1 className='head'>Join the Waitlist </h1>

      <form onSubmit={handleSubmit} className='form'>  
      <div className='input' >
       <input  placeholder='Name'  name="name"  value={formData.name} onChange={handleChange} type='text'  className='inputBox'  />
       <input  placeholder='Phone Number'  name="phoneNumber"value={formData.phoneNumber} onChange={handleChange} type='number'  className='inputBox'  />
       <input  placeholder='City' name="city"  value={formData.city} onChange={handleChange} type='text' className='inputBox'  />
      </div>
       <button className='formbtn' type="submit">Join the Waitlist</button>
       
       </form>
      </section>
    </> 
  )
}

export default InForm;
