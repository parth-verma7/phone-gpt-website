import type { ReactNode } from 'react';
export function PageIntro({eyebrow, title, children}: {eyebrow: string; title: string; children: ReactNode}) {
 return <header className="page-intro wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-lead">{children}</div></header>;
}
