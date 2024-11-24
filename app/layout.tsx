import React from "react";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "My top",
  description: "Описание вашего приложения",
};

const openSans = Open_Sans({ subsets: ["latin"] });

// Определяем интерфейс для пропсов
interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={openSans.className}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/"}>Главная</Link>
            </li>
            <li>Курсы</li>
            <li>Для детей</li>
            <li>
              <Link href={"/about"}>О нас</Link>
            </li>
            <li>
              <a href={"/products/typescript"}>Продукт 1</a>
            </li>
            <li>
              <Link href={"/aboutsdfsdf"}>О нас 3</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
