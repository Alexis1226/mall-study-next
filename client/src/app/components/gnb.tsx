'use client';
// import '../../../public/fonts/DAYLIFE-DAY.ttf';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Gnb = () => {
  const pathname = usePathname();

  return (
    <nav className="gnb">
      <div id="mall">
        <Link href="/products">MALL</Link>
      </div>
      <ul>
        {/* <li>
          <Link href="/" className={pathname === '/' ? 'afterEffect' : ''}>
            홈
          </Link>
        </li> */}
        <li>
          <Link href="/products" className={pathname === '/products' ? 'afterEffect' : ''}>
            상품목록
          </Link>
        </li>
        <li>
          <Link href="/cart" className={pathname === '/cart' ? 'afterEffect' : ''}>
            장바구니
          </Link>
        </li>
        <li>
          <Link href="admin" className={pathname === '/admin' ? 'afterEffect' : ''}>
            어드민
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
