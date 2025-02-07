"use client"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface HeaderProps {
  selectedBrand: string
  onBrandChange: (brand: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Header({ selectedBrand, onBrandChange, isOpen, setIsOpen }: HeaderProps) {
  const brands = ["All", "Gucci", "Saint Laurent", "Fendi", "Cazal"]

  const handleBrandSelect = (brand: string) => {
    onBrandChange(brand === "All" ? "" : brand)
    setIsOpen(false)
  }

  return (
    <header className="border-b border-[#dcdcdc]">
      <div className="container mx-auto px-4 lg:px-[90px]">
        <div className="max-w-[1440px] mx-auto py-4 flex justify-between items-center">
          <div className="w-32 sm:w-48 md:w-64">
            <Image
              src="https://res.cloudinary.com/drnavq85s/image/upload/v1736168376/image_158_kkzfxp.svg"
              alt="The Eye Doctor Unlimited"
              width={240}
              height={80}
              className="w-full h-auto"
            />
          </div>
          <Button
            className="hidden md:inline-flex bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white"
            onClick={() => window.open("https://www.drleahmcferren.com/request-appointment.html", "_blank")}
          >
            Schedule Eye Exam Here
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="w-[38px] h-[38px]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col gap-6">
                <Button
                  className="w-full bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white"
                  onClick={() => window.open("https://www.drleahmcferren.com/request-appointment.html", "_blank")}
                >
                  Schedule Eye Exam Here
                </Button>
                <div>
                  <h3 className="mb-4 text-lg font-medium">Filter by Brand</h3>
                  <RadioGroup value={selectedBrand || "All"} onValueChange={handleBrandSelect}>
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <RadioGroupItem value={brand} id={brand} />
                        <Label htmlFor={brand}>{brand}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

