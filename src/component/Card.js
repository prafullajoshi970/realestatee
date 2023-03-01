import React from 'react'
import {BiBed} from 'react-icons/bi';
import {FaBath} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {IoMdPricetags} from 'react-icons/io';
import {FaAddressCard} from 'react-icons/fa';
import {BiMap} from 'react-icons/bi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import{useState} from 'react'


function Card(props) {
   
   const[data1,setData1]=useState(props.data)

   const [age, setAge] = useState('');

  const filterType=(type)=>{const updateType=props.data.filter((currentelem)=>{
    return currentelem.type===type;
  });
  setData1(updateType)

  }

  const filterCountry=(country)=>{
    const updateCountry=props.data.filter((currentElem)=>{
      return currentElem.country===country
    
  });
  setData1(updateCountry)
}

  const filterPrice=(price)=>{
  const updatedPrice=props.data.filter((currentelem)=>{
    return currentelem.pricev===price
  });
  setData1(updatedPrice)
  }
  

   const handleChange = (event) => {
     setAge(event.target.value);
   };

  return (
    <>
   <div className='filter'>
   <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='formcontrol'>
      <InputLabel id="demo-select-small">Country</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
      
        <MenuItem  onClick={()=>filterCountry("Canada")}>Canada</MenuItem>
        <MenuItem onClick={()=>filterCountry("United States")}>United States</MenuItem>
       
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='formcontrol'>
      <InputLabel id="demo-select-small">Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
      
        <MenuItem onClick={()=>filterType("House")}>House</MenuItem>
        <MenuItem  onClick={()=>filterType("Apartament")}>Apartment</MenuItem>
       
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='formcontrol'>
      <InputLabel id="demo-select-small">Price</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
      
        <MenuItem onClick={()=>filterPrice("lessthan40000")}>&#60;=40000$</MenuItem>
        <MenuItem onClick={()=>filterPrice("lessthan200000")} >&#60;=200000$</MenuItem>
        <MenuItem onClick={()=>filterPrice("lessthan400000")}>&#60;=400000$</MenuItem>
       
      </Select>
    </FormControl>

   </div>
    <div className="cards">
       {data1.map(e=>
     <div className='card'>
    
      <img src={e.image} alt=" "></img>
      <h3>{e.type}</h3>
      <p><BiMap/> {e.country}</p>
      <p><FaAddressCard/> {e.address}</p>
      <div className='insideHome'>
        <p><BiBed/> {e.bedrooms}</p>
        <p><FaBath/>  {e.bathrooms}</p>
        <p><AiFillHome/>  {e.surface}</p>
      </div>
      <div className='dateprice'>
        <p><BsFillCalendarDateFill/> {e.date}</p>
        <p><IoMdPricetags/> $ {e.price}</p>
      </div>

      </div> 
    )}
    
      
       
    </div>
    </>
    
  )
}

export default Card