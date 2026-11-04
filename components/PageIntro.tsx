import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export function PageIntro({eyebrow, title, children}: {eyebrow: string; title: string; children: ReactNode}) {
 return <header className="page-intro wrap"><Link href="/#home" className="back-home"><ArrowLeft size={15}/>Back to Home</Link><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-lead">{children}</div></header>;
}
