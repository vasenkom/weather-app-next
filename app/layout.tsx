import { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "./_lib/components/providers/ThemeProvider";
import { UnitsProvider } from "./_lib/components/providers/UnitsProvider";

interface LayoutProp {
    children: ReactNode
}

export default function Layout({children}: LayoutProp) {
    return (
        <html>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <UnitsProvider>
                        {children}
                    </UnitsProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}