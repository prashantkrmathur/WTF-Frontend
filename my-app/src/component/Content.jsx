import React, { useState } from 'react'
import { Button, Card, Form, InputGroup, Stack } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Content = () => {
  const [reset, setReset] = useState(false);
  const [search, setSearch] = useState(false);
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [areas, setAreas] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <>
      <Card style={{ borderRadius: '0px', marginTop: '-17px' }} className="bg-dark text-white">
        <Card.Body style={{ display: 'flex' }}>
          <BsSearch style={{ color: 'yellow', height: '50px' }} />
          <InputGroup className="mb-8 bg-dark text-white">
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
          <GoLocation />
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Clear
            </Button>
          </Stack>
        </Card.Body>
      </Card>
      <div className="bg-dark text-white" style={{display:'flex',width:'100%',margin:'auto',justifyContent:'space-between'}}>
        <Card className="bg-dark text-white" style={{width:'30%'}}>
          <Card.Body>
            <h1>Filters</h1>
            <Form.Group id='loaction' style={{ marginBottom: '15px' }}>
              <Form.Label>Location</Form.Label>
              <Form.Control value={''} onChange={''} type='search' placeholder='Enter Location' required></Form.Control>
            </Form.Group>
            <Form.Group id='price' style={{ marginBottom: '15px' }}>
              <Form.Label>Price</Form.Label>
              <div style={{display:'flex'}}>
                <Form.Control value={''} onChange={''} type='search' placeholder='Min' required></Form.Control>
                <Form.Control value={''} onChange={''} type='search' placeholder='Max' required></Form.Control>
            </div>
            </Form.Group>
            <Form.Group id='cities' style={{ marginBottom: '15px'}}>
              <Form.Label>Cities</Form.Label>
              <Form.Select value={''} onChange={''}>
                <option value='0'>New Delhi</option>
                <option value="1">Gaziabad</option>
                <option value="2">Noida</option>
                <option value="3">Delhi</option>
              </Form.Select>
            </Form.Group>
            {<Form.Group id='cities' style={{ marginBottom: '15px' }}>
              <Form.Label>Cities</Form.Label>
              <Form.Select placeholder='Select cities' value={''} onChange={''}>
                {/* {areas.map((items, index) => {
                  return <option value={index}></option>
                })} */}
              </Form.Select>
            </Form.Group>}
          </Card.Body>
        </Card>
        <Card className="bg-dark text-white" style={{ width: '65%' }}>
          <Card.Body>Hello</Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Content