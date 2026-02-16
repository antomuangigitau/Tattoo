import { Link } from "@tanstack/react-router";

interface ServiceCardProps {
  title: string;
  image: string;
  galleryRoute: string;
  serviceType?: string;
}

const ServiceCard = ({ title, image, galleryRoute }: ServiceCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />


      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />


      <div className="absolute inset-0 flex flex-col justify-end p-6">

        <p className="text-xs uppercase tracking-widest text-white/80 mb-2 hover:text-white transition-colors">
          Book
        </p>

        <Link
          to={galleryRoute}
          className="inline-block bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-wider px-6 py-3 rounded-sm transition-colors duration-300 w-fit">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
