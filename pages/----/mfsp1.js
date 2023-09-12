import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Redirect() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Failed Side Project - Deep Links Redirection</title>
        <link rel="icon" href="/1.47.png" />
        <link rel="apple-touch-icon" href="/1.47.png" />
        <link rel="shortcut icon" href="/1.47.png" />
        <meta
          name="description"
          content="Kharis Junandharu dari Moso’iki Records mengajak Mamak Kurniawan untuk bereksperimen membuat platform panggung digital, yang tidak menggantungkan pemasukannya dari donasi dan bersifat inklusif pada semua genre musik yang ada."
        />
        <meta name="author" content="! Prof. NOTA !" />
        <meta
          name="keywords"
          content="the melting land, linktree, prof. nota, uncertified professor, my receipt, myreceipt, blockchain, web3, smart contract, retired developer, non-fungible token, nonfungible token, nft, ethereum, polygon, tezos, solana, bitcoin,"
        />
        <meta httpEquiv="Refresh" content="7; url='https://memorandum.disway.id/read/13309/menolak-mati-di-tengah-pandemi-kukuh-berkarya-di-masa-karantina#:~:text=Kharis%20Junandharu%20dari%20Moso%E2%80%99iki%20Records%20mengajak%20Mamak%20Kurniawan%20untuk%20bereksperimen%20membuat%20platform%20panggung%20digital%2C'" />
        <meta name="robots" content="noindex,nofollow" />
        
      </Head>

      <main>
        <h1 className={styles.title}>
          My Failed Side Project
        </h1>

        <p className={styles.description}>
          Redirecting to:<br />
          <a href="https://memorandum.disway.id/read/13309/menolak-mati-di-tengah-pandemi-kukuh-berkarya-di-masa-karantina#:~:text=Kharis%20Junandharu%20dari%20Moso%E2%80%99iki%20Records%20mengajak%20Mamak%20Kurniawan%20untuk%20bereksperimen%20membuat%20platform%20panggung%20digital%2C" target="_blank">
            Menolak Mati di Tengah Pandemi, Kukuh Berkarya di Masa Karantina
          </a>
        </p>

        <social>
          <code>memorandum.disway.id</code>
        </social>

        <div className={styles.grid}>
          <a
            href="https://memorandum.disway.id/read/13309/menolak-mati-di-tengah-pandemi-kukuh-berkarya-di-masa-karantina#:~:text=Kharis%20Junandharu%20dari%20Moso%E2%80%99iki%20Records%20mengajak%20Mamak%20Kurniawan%20untuk%20bereksperimen%20membuat%20platform%20panggung%20digital%2C"
            className={styles.card}
            target="_blank"
          >
            <h3>Menolak Mati di Tengah... &rarr;</h3>
            <p>Kharis Junandharu dari Moso’iki Records mengajak Mamak Kurniawan untuk bereksperimen membuat platform panggung digital...</p>
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
