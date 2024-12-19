import ImageZoomModal from "../ImageModel/ImageZoomModal";

export default function ProjectGallery({ images, title }) {
  // Transform the image URLs into the format expected by ImageZoomModal
  const formattedImages = images.map((imageUrl, index) => ({
    src: imageUrl,
    alt: `${title} - Image ${index + 1}`
  }));

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
      <div>
        <ImageZoomModal images={formattedImages} />
      </div>
    </div>
  );
}