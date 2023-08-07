import React, { ReactNode, CSSProperties } from 'react';

type BackgroundProps = {
    style: CSSProperties;
    children: ReactNode;
};

export const BackgroundImage: React.FC<BackgroundProps> = ({ style, children }) => {
    return (
        <div style={style}>
            {children}
        </div>
    );
};