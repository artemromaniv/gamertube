import "../styles/globals.css";
import Image from "next/image";
import ReactQueryWrapper from "./ReactQueryWrapper";
import Logo from "../assets/Logo.svg";
import Search from "../components/Search";
import Link from "next/link";
type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="device-width, initial-scale=1.0" />
      </head>
      <ReactQueryWrapper>
        <body>
          <header className="header">
            <Link href={"/"}>
              <Image
                src="/Logo.svg"
                height={16}
                width={120}
                alt=""
                className="logo"
              />
            </Link>

            <nav className="nav_container">
              <Link href={"/"}>HOME</Link>
              <Link href={"/reviews"}>REVIEWS</Link>
              <div className="search_desktop">
                <Search />
              </div>
            </nav>
          </header>
          {children}
        </body>
      </ReactQueryWrapper>
    </html>
  );
};

export default RootLayout;
