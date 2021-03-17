import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import s from "./CountryPage.module.scss";
import InfoDate from "../../components/InfoDate/InfoDate";
import Gallery from "../../components/Gallery/Gallery";
import InfoWeather from "../../components/InfoWeather/InfoWeather";
import Map from "../../components/Map/Map";
import { VideoPlayer } from "../../components/Video/Video";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    position: "relative",
    marginBottom: "4%",
  },
});

const CountryPage = (props: any) => {
  const classes = useStyles();
  const lang = localStorage.getItem("lang") || "en";

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={props.countryName}
          image={props.countryImg}
          title={props.countryName}
        />
        <Box className={s.capital}>
          <Typography gutterBottom variant="h3" component="h2">
            {props.countryName}
            Canada
          </Typography>
          <Typography variant="h4" color="textSecondary" component="span">
            {props.countryCapital}
            Ottawa
          </Typography>
        </Box>
        <CardContent>
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            className={s.info}
          >
            {props.countryDescription}
          </Typography>
        </CardContent>
      </Card>
      <InfoWeather city={props.countryCapital} lang={lang} />
      <InfoDate lang={lang} timezone={props.timezone} />
      <Map
        lang={lang}
        isoCountry={props.isoCountry}
        coordinates={props.coordinates}
      />
      <VideoPlayer videoUrl={props.countryVideo} />
      <Gallery />
    </>
  );
};

export { CountryPage };
