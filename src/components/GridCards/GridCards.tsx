import { FC } from 'react';

import styles from './styles.module.css';

const GridCards: FC = (props) => {
  return (
    <div className={styles.grid}>
      {props.children}
    </div>
  )
}

export default GridCards;
