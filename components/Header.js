import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const StyledHeadline = styled.h1`
  margin: 0;
`;

const StyledLogo = styled(Image)`
  width: 130px;
  height: auto;
  padding-block: 2px;
`;

export default function Header() {
  return (
    <>
      <Head>
        <title key="title">My Guitar Chords</title>
        <meta
          name="description"
          content="My Guitar Chords is a simple app to help you collect and organize the guitar chords you want to learn or improve"
          key="description"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:title" content="My Guitar Chords" key="og-title" />
        <meta
          property="og:description"
          content="My Guitar Chords is a simple app to help you collect and organize the guitar chords you want to learn or improve"
          key="og-description"
        />
      </Head>
      <header>
        <Link href="/">
          <StyledHeadline aria-label="My Guitar Chords">
            <StyledLogo
              src="/images/myGrocery.svg"
              width={300}
              height={300}
              alt="Logo"
            ></StyledLogo>
          </StyledHeadline>
        </Link>
      </header>
    </>
  );
}
