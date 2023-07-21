import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = props => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const toSwitch = language === 'en'?'fi':'en';
  return (
    <div className={styles.Header}>
      <div className={styles.title}>{t('title')}</div>
    </div>
  );
};

export default Header;
