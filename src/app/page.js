'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
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

  const colorize = (el) => {
    el.target.style.backgroundColor = 'black';
    setTimeout(() => {
      el.target.style.backgroundColor = 'transparent';
    }, 333);
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p>
          Pixel like cursor for people who are into arcade games and Pac-Man
        </p>
      </div>
      <div className={styles.grid}>
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={index} className={styles.column}>
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </div>
  );
}
