import { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, CardContent, CardMedia, Typography, Box } from "@material-ui/core";
import s from "./CountryPage.module.scss";
import InfoDate from "../../components/InfoDate/InfoDate";
import Gallery from "../../components/Gallery/Gallery";
import InfoWeather from "../../components/InfoWeather/InfoWeather";
import Map from "../../components/Map/Map";
import { VideoPlayer } from "../../components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useHistory, useParams } from "react-router";
import { ICountry, IPlaces } from "../../interfaces";
import { LangContext } from "../../contexts/lang-context";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import { getData } from "../../services/getData";
import { setPlaces } from '../../redux/actions/actions';

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

  const dispatch = useDispatch();

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
  });

  useEffect(() => {
    getData(lang, "places").then((data: IPlaces[]) => {
      dispatch(setPlaces(data));
    });
  }, [lang, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
    >
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
      <Grid container item direction="column" alignItems="center" style={{padding: '1vw'}}>
        <Grid item><VideoPlayer videoUrl={countryData.videoUrl} /></Grid>
        <Grid item><Gallery id={countryData.id} /></Grid>
      </Grid>
      <Grid item container alignItems="center" justify="center" style={{padding: '3vw'}}>
        <Grid container item direction="column" style={{maxWidth: '500px'}}>
          <Grid item>
            <InfoDate lang={lang} timezone={countryData.location.timezone} />
          </Grid>
          <Grid item>
            <InfoWeather city={`${countryData.capital}`} lang={lang} />
          </Grid>
        </Grid>
        <Grid item style={{marginLeft: '15px'}}>
          <CurrencyConverter currency={{name: countryData.currency.fullName, code: countryData.currency.name}} />
        </Grid>
        <Grid item>
          <Map
            lang={lang}
            isoCountry={countryData.ISOCode}
            coordinates={countryData.location.coordinates}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export { CountryPage };
