import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/+919265494325?text=Hello%20City%20Vadapav%2C%20I%27m%20interested%20in%20the%20franchise%20opportunity"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group animate-bounce hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={26} className="group-hover:rotate-12 transition-transform duration-300" />
    </Link>
  )
}
