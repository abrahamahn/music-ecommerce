import React from 'react';
import * as Icon from '@/components/icons'
import styles from '@/styles/layout/Footer.module.css';
import * as types from '@/types/global';
import { signOut } from 'next-auth/react';

const Footer: React.FC = () => {
  const handleSignOutut = async () => {
    await signOut();
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.icon_container}>
          <Icon.Home width={22} height={22} />
        </div>
        <div className={styles.icon_container}>
          <Icon.Music width={22} height={22} />
        </div>
        <div className={styles.icon_container}>
          <Icon.Post width={22} height={22} />
        </div>
        <div className={styles.icon_container}>
          <Icon.Shop width={22} height={22} />
        </div>
        <div className={styles.icon_container} onClick={handleSignOutut}>
          <Icon.Profile width={22} height={22} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
