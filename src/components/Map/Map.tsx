import { useRef, Ref } from "react";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Map as YMap,
  YMaps,
  Placemark,
  FullscreenControl,
  TypeSelector,
} from "react-yandex-maps";
import { ICoordinates, ILangs } from "../../interfaces";

const yandexmap_api_key = "c2d7139d-1a07-40c3-80da-ce6ae6ace816";

const getFormattedLang = (lang: ILangs) => {
  const languages: any = {
    en: "en_US",
    ru: "ru_RU",
    be: "be_BY",
  };
  return languages[lang];
};

interface IMapProps {
  coordinates: ICoordinates;
  lang: ILangs;
  isoCountry: string;
}

const useStyles = makeStyles({
  map: {
    "& > ymaps > ymaps": {
      borderRadius: "25px",
    },

    "& > ymaps > ymaps > ymaps": {
      borderRadius: "25px",
    },
  }
});

export default function Map(props: IMapProps) {
  const {
    coordinates: { lat, lon },
    lang,
    isoCountry,
  } = props;

  let { height, width } = useWindowDimensions();
  const mapSize = width > 700 ? "700px" : String(width - 50 + 'px');

  const mapRef = useRef<any>(null);

  const classes = useStyles();

  const stylesMap = {
    height: mapSize,
    width: mapSize,
    margin: '30px auto'
  }

  const highlightCountry = (ymaps: any) => {
    if (mapRef && mapRef.current) {
      ymaps.borders
        .load("001", {
          lang,
          quality: 2,
        })
        .then(function (geojson: any) {
          const listCountries = ymaps.geoQuery(geojson);
          const country = listCountries
            .search(`properties.iso3166 = "${isoCountry}"`)
            .setOptions({ fillColor: "#ff001a", fillOpacity: 0.2 });

          country.addToMap(mapRef.current);
        });
    }
  };

  return (
    <div>
      <YMaps
        key={getFormattedLang(lang)}
        query={{
          apikey: yandexmap_api_key,
          lang: getFormattedLang(lang),
        }}
      >
        <YMap
          instanceRef={(inst: Ref<any>) => {
            mapRef.current = inst;
          }}
          state={{ center: [lat, lon], zoom: 5 }}
          className={classes.map}
          onLoad={(ymaps: any) => highlightCountry(ymaps)}
          modules={["borders", "ObjectManager", "geoQuery"]}
          style={stylesMap}
        >
          <Placemark geometry={[lat, lon]} />
          <FullscreenControl />
          <TypeSelector options={{ float: "left" }} />
        </YMap>
      </YMaps>
    </div>
  );
}
