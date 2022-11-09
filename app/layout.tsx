import '../styles/globals.css'

import ReactQueryWrapper from "./ReactQueryWrapper";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <meta name='viewport' content='device-width, initial-scale=1.0' />
      </head>
      <body>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
