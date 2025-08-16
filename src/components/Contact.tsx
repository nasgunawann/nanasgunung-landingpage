import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-50 px-6 py-16"
    >
      <div className="relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-3">
            Mulai Bersama Kami!
          </h2>
          <p className="text-gray-600 text-lg">
            Hubungi kami melalui DM Instagram atau chat WhatsApp di bawah ini:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="https://instagram.com/nanasgunung"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#fdc468] via-[#fa7e1e] to-[#d62976] text-white rounded-full font-semibold text-lg hover:from-[#fa7e1e] hover:via-[#d62976] hover:to-[#962fbf] transition shadow hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2 text-2xl" />
            DM Kami di Instagram
          </a>
          <a
            href="https://wa.me/6281265945954"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-green-600 transition shadow hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-2xl" />
            Chat Kami di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
