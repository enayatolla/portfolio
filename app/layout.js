import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "enayatulla rezaie",
    description:
        "Enayatulla Rezaie is a passionate software developer with expertise in web development, mobile app development, and machine learning. With a strong background in programming languages such as JavaScript, Python, and Java, Enayatulla has successfully delivered numerous projects across various industries. He is dedicated to creating innovative solutions that drive business growth and enhance user experiences. Enayatulla's commitment to continuous learning and staying updated with the latest technologies makes him a valuable asset in the ever-evolving tech landscape.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
