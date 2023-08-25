'use client';
import styles from './page.module.css';

export default function Home() {
  const getBlocks = () => {
    const blockSize = window.innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e);
          }}
          key={`b_${index}`}
          className={styles.block}
        ></div>
      );
    });
  };

  const colorize = (e) => {
    e.target.style.backgroundColor = 'black';
    setTimeout(() => {
      e.target.style.backgroundColor = 'transparent';
    }, 333);
  };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <p>
          Pixel like cursor for people who are into arcade games and Pac-Man
        </p>
      </div>
      <div className={styles.grid}>
        {[...Array(20).keys()].map((_, index) => {
          return (
            <div key={index} className={styles.column}>
              {getBlocks()}
            </div>
          );
        })}
      </div>
    </main>
  );
}
