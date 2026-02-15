'use client';

import Link from "next/link";
import {
  Layout,
  Typography,
  Space,
  Card,
  Row,
  Col,
  Tag,
} from "antd";
import {
  BookOutlined,
  VideoCameraOutlined,
  CheckSquareOutlined,
  BarChartOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  MessageOutlined,
  ArrowRightOutlined,
  StarFilled,
} from "@ant-design/icons";
import styles from "./landing.module.scss";
import {Button} from "@/shared/ui";
import clsx from "clsx";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const features = [
  { icon: <VideoCameraOutlined />, title: "Видео-уроки", desc: "Звонки, чат и демонстрация экрана (MVP — позже расширим)." },
  { icon: <CheckSquareOutlined />, title: "Домашка", desc: "Назначить → сдать → проверить. Файлы и комментарии." },
  { icon: <BarChartOutlined />, title: "Аналитика", desc: "Уроки, домашки, последняя активность — без лишнего." },
  { icon: <CalendarOutlined />, title: "Запись по слотам", desc: "Репетитор задаёт availability, студент бронирует 60 минут." },
  { icon: <MessageOutlined />, title: "Сообщения", desc: "1:1 чат репетитор ↔ ученик + файлы. Один чат на все уроки" },
  { icon: <SafetyCertificateOutlined />, title: "Антиспам-лимиты", desc: "≤3 активных бронирования, ≤6 уроков/неделя (настраивается)." },
];

