'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';
import './styles.css';

export default function DashboardLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
