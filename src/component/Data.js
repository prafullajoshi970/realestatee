import House1 from "./houses/house1.png";
import House2 from "./houses/house2.png";
import House3 from "./houses/house3.png";
import House4 from "./houses/house4.png";
import House5 from "./houses/house5.png";
import House6 from "./houses/house6.png";
import House7 from "./houses/house7.png";
import House8 from "./houses/house8.png";
import House9 from "./houses/house9.png";
import House10 from "./houses/house10.png";
import House11 from "./houses/house11.png";
import House12 from "./houses/house12.png";
import Apartment1 from "./apartments/a1.png";
import Apartment2 from "./apartments/a2.png";
import Apartment3 from "./apartments/a3.png";
import Apartment4 from "./apartments/a4.png";
import Apartment5 from "./apartments/a5.png";
import Apartment6 from "./apartments/a6.png";
import React from 'react'
import Card from './Card'

function data() {
  const housesData= [
  {
    id: 1,
    type: "House",
    name: "House 1",
    image: House1,
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    date: "2016",
    price: "110000",
    pricev:"lessthan200000"
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    image: House2,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    date: "2016",
    price: "140000",
    pricev:"lessthan200000"
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    image: House3,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    date: "2016",
    price: "170000",
    pricev:"lessthan200000"
   
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    image: House4,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    date: "2016",
    price: "200000",
    pricev:"lessthan200000"
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    image: House5,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    date: "2015",
    price: "210000",
    pricev:"lessthan400000"
   
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    image: House6,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    date: "2014",
    price: "220000",
    pricev:"lessthan400000"
  }, 
  {
    id: 7,
    type: "House",
    name: "House 7",
    image: House7,
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    date: "2015",
    price: "117000",
    pricev:"lessthan200000"
   
  },
  {
    id: 8,
    type: "House",
    name: "House 8",
    image: House8,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    date: "2019",
    price: "145000",
    pricev:"lessthan200000"
  
  },
  {
    id: 9,
    type: "House",
    name: "House 9",
    image: House9,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    date: "2015",
    price: "139000",
    pricev:"lessthan200000"
    
  },
  {
    id: 10,
    type: "House",
    name: "House 10",
    image: House10,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    date: "2014",
    price: "180000",
    pricev:"lessthan200000"
   
  },
  {
    id: 11,
    type: "House",
    name: "House 11",
    image: House11,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    date: "2011",
    price: "213000",
    pricev:"lessthan400000"
   
  },
  {
    id: 12,
    type: "House",
    name: "House 12",
    image: House12,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    date: "2013",
    price: "221000",
    pricev:"lessthan400000"
    
  },
  {
    id: 13,
    type: "Apartament",
    name: "Apartament 1",
    image: Apartment1,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    date: "2012",
    price: "20000",
    pricev:"lessthan40000"
 
  },
  {
    id: 14,
    type: "Apartament",
    name: "Apartament 2",
    image: Apartment2,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    date: "2011",
    price: "30000",
    pricev:"lessthan40000"
   
  },
  {
    id: 15,
    type: "Apartament",
    name: "Apartament 3",
    image: Apartment3,
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    date: "2011",
    price: "40000",
    pricev:"lessthan40000"
    
  },
  
  
  {
    id: 16,
    type: "Apartament",
    name: "Apartament 16",
    image: Apartment4,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    date: "2011",
    price: "21000",
    pricev:"lessthan40000"
    
  },
  {
    id: 17,
    type: "Apartament",
    name: "Apartament 17",
    image: Apartment5,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    date: "2012",
    price: "32000",
    pricev:"lessthan40000"

   
  },
  {
    id: 18,
    type: "Apartament",
    name: "Apartament 18",
    image: Apartment6,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    date: "2010",
    price: "38000",
    pricev:"lessthan40000"
  },
];
console.log(housesData)
  return (
    <div>
      <Card data={housesData }/>
  
    </div>
  )
}

export default data
