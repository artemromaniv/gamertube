import "../styles/globals.css";
import Image from "next/image";
import ReactQueryWrapper from "./ReactQueryWrapper";
import LogoText from "../assets/LogoText.svg";
import Search from '../components/Search'
type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="device-width, initial-scale=1.0" />
      </head>
      <body>
        <header className='header'>
          <Image src={LogoText} alt="" className='logo' />
          <div className='search_desktop'>
            <Search />
          </div>
        </header>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
