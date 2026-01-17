import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/918000000000?text=Hello%20City%20Vadapav%2C%20I%27m%20interested%20in%20the%20franchise%20opportunity"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-40 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  )
}
