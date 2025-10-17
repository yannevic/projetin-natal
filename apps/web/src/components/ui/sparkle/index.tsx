import estrela from '@/assets/svgs/star.svg';
import styles from './sparkle.module.css';

interface StarProps {
  x: number;
  y: number;
  size: number;
}

export default function Star({ x, y, size }: StarProps) {
  return (
    <img
      src={estrela}
      alt=""
      width={size}
      height={size}
      className={styles.twinkle}
      style={{ left: `${x}vw`, top: `${y}vh` }}
    />
  );
}
