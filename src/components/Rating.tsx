import { StarBorder, Star } from '@mui/icons-material';
import classes from './Rating.module.css';
import { ReactElement } from 'react';

type Props = {
  item: {
    id: number;
    rating: number;
  };
  onRate: (id: number, rating: number) => void;
};

function Rating({ item, onRate }: Props) {
  const ratings: ReactElement[] = [];

  Array.from(new Array(5)).forEach((_, i) => {
    const j = i + 1;
    ratings.push(
      <button
        className={classes.ratingButton}
        key={j}
        onClick={() => onRate(item.id, j)}
      >
        {item.rating < j ? <StarBorder /> : <Star />}
      </button>
    );
  });

  return ratings;
}

export default Rating;
