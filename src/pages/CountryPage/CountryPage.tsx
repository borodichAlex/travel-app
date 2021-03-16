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

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    position: "relative",
    margin: "0 auto",
    // height: "70%",
  },
});

const CountryPage = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={s.bg}
          component="img"
          alt="Contemplative Reptile"
          // height="45%"
          image="https://reloadvisor.org/wp-content/uploads/2019/10/Canada-ReloAdvisor.org_.jpg"
          title="Contemplative Reptile"
        />
        <Box className={s.capital}>
          <Typography gutterBottom variant="h3" component="h2">
            Canada
          </Typography>
          <Typography variant="h4" color="textSecondary" component="span">
            Ottava
          </Typography>
        </Box>
        <CardContent>
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            className={s.info}
          >
            {/* {props.description} */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            magni, sequi explicabo nam, sit repellat harum eos consequuntur,
            quasi aliquid natus delectus amet et vel velit sed voluptatum. Quo,
            veritatis.
          </Typography>
        </CardContent>
      </Card>
      {/* <InfoDate lang={"en"} timezone={" "} /> */}
      <Gallery />
    </>
  );
};

export { CountryPage };
