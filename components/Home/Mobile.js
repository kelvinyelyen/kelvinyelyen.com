import Link from 'next/link';
import React from 'react';
import styles from '@/styles';

const Mobile = () => {
    return (
      <div className={`${styles.innerWidth} ${styles.xPaddings}`}>
        <div className=" md:hidden block my-[50px] text-secondary-white">
          <Link href="/">
            <h1 className="font-monument tracking-tighter text-5xl mb-1">
              kelvinyelyen
            </h1>
            <p className="text-5xl dark:font-light font-monument">
              Software Engineer <br />&amp; Designer
            </p>
          </Link>
        </div>
      </div>
    )
}

export default Mobile;
