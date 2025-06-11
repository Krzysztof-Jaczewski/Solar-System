import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar System',
    description: 'Model Układu Słonecznego',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='pl'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
