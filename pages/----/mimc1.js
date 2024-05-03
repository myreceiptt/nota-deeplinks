import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me in My Campus - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Nah, tugas kita adalah mendesain bentuk dan banyaknya udara yang dikompresikan, sehingga dapat mencapai target yang telah ditetapkan panitia, ujar Afietadi atau yang lebih akrab dipanggil Mamak."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://www.its.ac.id/news/2005/03/15/tim-wrc-2004-d3-mesin-its-dapat-standing-appaluse-usai-peluncuran/#:~:text=Nah%2C%20tugas%20kita%20adalah%20mendesain%20bentuk%20dan%20banyaknya%20udara%20yang%20dikompresikan%2C%20sehingga%20dapat%20mencapai%20target%20yang%20telah%20ditetapkan%20panitia%2C%22%20ujar%20Afietadi%20atau%20yang%20lebih%20akrab%20dipanggil%20Mamak.'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <Analytics/>
        <h1 className={styles.title}>
          Me in My Campus
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://www.its.ac.id/news/2005/03/15/tim-wrc-2004-d3-mesin-its-dapat-standing-appaluse-usai-peluncuran/#:~:text=Nah%2C%20tugas%20kita%20adalah%20mendesain%20bentuk%20dan%20banyaknya%20udara%20yang%20dikompresikan%2C%20sehingga%20dapat%20mencapai%20target%20yang%20telah%20ditetapkan%20panitia%2C%22%20ujar%20Afietadi%20atau%20yang%20lebih%20akrab%20dipanggil%20Mamak." target="_blank">
            Tim WRC 2004 D3 Mesin ITS, Dapat Standing Applause Usai Peluncuran
          </a>
        </p>

        <social>
          <code>its.ac.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://www.its.ac.id/news/2005/03/15/tim-wrc-2004-d3-mesin-its-dapat-standing-appaluse-usai-peluncuran/#:~:text=Nah%2C%20tugas%20kita%20adalah%20mendesain%20bentuk%20dan%20banyaknya%20udara%20yang%20dikompresikan%2C%20sehingga%20dapat%20mencapai%20target%20yang%20telah%20ditetapkan%20panitia%2C%22%20ujar%20Afietadi%20atau%20yang%20lebih%20akrab%20dipanggil%20Mamak."
            className={styles.card}
            target="_blank"
          >
            <h3>Tim WRC 2004... &rarr;</h3>
            <p>"...sehingga dapat mencapai target yang telah ditetapkan panitia," ujar Afietadi atau yang lebih akrab dipanggil Mamak.</p>
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
