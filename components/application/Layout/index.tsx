import { Container } from '@mui/material';
import React, { ReactElement } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './Layout.module.scss';

type Props = {
  children: ReactElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container className={styles.content}>
        {children}
      </Container>
      <Footer />
    </>
  );
};
