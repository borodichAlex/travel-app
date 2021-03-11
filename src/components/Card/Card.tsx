import React from 'react';
import { Card as MuiCard, CardActionArea , CardContent, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IDataCard } from './types';

const PATH_IMG = './static/images/country-cards/';

type ICardProps = {
  data: IDataCard;
}

const Card = (props: ICardProps) => {
  const {data} = props;

  return (
    <MuiCard>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={Card + data.title}
          height="180"
          image={PATH_IMG + data.imgUrl}
          title={data.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h3">
            {data.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}

export { Card };