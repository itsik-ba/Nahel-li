import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  dob: string;
  info: string;
}

const CreateCustomer = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    dob: '',
    info:'',
  });

 
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  }


  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div dir="rtl">
    
    <form onSubmit={handleSubmit}>
        <div>
          <label>שם:</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>טלפון:</label>
          <input
            autoComplete="off"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>מייל:</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>גיל:</label>
          <input
            autoComplete="off"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>הערות:</label>
          <textarea
              name="info"
              value={formData.info}
              onChange={handleChange}
              rows={4}  
              cols={30} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
   
  )
}

export default CreateCustomer