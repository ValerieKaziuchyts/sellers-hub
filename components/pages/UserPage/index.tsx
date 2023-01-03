import React from "react";
import { Breadcrumbs, Container, Link, Typography, Grid, Box, Tabs, Tab, Rating, Avatar, Card, Divider, Toolbar, Button, Paper, IconButton, Chip } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Carousel from "react-material-ui-carousel";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import styles from './UserPage.module.scss';
import Image from "next/image";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Item(props: any) {
  return (
    <Paper>
      {props.item}
    </Paper>
  )
}

export const UserPage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const breadcrumbs = [
    <Link className={styles['breadcrumbs-home-icon']} underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      <Image
        src="/home.png"
        alt="Home"
        width={13}
        height={13}
      />
    </Link>,
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Графика и дизайн
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Дизайн сайта
    </Link>,
    <Typography key="3" color="text.disabled">
      Faisar Riki
    </Typography>,
  ];

  let carouselItems = [
    <Image
      key="0"
      src="/carouselPhoto.png"
      alt="Carousel photo"
      width={288}
      height={175}
    />,
    <Image
      key="1"
      src="/carouselPhoto2.png"
      alt="Carousel photo"
      width={288}
      height={175}
    />,
    <Image
      key="2"
      src="/carouselPhoto3.jpg"
      alt="Carousel photo"
      width={288}
      height={175}
    />,
  ];

  return (
    <Box>
      <Breadcrumbs
        className={styles['breadcrumbs-wrapper']}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Box className={styles['tabs-and-user-info-wrapper']}>
        <Box className={styles['tabs-wrapper']}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Услуги" {...a11yProps(0)} />
              <Tab label="Отзывы (421)" {...a11yProps(1)} />
              <Tab label="О себе" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Card className={styles['add-new-service-card']} variant="outlined">
              <Button className={styles['add-new-service-button']}>
                <Image
                  className={styles['carousel-user-photo']}
                  src="/plus.png"
                  alt="Plus"
                  width={32}
                  height={32}
                />
                <Typography color="text.primary">Добавить новую услугу</Typography>
              </Button>
            </Card>
            <Card className={styles['tabpabel-carousel-info-wrapper']} variant="outlined">
              <Box className={styles['carousel-info-wrapper']}>
                <div className={styles['carousel-wrapper']}>
                  <div className={styles['carousel-chip-wrapper']}>
                    <Chip className={styles['carousel-chip']} size="small" avatar={<Avatar src="./sale.png" />} label="-30%" />
                    <Chip className={styles['carousel-chip']} size="small" avatar={<Avatar src="./star.png" />} label="4.0" />
                  </div>
                  <Carousel
                    className={styles['carousel']}
                    autoPlay={true}
                    IndicatorIcon={<div className={styles['carousel-indicator']}/>}
                    activeIndicatorIconButtonProps={{
                      style: {
                        marginRight: '5px',
                        backgroundColor: '#357EFE',
                        borderRadius: '21px',
                      }
                  }}
                  >
                    {carouselItems.map((item, index) => (
                      <Item key={index} item={item} />
                    ))}
                  </Carousel>
                </div>
                <Box className={styles['carousel-info']}>
                  <Box className={styles['carousel-user-photo-name-action-icons']}>
                    <Box className={styles['carousel-user-photo-name-icons']}>
                      <Image
                        className={styles['carousel-user-photo']}
                        src="/userPhoto.png"
                        alt="User photo"
                        width={65}
                        height={65}
                      />
                      <Box className={styles['carousel-user-name-icons']}>
                        <b>Faisal R.</b>
                        <Box className={styles['carousel-user-icons']}>
                          <IconButton className={styles['carousel-user-icon-button']}>
                            <Image
                              className={styles['carousel-user-icon']}
                              src="/wildberries.png"
                              alt="Wildberries"
                              width={16}
                              height={16}
                            />
                          </IconButton>
                          <IconButton className={styles['carousel-user-icon-button']}>
                            <Image
                              className={styles['carousel-user-icon']}
                              src="/ozon.png"
                              alt="Ozon"
                              width={16}
                              height={16}
                            />
                          </IconButton>
                          <IconButton className={styles['carousel-user-icon-button']}>
                            <Image
                              className={styles['carousel-user-icon']}
                              src="/lamoda.png"
                              alt="Lamoda"
                              width={16}
                              height={16}
                            />
                          </IconButton>
                          <IconButton className={styles['carousel-user-icon-button']}>
                            <Image
                              className={styles['carousel-user-icon']}
                              src="/yandex.png"
                              alt="Yandex market"
                              width={16}
                              height={16}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles['carousel-action-icons']}>
                      <IconButton className={styles['action-icon-button']}>
                        <Image
                          src="/pencil.png"
                          alt="Edit"
                          width={24}
                          height={24}
                        />
                      </IconButton>
                      <IconButton className={styles['action-icon-button']}>
                        <Image
                          src="/bin.png"
                          alt="Delete"
                          width={24}
                          height={24}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <div>Сертификаты/декларации для таможни и торговли. Низкие цены. Официально</div>
                  <Box className={styles['carousel-info-hours-days-price']}>
                    <Box className={styles['carousel-info-hours-days']}>
                      <div className={styles['icon-hours']}>
                        <Image
                          src="/message.png"
                          alt="Message"
                          width={14}
                          height={14}
                        />
                        <p>3 часа</p>
                      </div>
                      <div className={styles['icon-days']}>
                        <Image
                          src="/clock.png"
                          alt="Clock"
                          width={14}
                          height={14}
                        />
                        <p>2 дн.</p>
                      </div>
                    </Box>
                    <Typography variant="h4" component={"p"}>2555 ₽</Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Отзывы
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h4" className={styles['user-info-header']}>Описание</Typography>
            <Typography className={styles['user-info-description']}>Привет! Я UI/UX дизайнер. Мне нравится создавать красивые интерфейсы для сайтов и мобильных приложений. Мой опыт работы в этой сфере около года. Я эксперт в Figma. Для параллельной работы использую Adobe Photoshop и Adobe Illustrator.‎ Я буду полностью управлять вашим заданием от начала до конца. Все правки бесплатны. Я сделаю все, чтобы повысить конверсию ваших продаж!</Typography>
            <br></br>
            <Divider />
            <Typography variant="h4" className={styles['user-info-header']}>Образование</Typography>
            <Typography variant="h5"><b>Университет</b></Typography>
            <Typography className={styles['user-info-description']}>БНТУ, Факультет маркетинга</Typography>
            <Typography variant="h5"><b>Курсы</b></Typography>
            <Typography className={styles['user-info-description']}>IT-Academy, “Профессиональный курс Ui/UX Designer</Typography>
            <br></br>
            <Divider />
            <Typography variant="h4" className={styles['user-info-header']}>Личный веб-сайт</Typography>
            <Typography variant="h5" className={styles['user-info-description']}>Behance</Typography>
            <Link className={styles['user-info-link']} href="#">https://mypersonality832.com</Link>
          </TabPanel>
        </Box>
        <Box className={styles['user-info-wrapper']}>
          <Card className={styles['user-info-card']} variant="outlined">
            <div className={styles['user-info-photo-name-rating']}>
              <div className={styles['user-info-photo-wrapper']}>
                <Image
                  className={styles['user-info-photo']}
                  src="/userPhoto.png"
                  alt="User photo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Typography variant="h4">Faisal R.</Typography>
                <div className={styles['rating-wrapper']}>
                  <Rating name="read-only" value={5} readOnly />
                  <Typography className={styles['rating-gold-number']}>5</Typography>
                  <Typography className={styles['rating-feedback-number']}>(84)</Typography>
                </div>
              </div>
            </div>
            <Divider></Divider>
            <div className={styles['user-info']}>
              <Typography>Участник с</Typography>
              <Typography><b>21.09.2021</b></Typography>
            </div>
            <div className={styles['user-info']}>
              <Typography>Отвечает в течение</Typography>
              <Typography><b>1-3 ч.</b></Typography>
            </div>
            <Container>
              <Button
                className={styles["user-info-edit-button"]}
                color="primary"
                variant="contained"
                endIcon={
                  <Image
                    src="/whitePencil.png"
                    alt="Edit"
                    width={24}
                    height={24}
                  />
                }
              >Редактировать</Button>
            </Container>
          </Card>
          <Card className={styles['order-info-card']} variant="outlined">
            <div className={styles['order-info']}>
              <div className={styles['order-icon-info']}>
                <Image
                  src="/clock.png"
                  alt="Clock"
                  width={14}
                  height={14}
                />
                <Typography>Возьмется за заказ</Typography>
              </div>
              <Typography><b>1-3 дня</b></Typography>
            </div>
            <div className={styles['order-info']}>
              <div className={styles['order-icon-info']}>
                <Image
                  src="/percent.png"
                  alt="Clock"
                  width={14}
                  height={13.5}
                />
                <Typography className={styles['order-text']}>Закажите 30 слайдов и получите скидку</Typography>
              </div>
              <Typography><b>30%</b></Typography>
            </div>
            <Box className={styles['order-icons']}>
              <IconButton className={styles['order-icons-button']}>
                <Image
                  className={styles['order-icon']}
                  src="/wildberries.png"
                  alt="Wildberries"
                  width={32}
                  height={32}
                />
              </IconButton>
              <IconButton className={styles['order-icons-button']}>
                <Image
                  className={styles['order-icon']}
                  src="/ozon.png"
                  alt="Ozon"
                  width={32}
                  height={32}
                />
              </IconButton>
              <IconButton className={styles['order-icons-button']}>
                <Image
                  className={styles['order-icon']}
                  src="/yandex.png"
                  alt="Yandex market"
                  width={32}
                  height={32}
                />
              </IconButton>
              <IconButton className={styles['order-icons-button']}>
                <Image
                  className={styles['order-icon']}
                  src="/shop4.png"
                  alt="Shop"
                  width={32}
                  height={32}
                />
              </IconButton>
              <IconButton className={styles['order-icons-button']}>
                <Image
                  className={styles['order-icon']}
                  src="/lamoda.png"
                  alt="Lamoda"
                  width={32}
                  height={32}
                />
              </IconButton>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
