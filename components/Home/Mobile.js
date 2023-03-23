import Link from 'next/link';
import React from 'react';
import styles from '@/styles';

const Mobile = () => {
    return (
      <div className={`${styles.innerWidth} ${styles.xPaddings}`}>
        <div className=" md:hidden block my-[50px]">
          <Link href="/">
            <h1 className="font-monument tracking-tighter text-5xl mb-1">
              kelvinyelyen
            </h1>
            <p className="text-sm dark:font-light uppercase">
              Software Engineer &amp; Designer
            </p>
          </Link>
        </div>
      </div>
    )
}

export default Mobile;
