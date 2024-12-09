/* eslint-disable react/prop-types */
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

  return (
    <>
      {/* Gallery with clickable images */}
      <div className="bg-gray-50 p-6 rounded-md">
        {/* Top row - 3 images */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageZoom(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover border-2 border-gray-200"
              />
            </div>
          ))}
        </div>
        {/* Bottom row - 2 images */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(3).map((image, index) => (
            <div
              key={index}
              className="aspect-[4/5] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageZoom(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover border-2 border-gray-200"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeImageZoom}
        >
          <div
            className="relative w-[75%] h-[75%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-cover shadow-2xl"
            />
            <button
              onClick={closeImageZoom}
              className="absolute top-4 right-4 text-white hover:bg-gray-800 rounded-full p-2 bg-black bg-opacity-50"
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
