import Head from "next/head";

const Meta = ({
  title = "Shashi",
  name = "P Shashikumar",
  description = "I'm Shashi, a student developer from India passionate about delivering simple, efficient, and easy-to-use creations of technology.",
  url = "https://www.shashikumar.me",
  image = "https://www.shashikumar.me/seo.jpg",
}) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" type="image/ico" href="/favicon.ico" />

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content="developer, dev, student, India" />
    <meta name="author" content={name} />
    <meta name="url" content={url} />
    <meta name="theme-color" content="#000000" />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image" content={image} />
  </Head>
);

export default Meta;
