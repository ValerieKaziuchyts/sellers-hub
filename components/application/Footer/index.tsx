import { Box, Button, Container, Divider, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import styles from './Footer.module.scss';

type Props = {};

export const Footer: React.FC<Props> = () => {
  return (
    <Box className={styles.footer}>
      <Container className={styles['footer-container']}>
        <Box className={styles['footer-upper-box']}>
          <Box className={styles['footer-logo-icons']}>
            <Image
              className={styles['footer-logo']}
              src="/logo.png"
              alt="SellersHub"
              width={155}
              height={30}
            />
            <Typography>Будьте в курсе новостей!</Typography>
            <Box className={styles['footer-icons-wrapper']}>
              <IconButton className={styles['footer-icon-button']}>
                <Image
                  className={styles['footer-icon']}
                  src="/vk.png"
                  alt="VK"
                  width={40}
                  height={40}
                />
              </IconButton>
              <IconButton className={styles['footer-icon-button']}>
                <Image
                  className={styles['footer-icon']}
                  src="/telegram.png"
                  alt="Telegram"
                  width={40}
                  height={40}
                />
              </IconButton>
              <IconButton className={styles['footer-icon-button']}>
                <Image
                  className={styles['footer-icon']}
                  src="/youtube.png"
                  alt="YouTube"
                  width={40}
                  height={40}
                />
              </IconButton>
            </Box>
          </Box>
          <Box className={styles['footer-links-wrapper']}>
            <Box className={styles['footer-product-column']}>
              <Typography variant="body1" component="a" href="#">
                <b>Продукт</b>
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Каталог
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Вопросы и ответы
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Блог
              </Typography>
              <Typography variant="body1" component="a" href="#">
                О компании
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Помощь
              </Typography>
            </Box>
            <Box className={styles['footer-category-column']}>
              <Typography variant="body1" component="a" href="#">
                <b>Категории</b>
              </Typography>
              <Typography variant="body1" component="a" href="#">
                SMM
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Видео и аудио
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Поддержка
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Копирайтинг
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Все сравнения
              </Typography>
            </Box>
            <Box className={styles['footer-category-column']}>
              <Typography variant="body1" component="a" href="#">
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Разработка
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Маркетинг
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Музыка
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Бизнес
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Дизайн
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider></Divider>
        <Box className={styles['footer-bottom-box']}>
          <Typography variant="subtitle2" color="text.disabled">© 2022 Sellershub.</Typography>
          <div className={styles['footer-policy']}>
            <Typography variant="subtitle2"><b>Условия использования</b></Typography>
            <Typography variant="subtitle2"><b>Политика конфиденциальности</b></Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};
