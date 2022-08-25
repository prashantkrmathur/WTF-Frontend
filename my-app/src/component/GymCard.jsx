import React from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const GymCard = (props) => {
    const { name, distance, rating, time, address1, address2, image } = props
    return (
        <div style={{margin:"30px"}}>
            <Card style={{ minHeight: '250px' }} className="bg-dark text-white">
                <img style={{width:'80px'}} src='https://wtfup.me/assets/assets/gif/free.gif'></img>
                <div style={{ display: 'flex' }} >
                <Card.Body style={{ width: '50%' }} className="bg-dark text-white">
                        <img src={image} style={{ width:'-webkit-fill-available'}} alt=''></img>
                </Card.Body>
                <Card.Body style={{ width: '50%' }}>
                        <h4>{name}</h4>
                        <h6>{`${address1}, ${address2}`}</h6>
                        <p><span><AiOutlineStar /></span> <span><AiOutlineStar /></span> <span><AiOutlineStar /></span> <span><AiOutlineStar /></span> <span><AiOutlineStar /></span> </p>
                        <span><FaLocationArrow style={{ color: 'green' }} />  </span><span>{`${time} | ${distance}`}</span>
                        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginLeft: '20px', marginTop:'80px' }}>
                            <Stack direction="horizontal" gap={2}>
                                <Button as="a" size='lg' variant="danger">
                                    Book Now
                                </Button>
                            </Stack>
                        </div>
                </Card.Body>    
                </div>
            </Card>
        </div>
    )
}

export default GymCard