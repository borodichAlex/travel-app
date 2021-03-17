import { useRef, Ref } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Map as YMap, YMaps, Placemark, FullscreenControl, TypeSelector } from 'react-yandex-maps';
import { ICoordinates, ILangs } from '../../interfaces';

const yandexmap_api_key = "c2d7139d-1a07-40c3-80da-ce6ae6ace816";

const getFormattedLang = (lang: ILangs) => {
  const languages: any = {
    'en': 'en_US',
    'ru': 'ru_RU',
    'be': 'be_BY',
  }
  return languages[lang];
}

interface IMapProps {
  coordinates: ICoordinates;
  lang: ILangs;
  isoCountry: string;
  sizeMap: {w: string, h: string};
}

const useStyles = makeStyles({
  map: (props: IMapProps) => ({
    height: props.sizeMap.h || '250px',
    width: props.sizeMap.w || '250px',

    '& > ymaps > ymaps': {
      borderRadius: '25px',
    },

    '& > ymaps > ymaps > ymaps': {
      borderRadius: '25px',
    }
  })
})

export default function Map(props: IMapProps) {
  const { coordinates: {lat, lon}, lang, isoCountry } = props;

  const mapRef = useRef<any>(null);

  const classes = useStyles(props);

  const highlightCountry = (ymaps: any) => {
    if (mapRef && mapRef.current) {
      ymaps.borders.load('001', {
        lang,
        quality: 2
      }).then(function (geojson: any) {
        const listCountries = ymaps.geoQuery(geojson);
        const country = listCountries.search(`properties.iso3166 = "${isoCountry}"`).setOptions({'fillColor': '#ff001a', 'fillOpacity': .2});

        country.addToMap(mapRef.current);
      });
    }
  }

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
          instanceRef={(inst: Ref<any>) => {mapRef.current = inst}}
          state={{ center: [lat, lon], zoom: 5 }}
          className={classes.map}
          onLoad={(ymaps:any) => highlightCountry(ymaps)}
          modules={["borders", "ObjectManager", "geoQuery"]}
        >
          <Placemark geometry={[lat, lon]} />
          <FullscreenControl />
          <TypeSelector options={{float: 'left'}} />
        </YMap>
      </YMaps>
    </div>
  );
}