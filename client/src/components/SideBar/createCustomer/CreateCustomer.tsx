import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  dob: string;
}

const CreateCustomer = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    dob: '',
  });

 
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  }


  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div>
    
    <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
   
  )
}

export default CreateCustomer