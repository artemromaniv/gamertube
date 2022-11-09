import '../styles/globals.css'

import ReactQueryWrapper from "./ReactQueryWrapper";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head></head>
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
