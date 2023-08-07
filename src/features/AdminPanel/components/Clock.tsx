import React from 'react';
import Title from "antd/lib/typography/Title";

export const Clock = () => {
    const [hours, setHours] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)

    const update_timer = () => {
        const time = new Date()
        const hours = time.getHours()
        const minutes = time.getMinutes()
        setHours(hours);
        setMinutes(minutes)
    }

    React.useEffect(() => {
        update_timer()
        const interval = setInterval(update_timer, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const time = React.useMemo(() => {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
    }, [minutes, hours])

    return (
        <Title level={2} style={{margin: 16}}>
            {time}
        </Title>
    );
};

