import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solar System',
    description: 'Model Układu Słonecznego',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pl'>
            <body>{children}</body>
        </html>
    );
}

