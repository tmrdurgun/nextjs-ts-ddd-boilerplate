import type { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { withTranslation } from 'next-i18next';

type T = {
  t: Function
};

const Header: FC<T> = ({t}) => {
  const router = useRouter();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  
  return (
    <header>
      HEADER! {t('Hoşgeldiniz')}

      <nav>
        <Link href="/">
          <a className={router.asPath === "/" ? "active" : ""}> {t('Giriş Yap', {ns: 'header'})}</a>
        </Link>

        <Link href="/">
          <a className={router.asPath === "/" ? "active" : ""}> {t('Kayıt Ol', {ns: 'header'})}</a>
        </Link>
      </nav>

      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </header>
  );
};

export default withTranslation(['common', 'header'])(Header);
