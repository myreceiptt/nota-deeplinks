import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me for The Profit - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Untuk mewujudkan idenya tersebut, Tony dibantu dua orang kreatif yang ahli di bidangnya. Ada Afietadi ’’Mamak’’ Kurniawan sebagai content development and digital strategy."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://www.jawapos.com/features/01149944/bermain-sambil-belajar-metode-berbisnis-dengan-aplikasi-the-profit-game?page=2#:~:text=Untuk%20mewujudkan%20idenya%20tersebut%2C%20Tony%20dibantu%20dua%20orang%20kreatif%20yang%20ahli%20di%20bidangnya.%20Ada%20Afietadi%20%E2%80%99%E2%80%99Mamak%E2%80%99%E2%80%99%20Kurniawan%20sebagai%20content%20development%20and%20digital%20strategy.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <h1 className={styles.title}>
          Me for The Profit
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://www.jawapos.com/features/01149944/bermain-sambil-belajar-metode-berbisnis-dengan-aplikasi-the-profit-game?page=2#:~:text=Untuk%20mewujudkan%20idenya%20tersebut%2C%20Tony%20dibantu%20dua%20orang%20kreatif%20yang%20ahli%20di%20bidangnya.%20Ada%20Afietadi%20%E2%80%99%E2%80%99Mamak%E2%80%99%E2%80%99%20Kurniawan%20sebagai%20content%20development%20and%20digital%20strategy." target="_blank">
            Bermain sambil Belajar Metode Berbisnis dengan Aplikasi The Profit Game
          </a>
        </p>

        <social>
          <code>jawapos.com</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://www.jawapos.com/features/01149944/bermain-sambil-belajar-metode-berbisnis-dengan-aplikasi-the-profit-game?page=2#:~:text=Untuk%20mewujudkan%20idenya%20tersebut%2C%20Tony%20dibantu%20dua%20orang%20kreatif%20yang%20ahli%20di%20bidangnya.%20Ada%20Afietadi%20%E2%80%99%E2%80%99Mamak%E2%80%99%E2%80%99%20Kurniawan%20sebagai%20content%20development%20and%20digital%20strategy."
            className={styles.card}
            target="_blank"
          >
            <h3>Bermain sambil Belajar... &rarr;</h3>
            <p>...Tony dibantu dua orang kreatif yang ahli di bidangnya. Ada Afietadi ’’Mamak’’ Kurniawan sebagai content development and digital strategy.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://iqraa.straight-line.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/1.47.svg" alt="Prof. NOTA v.1.47" className={styles.logo} />
          {" "}© All rights belong to Prof. NOTA ©{" "}
          <img src="/1.47.svg" alt="Prof. NOTA v.1.47" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 4.7rem 0 1.47rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        social {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: x-small;
        }
        @media (min-width: 425px) {
          footer {
            font-size: small;
          }
        }
        @media (min-width: 640px) {
          footer {
            font-size: medium;
          }
        }
        footer img {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        footer a:hover {
          color: yellow;
          text-decoration: underline;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Fira Code, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Fira Code, monospace;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
