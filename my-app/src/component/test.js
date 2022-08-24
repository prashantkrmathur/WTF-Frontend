import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Form, InputGroup, NavItem, Stack } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import cityData from "../cityData.json";

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
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        setPlaceData(cityData.data)
    }, []);

    const handleCityChange = (event) => {
        event.preventDefault();
        setCity(event.target.value);
        placeData.filter((el) => {
            if (event.target.value === el.name) {
                setLatitude(el.lat);
                setLongitude(el.lon);
            }
        })
        getNearestGymDataAPI(latitude, longitude);
    }

    const getDataAPI = async () => {
        try {
            const { data } = await axios.get('https://api.wtfup.me/gym/places')
            setPlaceData(data.data)
        } catch (error) {
            console.log('error')
        }
    }
    const getNearestGymDataAPI = async (lat, long) => {
        try {
            const response = await axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=${lat}&long=${long}`)
            console.log('====================================');
            console.log(response);
            console.log('====================================');
        } catch (error) {
            console.log('error')
        }
    }
    useEffect(() => {
        /* placeData.map((item) => {
           if (city === item.city) {
              setAreas(item.addressComponent)
           }
         })*/
        console.log(city)
    }, [city]);

    // useEffect(() => {
    //   console.log(areas);
    // },[areas])

    return (
        <>
            <Card style={{ borderRadius: '0px', marginTop: '-17px' }} className="bg-dark text-white">
                <Card.Body style={{ display: 'flex' }}>
                    <BsSearch style={{ color: 'yellow', height: '50px' }} />
                    <InputGroup className="mb-8 bg-dark text-white">
                        <Form.Control className="bg-dark text-white" placeholder='Search gym name here...' aria-label="Large" />
                    </InputGroup>
                    <GoLocation />
                    <Stack direction="horizontal" gap={2}>
                        <Button as="a" variant="primary">
                            Clear
                        </Button>
                    </Stack>
                </Card.Body>
            </Card>
            <div className="bg-dark text-white" style={{ display: 'flex', width: '100%', margin: 'auto', justifyContent: 'space-between' }}>
                <Card className="bg-dark text-white" style={{ width: '30%', marginLeft: '15px' }}>
                    <Card.Body>
                        <h1>Filters</h1>
                        <Form.Group id='loaction' style={{ marginBottom: '15px' }}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control size='lg' className="bg-dark text-white" value={location} onChange={(event) => setLocation(event.target.value)} type='search' placeholder='Enter Location' required></Form.Control>
                        </Form.Group>
                        <Form.Group id='price' style={{ marginBottom: '15px' }}>
                            <Form.Label>Price</Form.Label>
                            <div style={{ display: 'flex' }}>
                                <Form.Control size='lg' className="bg-dark text-white" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} type='search' placeholder='Min' required></Form.Control>
                                <Form.Control size='lg' className="bg-dark text-white" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} type='search' placeholder='Max' required></Form.Control>
                            </div>
                        </Form.Group>
                        <Form.Group id='cities' style={{ marginBottom: '15px' }}>
                            <Form.Label>Cities</Form.Label>
                            <Form.Select size='lg' className="bg-dark text-white" value={city} placehoder='Select cty' onChange={handleCityChange}>
                                <option value='0'>Select City</option>
                                {placeData && placeData.map((item) => {
                                    return <option value={item.name}>{item.name}</option>
                                })}
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
                        {/* {gymData.map((item, key) => {
              return <div>{ }</div>
            })} */}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Content