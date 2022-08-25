import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Form, InputGroup, Modal, NavItem, Stack } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import GymCard from './GymCard';
import PopUpModal from "./PopUpModal";
import mid from "../images/mid.PNG";
import footer from "../images/bottom.PNG"

const Content = () => {
  const [reset, setReset] = useState(false);
  const [placeData, setPlaceData] = useState([])
  const [search, setSearch] = useState(false);
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [areas, setAreas] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [gymData, setGymData] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    getPlaceDataAPI();
    getGymDataAPI();
  }, []);

  const getPlaceDataAPI = async () => {
    try {
      const { data } = await axios.get('https://api.wtfup.me/gym/places')
      setPlaceData(data.data)
    } catch (error) {
      console.log('error')
    }
  }
  const getGymDataAPI = async () => {
    try {
      const response = await axios.get('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      setGymData(response.data.data);
    } catch (error) {
      console.log('error')
    }
  }
  useEffect(() => {
    placeData.map((item) => {
      if (city === item.city) {
         setAreas(item.addressComponent)
      }
    })
  }, [placeData,city]);

  return (
    <>
      <Card style={{ borderRadius: '0px', marginTop: '-2px' }} className="bg-dark text-white">
        <Card.Body style={{ width:'90%', margin:'auto'}}>
          <InputGroup size='lg' className="mb-8 bg-dark text-white">
            <Form.Control className="bg-dark text-white" placeholder='Search gym name here...' aria-label="Large" />
          </InputGroup>
        </Card.Body>
      </Card>
      <div className="bg-dark text-white" style={{ display: 'flex', width: '100%', margin: 'auto', justifyContent: 'space-between' }}>
        <Card className="bg-dark text-white" style={{ width: '30%',marginLeft:'15px' }}>
          <Card.Body>
            <h1>Filters</h1>
            <Form.Group id='loaction' style={{ marginBottom: '15px' }}>
              <Form.Label>Location</Form.Label>
              <Form.Control size='lg' className="bg-dark text-white" value={location} onChange={(event) => setLocation(event.target.value)} type='search' placeholder='Enter Location' required></Form.Control>
            </Form.Group>
            <Form.Group id='price' style={{ marginBottom: '15px' }}>
              <Form.Label>Price</Form.Label>
              <div style={{ display: 'flex',justifyContent:'space-between' }}>
                <Form.Control size='lg' style={{width:'40%'}} className="bg-dark text-white" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} type='search' placeholder='Min' required></Form.Control>
                <Form.Control size='lg' style={{ width: '40%' }} className="bg-dark text-white" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} type='search' placeholder='Max' required></Form.Control>
              </div>
            </Form.Group>
            <Form.Group id='cities' style={{ marginBottom: '15px' }}>
              <Form.Label>Cities</Form.Label>
              <Form.Select size='lg' className="bg-dark text-white" value={city} placehoder='Select cty' onChange={(event)=> setCity(event.target.value)}>
                <option value='0'>Select City</option>               
                <option value='New Delhi'>New Delhi</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
              </Form.Select>
            </Form.Group>
            {city && <Form.Group id='areas' style={{ marginBottom: '15px' }}>
              <Form.Label>Locations</Form.Label>
              <Form.Select size='lg' className="bg-dark text-white" placeholder='Select cities' onChange={(event) => setAreas(event.target.value)}>
                {areas && areas.map((item, index) => {
                  return <option value={`${item.address1}, ${item.address2}`}>{item.address1}</option>
                })}
              </Form.Select>
            </Form.Group>}
          </Card.Body>
        </Card>
        <Card className="bg-dark text-white" style={{ width: '65%' }}>
          <Card.Body>
            <div style={{height:'500px',overflow:'auto'}}>
              {gymData.map((item, id) => {
                return <GymCard key={id} name={item.gym_name} distance={item.distance_text} rating={item.rating} time={item.duration_text} address1={item.address1} address2={item.address2} image={item.cover_image ? item.cover_image :''} />
            })}
            </div>
          </Card.Body>
        </Card>
        {show && <PopUpModal show={show} setShow={setShow} /> }
      </div>
      <img style={{ overflow: 'hidden' }} src={mid}></img>
      <img style={{ overflow: 'hidden' }} src={footer}></img>
    </>
  )
}

export default Content