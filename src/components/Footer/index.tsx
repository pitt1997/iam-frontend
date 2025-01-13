import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { PLANET_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = '蚂蚁集团体验技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: 'IAM',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/pitt1997',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: 'pitt1997',
          href: 'https://github.com/pitt1997',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
