import Link from "next/link"
import { Leaf } from "lucide-react"

export default function BrandLogo() {
  return (
    <Link
      href="/"
      aria-label="Root and Ritual home"
      className="flex items-center gap-2.5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E8DB]">
        <Leaf
          size={22}
          strokeWidth={1.5}
          className="text-[#826349]"
        />
      </div>

      <div className="flex flex-col">
        <span className="text-[9px] font-semibold tracking-[0.2em] text-[#826349]">
          AYURVEDIC
        </span>

        <span className="text-[18px] font-semibold leading-tight text-[#302A25]">
          Root & Ritual
          <span className="text-[#C96B3C]">.</span>
        </span>
      </div>
    </Link>
  )
}