import { X } from "lucide-react";
import { useState } from "react";

const ImageZoomModal = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageZoom = (image) => {
    setSelectedImage(image);
  };

  const closeImageZoom = () => {
    setSelectedImage(null);
  };

  // Determine layout based on number of images
  const topRowImages = images.slice(0, Math.min(3, images.length));
  const bottomRowImages = images.length > 3 ? images.slice(3) : [];

  return (
    <>
      {/* Gallery with clickable images */}
      <div className="bg-gray-50 p-6 rounded-md">
        {/* Top row - up to 3 images */}
        <div className={`grid grid-cols-${Math.min(3, images.length)} gap-4 ${bottomRowImages.length > 0 ? 'mb-4' : ''}`}>
          {topRowImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageZoom(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
              />
            </div>
          ))}
        </div>
        
        {/* Bottom row - up to 2 images */}
        {bottomRowImages.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {bottomRowImages.map((image, index) => (
              <div
                key={index + 3}
                className="aspect-[4/5] cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openImageZoom(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeImageZoom}
        >
          <div
            className="relative w-[90%] h-[90%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
            <button
              onClick={closeImageZoom}
              className="absolute top-4 right-4 text-white hover:bg-gray-800 rounded-full p-2 bg-black bg-opacity-50 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoomModal;