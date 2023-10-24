import Head from "next/head"

const Meta = ({
  title,
  keywords,
  description,
  author,
  ogType,
  ogImage,
  twitterUsername,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/flo.ico" />
      <title>{title}</title>
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      {/* Other meta tags */}
      <meta name="author" content={author} />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Kelvin Yelyen",
  keywords:
    "Software Engineer, Research Software Engineer, Designer, Software Engineering, Technology, Design, Artificial Intelligence, Cognitive Science, Computational Cognitive Science, Science and Technology, Full-Stack Engineering, Product Design, Graphic Design, Ghana, Africa",
  description:
    "Software engineer and designer based in Ghana, passionate about utilizing science and technology to create innovative solutions.",
  author: "Kelvin Yelyen",
  ogType: "website",
  ogImage: "/og-image.png",
  twitterUsername: "@kelvinyelyen",
}

export default Meta
