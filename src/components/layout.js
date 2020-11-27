import React from "react"
import Navbar from '../components/navbar';
import SocialMediaBar from "../components/social-media-bar";
import { Helmet } from 'react-helmet'

export default function Layout({ children }) {
  return <>
    <Helmet title="XING">
        <html lang="en" />
        <meta name="description" content='Artist page for the musician XING' />
    </Helmet>
    <Navbar />
    <main>
      {children}
    </main>
    <SocialMediaBar />
    </>;
}

export function Layout_404({children}) {
  return <>
    <Helmet title="XING">
        <html lang="en" />
        <meta name="description" content='Artist page for the musician XING' />
    </Helmet>
    <main>
      {children}
    </main>
    <SocialMediaBar />
    </>;
}