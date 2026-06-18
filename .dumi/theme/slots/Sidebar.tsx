import { WarningLine } from '@mingcute/react';
import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import type { ReactElement } from 'react';
import 'dumi/theme-default/slots/Sidebar/index.less';
import './Sidebar.less';

type SidebarChild = {
  title: string;
  link: string;
  frontmatter?: {
    docStatus?: 'risky';
    toc?: boolean | 'content' | 'menu';
  };
};

function UnreadyIcon(): ReactElement {
  return (
    <span className="pear-sidebar-status" title="Not ready">
      <WarningLine />
    </span>
  );
}

export default function Sidebar() {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  return (
    <div className="dumi-default-sidebar">
      {sidebar.map((item, i) => (
        <dl className="dumi-default-sidebar-group" key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => {
            const item = child as SidebarChild;
            const unready = item.frontmatter?.docStatus === 'risky';

            return (
              <dd key={child.link}>
                <NavLink to={child.link} title={child.title} end>
                  <span className="pear-sidebar-link">
                    <span className="pear-sidebar-link-title">
                      {child.title}
                    </span>
                    {unready && <UnreadyIcon />}
                  </span>
                </NavLink>
                {child.link === pathname && meta.frontmatter.toc === 'menu' && (
                  <Toc />
                )}
              </dd>
            );
          })}
        </dl>
      ))}
    </div>
  );
}
