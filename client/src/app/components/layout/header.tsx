import { cn } from '@utils/cn';
import CustomBreadcrumb from './breadcrumb';
import UpperDiv from './upper/upperDiv';
import BelowDiv from './below/belowDiv';

const Header = () => {
  return (
    <section className={cn('font-pretendard')}>
      <UpperDiv />
      <BelowDiv />
      <CustomBreadcrumb />
    </section>
  );
};

export default Header;
