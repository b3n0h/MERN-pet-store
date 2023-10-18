import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './PetCard.css'

export default function PetCard(props) {
  return (
    <div className='cardContainer'>
      {props.pets.map((pet, index) => {
        return <Card key={pet._id} className='card' sx={{ width: 275, mr: 1, mb: 1 }}>
          <CardContent>
            <Typography>
              {index + 1}
            </Typography>
            <Typography sx={{ fontSize: '18px ' }} component="div">
              {pet.name}
            </Typography>
            <Typography sx={{ fontSize: '14px' }} color="text.secondary">
              {pet.breed}
            </Typography>
          </CardContent>
        </Card>
      })}

    </div>
  );
}