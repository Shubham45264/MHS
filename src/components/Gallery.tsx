import { useState } from "react";

export default function Gallery() {
  const images = [
    // 🔶 Boom Lift
    "/bomb lift 1.jpeg",
    "/bomb lift 2.jpeg",
    "/bomb lift 3.jpeg",
    "/bomb lift 4.jpeg",
    "/bomb lift 5.jpeg",
    "/bomb lift 6.jpeg",
    "/bomb lift 7.jpeg",

    // 🔷 Scissor Lift
    "/Sizzor 1.jpeg",
    "/sizzor 2.jpeg",
    "/sizzor 3.jpeg",
    "/Sizzor 4.jpeg",
    "/sizzor 5.jpeg",
    "/sizzor 7.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0B3C5D]">
            Our <span className="text-[#F4B400]">Gallery</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Explore our equipment and project highlights across Maharashtra.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </div>
        )}

      </div>
    </section>
  );
}