export function Landing() {
  return (
    <Layout className={styles.page}>
      <Content>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <Tag className={styles.pill}>Платформа-инфраструктура для репетиторов</Tag>

            <Title className={styles.heroTitle}>
              Всё для занятий в одном месте:
              <p className={styles.primary}>
                Для одиночных репетиторов
              </p>
            </Title>


            <Paragraph className={styles.heroText}>
              Видеоуроки, управление домашними заданиями, аналитика по ученикам и
              проверенный маркетплейс — всё в одной профессиональной и надёжной платформе.
            </Paragraph>

            <Space size="middle" className={styles.heroActions} wrap>
              <Link href="/signup">
                <Button intent="primary" uiSize="md" iconRight={<ArrowRightOutlined/>}>
                  Стать репетитором
                </Button>
              </Link>
              <Link href="#features">
                <Button intent={'outline'} uiSize="md">Найти репетитора</Button>
              </Link>
            </Space>

            {/*<div className={styles.heroStats}>*/}
            {/*  <div className={styles.stat}>*/}
            {/*    <Text className={styles.statValue}>≤ 3</Text>*/}
            {/*    <Text className={styles.statLabel}>активных брони</Text>*/}
            {/*  </div>*/}
            {/*  <div className={styles.stat}>*/}
            {/*    <Text className={styles.statValue}>60 мин</Text>*/}
            {/*    <Text className={styles.statLabel}>слот урока</Text>*/}
            {/*  </div>*/}
            {/*  <div className={styles.stat}>*/}
            {/*    <Text className={styles.statValue}>Freemium</Text>*/}
            {/*    <Text className={styles.statLabel}>для старта</Text>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <Title level={2} className={styles.sectionTitle}>Всё, что нужно для эффективной работы</Title>
              <Paragraph className={styles.sectionDesc}>
                Единая платформа для современного репетиторства со всеми необходимыми инструментами.
              </Paragraph>
            </div>

            <Row gutter={[16, 16]}>
              {features.map((f) => (
                <Col key={f.title} xs={24} sm={12} lg={8}>
                  <Card className={styles.featureCard} variant={'outlined'}>
                    <div className={styles.featureIcon}>{f.icon}</div>
                    <Title level={4} className={styles.featureTitle}>{f.title}</Title>
                    <Paragraph className={styles.featureDesc}>{f.desc}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <Title level={2} className={styles.sectionTitle}>
                Как это работает
              </Title>
              <Paragraph className={styles.sectionDesc}>
                Логика MVP: студент сам выбирает слот для занятия, репетитор подтверждает.
              </Paragraph>
            </div>

            <div className={styles.howGrid}>
              {/* FOR TUTORS */}
              <div>
                <Title level={4} className={styles.howTitle}>
                  Для репетиторов
                </Title>

                <ul className={styles.stepsList}>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>1</span>
                    <div>
                      <b>Создаёшь профиль</b>
                      <p>Предметы, опыт, цена и доступность.</p>
                    </div>
                  </li>

                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>2</span>
                    <div>
                      <b>Проходишь верификацию</b>
                      <p>Повышает доверие и видимость.</p>
                    </div>
                  </li>

                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>3</span>
                    <div>
                      <b>Принимаешь бронирования</b>
                      <p>Студенты выбирают слоты из твоего расписания.</p>
                    </div>
                  </li>

                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>4</span>
                    <div>
                      <b>Проводишь занятия</b>
                      <p>Уроки, домашка и аналитика — в одном месте.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* FOR STUDENTS */}
              <div>
                <Title level={4} className={styles.howTitle}>
                  Для учеников
                </Title>

                <ul className={styles.stepsList}>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>1</span>
                    <div>
                      <b>Находишь репетитора</b>
                      <p>По предмету, цене и доступности.</p>
                    </div>
                  </li>

                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>2</span>
                    <div>
                      <b>Бронируешь занятие</b>
                      <p>Выбираешь слот и отправляешь запрос.</p>
                    </div>
                  </li>

                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>3</span>
                    <div>
                      <b>Посещаешь уроки</b>
                      <p>Онлайн-занятия с репетитором.</p>
                    </div>
                  </li>

                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>4</span>
                    <div>
                      <b>Сдаёшь и получаешь проверку</b>
                      <p>Домашка, прогресс и обратная связь.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <Row id='pricing' gutter={[16, 16]} justify="center" className={styles.pricingRow}>
          <Col xs={24} sm={20} md={12} lg={8} xl={7}>
            <Card className={styles.pricingCard}>
              <div className={styles.pricingTop}>
                <div>
                  <Title level={3} className={styles.pricingTitle}>Free</Title>
                  <Text className={styles.pricingSub}>до ~3 учеников</Text>
                </div>
                <Tag color="processing" className={styles.pricingTag}>
                  <StarFilled /> Freemium
                </Tag>
              </div>

              <ul className={styles.pricingList}>
                <li>Запись по слотам + лимиты</li>
                <li>Домашка и комментарии</li>
                <li>Сообщения 1:1</li>
                <li>Analytics-lite</li>
              </ul>

              <Link href="/signup">
                <Button intent="primary" uiSize={'sm'} block>
                  Зарегистрироваться
                </Button>
              </Link>

              <Text className={styles.pricingNote}>
                Для всех пользователей.
              </Text>
            </Card>
          </Col>

          {/* Premium */}
          <Col xs={24} sm={20} md={12} lg={8} xl={7}>
            <Card className={styles.pricingCardPremium}>
              <div className={styles.pricingTop}>
                <div>
                  <Title level={3} className={styles.pricingTitle}>Premium</Title>
                  <Text className={styles.pricingSub}>500 ₽ / месяц</Text>
                </div>
                <Tag className={styles.premiumTag}>
                  <StarFilled /> Рекомендуем
                </Tag>
              </div>

              <ul className={styles.pricingList}>
                <li>Больше учеников и уроков в неделю</li>
                <li>Расширенная статистика и прогресс</li>
                <li>Приоритетные настройки расписания</li>
                <li>Всё из Free</li>
              </ul>

              <Link href="/signup">
                <Button intent="secondary" uiSize="sm" block>
                  Подключить Premium
                </Button>
              </Link>

              <Text className={styles.pricingNote}>
                Можно отключить в любой момент.
              </Text>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div>
              <Title level={2} className={styles.ctaTitle}>Готовы начать?</Title>
              <Paragraph className={styles.ctaText}>
                Присоединяйтесь к репетиторам и ученикам, которые уже используют EduVix для достижения учебных целей.
              </Paragraph>
            </div>
            <Space size={20} wrap className={styles.spaceCTA}>
              <Link href="/signup">
                <Button intent="secondary" uiSize="sm" iconRight={<ArrowRightOutlined/>}>
                  Преподавать
                </Button>
              </Link>
              <Link href="/signin">
                <Button uiSize="sm">Учиться</Button>
              </Link>
            </Space>
          </div>
        </section>
      </Content>
    </Layout>
  );
}
