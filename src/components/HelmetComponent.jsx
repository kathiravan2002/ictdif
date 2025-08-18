import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="ICTDIF, International Conference on Technology and Data Innovations for the Future, technology conference, data innovations, AI conference, machine learning, big data, cloud computing, digital transformation, IoT, blockchain, data science, smart technologies, academic conference, research papers, call for papers" />
      <meta name="description" content="The International Conference on Technology and Data Innovations for the Future 2025 unites researchers, professionals, and innovators to discuss cutting-edge advancements in technology, data science, and future digital ecosystems." />
      <meta name="author" content="ICTDIF Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Conference on Technology and Data Innovations for the Future" />
      <meta property="og:description" content="The International Conference on Technology and Data Innovations for the Future 2025 unites researchers, professionals, and innovators to discuss cutting-edge advancements in technology, data science, and future digital ecosystems." />
      <meta property="og:url" content="https://ictdif.com/" />
      <meta property="og:image" content="https://ictdif.com/asset/images/ICTDIF white.png" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="https://ictdif.com/asset/images/ICTDIF Fav.png" />
    </Helmet>
  )
}

export default HelmetComponent