import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
  return (
    <>
      <Head>
        <title>SilMo.jp</title>
        <meta
          name="description"
          content="フリーランスエンジニア・清水陽平のホームページ"
        />
      </Head>
      <main>{children}</main>
    </>
  );
}
