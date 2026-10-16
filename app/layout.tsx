import './globals.css';import type {Metadata} from 'next';
export const metadata:Metadata={title:'MyJobstek | Technical Careers in Malaysia',description:'Technical recruitment, placement and immigration consultancy in Malaysia'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
