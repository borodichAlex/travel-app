import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

export const ListWithLink = (list: JSX.Element[]) => {
  return list.map((card: JSX.Element, index: number) => (
    <Link key={list[index].key} underline='none' component={RouterLink} to={`/country/${list[index].props.data.id}`}>
      {card}
    </Link>
  ))
};