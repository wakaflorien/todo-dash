import React from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <>
    <div className='text-teal-600'>{t('navigation.home')}</div>
    <LanguageSwitcher />
  </>
};

export default Home;