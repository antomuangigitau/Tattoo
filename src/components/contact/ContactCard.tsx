import type { ContactInfo } from "./contactTypes";

const ContactCard = ({ icon: Icon, label, value, link }: ContactInfo) => {
  const content = (
    <>
      <div className="shrink-0 w-12 h-12 flex items-center justify-center">
        <Icon className="w-6 h-6 text-gray-400" />
      </div>
      <div className="grow">
        <p className="text-sm text-gray-400 mb-1">{label}</p>
        <p className="text-base text-gray-200">{value}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 border border-gray-800 rounded-3xl p-6 hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-200">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 border border-gray-800 rounded-3xl p-6">
      {content}
    </div>
  );
};

export default ContactCard;
