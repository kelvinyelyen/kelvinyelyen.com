import Link from 'next/link';
import React from 'react';
import styles from '@/styles';

const Mobile = () => {
    return (
      <div className={`${styles.innerWidth} ${styles.xPaddings}`}>
        <div className=" md:hidden block my-[40px]  text-4xl">
          <Link href="/">
            <h1 className="font-monument tracking-tighter dark:text-secondary-white text-neutral-800 mb-1">
              kelvinyelyen
            </h1>
            <p className=" dark:font-light font-monument dark:text-neutral-700 text-secondary-white">
              Software Engineer <br />
              &amp; Designer
            </p>
          </Link>
        </div>
      </div>
    )
}

export default Mobile;
