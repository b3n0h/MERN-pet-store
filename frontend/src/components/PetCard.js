import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './PetCard.module.css'
import { Link } from 'react-router-dom';

export default function PetCard(props) {
  return (
    <React.Fragment>
      <div className={classes.title}>
        <h2>Current Pets</h2>
      </div>
      <div className={classes.cardContainer}>
        {props.pets.map((pet, index) => {
          return <Card key={pet._id} className={classes.card} sx={{ width: 275, mr: 1, mb: 1 }}>
            <CardContent>
              <Typography>
                {index + 1}.
              </Typography>
              <Typography sx={{ fontSize: '18px ' }} component="div">
                {pet.name}
              </Typography>
              <Typography sx={{ fontSize: '14px' }} color="text.secondary">
                Breed: {pet.breed}
              </Typography>
              <Typography sx={{ fontSize: '14px' }} color="text.secondary">
                Age: {pet.age}
              </Typography>
              <CardActions sx={{ padding: '10px 0 0 0' }}>
                <Link to={`/pets/edit/${pet._id}`}>
                  <EditIcon className={classes.svg} sx={{ width: '20px', paddingRight: '10px' }} />
                </Link>
                <Link to={`/pets/delete/${pet._id}`}>
                  <DeleteIcon className={classes.svg} sx={{ width: '20px', paddingRight: '10px' }} />
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        })}
      </div >
    </React.Fragment>
  );
}