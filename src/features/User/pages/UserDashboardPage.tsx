import {useNavigate} from "react-router-dom";
import {Card, Typography} from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Link from "antd/lib/typography/Link";
import React from "react";
import {DonkeyIntegration} from "../components/DonkeyIntegration";

export const UserDashboardPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Card style={{maxWidth: "500px", ...styles.card}}>
                <Typography>
                    <Title>Reservation</Title>
                    <Paragraph>
                        <blockquote style={styles.blockquote}> Пожалуйста, не закрывайте этот экран, пока не закончите свою работу или процесс,
                            который будет запущен.
                        </blockquote>
                    </Paragraph>
                </Typography>
            </Card>

            <Card style={{...styles.card, ...styles.styleCard}}>
                <DonkeyIntegration/>
            </Card>

            <Card style={styles.card}>
                <Typography>
                    <Paragraph>
                        Если у вас есть другие вопросы или если вам нужна помощь в ознокомьтесь с документацией сайта
                        переходя по <Link onClick={() => navigate("/manual")}>ссылке</Link>
                    </Paragraph>
                    <Paragraph>
                        Что бы выйти из акаунта <Link onClick={() => {}}>нажмите на ссылку</Link>
                    </Paragraph>
                </Typography>
            </Card>
        </>
    );
};



const styles = {
    card: {minWidth: "40vw", border: "none"},
    blockquote: {borderLeftColor: "orange"},
    styleCard: {
        marginTop: "3em",
        marginBottom: "3em",
        backgroundColor: "rgba(0,0,0,0.07)"
    }
}