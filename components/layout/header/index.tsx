import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';

const Header = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  const handleLocaleChange = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  
  return (
    <header>
      HEADER!

      <nav>
        <Link href="/">
          <a className={router.asPath === "/" ? "active" : ""}>{t('Hoşgeldiniz')}</a>
        </Link>
      </nav>

      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </header>
  );
};
export default Header;
