export interface BreadcrumbsProps {
  links: PageLink[];
}

export type PageLink = {
  href: string;
  name: string;
};
