import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import s from "./CountryPage.module.scss";
import InfoDate from "../../components/InfoDate/InfoDate";
import Gallery from "../../components/Gallery/Gallery";
import InfoWeather from "../../components/InfoWeather/InfoWeather";
import Map from "../../components/Map/Map";
import { VideoPlayer } from "../../components/Video/Video";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useHistory, useParams } from "react-router";
import { ICountry } from "../../interfaces";
import { LangContext } from "../../contexts/lang-context";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    position: "relative",
    marginBottom: "4%",
  },
});

const CountryPage = () => {
  const classes = useStyles();
  const { lang } = useContext(LangContext);

  const dataCountries = useSelector((state: RootState) => state.countries);
  const [countryData, setCountryData] = useState<ICountry>();

  let { id } = useParams<any>();
  const history = useHistory();

  useEffect(() => {
    const data = dataCountries.filter((item) => item.id == id);
    if (id > 8) {
      history.push("/");
    }
    setCountryData(data[0]);
    console.log(countryData);
  });

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={countryData.name}
          image={`https://images.unsplash.com/${countryData.imageUrl}?w=1920`}
          title={countryData.name}
        />
        <Box className={s.capital}>
          <Typography gutterBottom variant="h3" component="h2">
            {countryData.name}
          </Typography>
          <Typography variant="h4" color="textSecondary" component="span">
            {countryData.capital}
          </Typography>
        </Box>
        <CardContent>
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            className={s.info}
          >
            {countryData.description}
          </Typography>
        </CardContent>
      </Card>
      <InfoWeather city={`${countryData.capital}`} lang={lang} />
      {/* <CurrencyConverter currency={} /> */}
      <InfoDate lang={lang} timezone={countryData.location.timezone} />
      <Map
        lang={lang}
        isoCountry={countryData.ISOCode}
        coordinates={countryData.location.coordinates}
      />
      <VideoPlayer videoUrl={countryData.videoUrl} />
      <Gallery />
    </>
  );
};

export { CountryPage };
