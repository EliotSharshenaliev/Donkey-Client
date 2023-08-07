import React from 'react';
import {Card, Typography} from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Link from "antd/lib/typography/Link";
import {useNavigate} from "react-router-dom";

export const InstructionPage = () => {
    const navigate = useNavigate()
    return (
        <Card style={{minWidth: "40vw", maxWidth: "500px", border: "none"}}>
            <Typography>
                <Title>Инструкция</Title>
                <Paragraph>
                    К сожалению, я не могу посетить этот веб-сайт, так как у меня нет доступа к авторизованным пользователем на уровне superuser.
                </Paragraph>

                <Paragraph>

                    Моя функциональность ограничена и предназначена для предоставления информации и помощи в общих вопросах.
                    Однако, если у вас возникли проблемы с доступом к этому веб-сайту, рекомендуется обратиться к специалистам данного сайта для получения необходимой помощи. Они смогут просмотреть ваш запрос и предоставить подробную информацию о доступе и правах,
                    а также помочь решить возникшие проблемы.
                </Paragraph>

                <Paragraph>
                    Если у вас есть другие вопросы или если вам нужна помощь в других областях, я буду рад помочь в рамках своих возможностей.
                    Для возврата на предыдущую страницу нажмите <Link onClick={() => navigate("/")}>сюда</Link>
                </Paragraph>
            </Typography>
        </Card>
    );
};
