import NotFoundPage from "../404";
import { FaArrowLeft } from "react-icons/fa6";

import { Link, useParams } from "../../router";
import works from "../../data/works";

import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

const Works = () => {
  const { slug } = useParams("/works/:slug");

  const data = works.find((e) => e.slug === slug);

  if (!data) {
    return <NotFoundPage />;
  }

  const imageItems = data.images.map((e) => ({
    original: e,
    thumbnail: e,
  }));

  return (
    <div className="flex flex-col items-center min-h-screen w-full h-auto bg-background">
      <div className="w-full max-w-4xl p-8 flex flex-col">
        <div className="flex w-full hover:underline">
          <Link to={"/"} className="flex w-fit gap-2 text-primary items-center">
            <FaArrowLeft className="text-md" />
            Back to Home
          </Link>
        </div>
        <div className="flex flex-1 flex-col my-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>

          <ReactImageGallery
            items={imageItems}
            infinite
            autoPlay
            additionalClass="my-4"
            thumbnailPosition="left"
          />

          {data.content}
        </div>
      </div>
    </div>
  );
};

export default Works;
