import { ReactNode } from "react";
import "./globals.css";

interface LayoutProp {
    children: ReactNode
}

export default function Layout({children}: LayoutProp) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}