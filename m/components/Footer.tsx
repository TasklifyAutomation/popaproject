import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-[#F9EE6B]" />
              <span className="text-2xl font-bold">POPA</span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Modernia markkinointia vuodesta 1956
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-[#F9EE6B] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F9EE6B] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#F9EE6B] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Palvelut</h4>
            <div className="space-y-2">
              <Link to="/tuotannot" className="block text-white/60 hover:text-[#F9EE6B] transition-colors text-sm">
                Verkkopalvelut
              </Link>
              <Link to="/tuotannot" className="block text-white/60 hover:text-[#F9EE6B] transition-colors text-sm">
                Digitaalinen kasvu
              </Link>
              <Link to="/suunnittelut" className="block text-white/60 hover:text-[#F9EE6B] transition-colors text-sm">
                Brändisuunnittelu
              </Link>
              <Link to="/tuotannot" className="block text-white/60 hover:text-[#F9EE6B] transition-colors text-sm">
                Sisältötuotanto
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Yhteystiedot</h4>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#F9EE6B]" />
                <div>
                  <p className="font-semibold text-white">Oulu</p>
                  <p>Limingankuja 4, 90400 Oulu</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#F9EE6B]" />
                <div>
                  <p className="font-semibold text-white">Rovaniemi</p>
                  <p>Teollisuustie 16, 96300 Rovaniemi</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F9EE6B]" />
                <a href="tel:040 7237192" className="hover:text-[#F9EE6B] transition-colors">
                  040 7237192
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F9EE6B]" />
                <a href="mailto:info@popa.fi" className="hover:text-[#F9EE6B] transition-colors">
                  info@popa.fi
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Uutiskirje</h4>
            <p className="text-white/60 text-sm mb-4">
              Tilaa uutiskirjeemme ja pysy ajan tasalla
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Sähköpostiosoite"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#F9EE6B] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#F9EE6B] text-[#0B0B0B] font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform text-sm"
              >
                Tilaa
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} POPA. Kaikki oikeudet pidätetään.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F9EE6B] transition-colors">Tietosuoja</a>
            <a href="#" className="hover:text-[#F9EE6B] transition-colors">Käyttöehdot</a>
            <a href="#" className="hover:text-[#F9EE6B] transition-colors">Evästeet</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
