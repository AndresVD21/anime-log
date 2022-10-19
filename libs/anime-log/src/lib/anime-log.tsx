import styles from './anime-log.module.scss';

/* eslint-disable-next-line */
export interface AnimeLogProps {}

export function AnimeLog(props: AnimeLogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AnimeLog!</h1>
    </div>
  );
}

export default AnimeLog;
