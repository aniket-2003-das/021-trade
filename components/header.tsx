"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Briefcase, DollarSign, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const marketIndices = [
    { name: "SIGNORIA", value: "0.00", color: "text-green-600" },
    { name: "NIFTY BANK", value: "52,323.30", color: "text-green-600" },
    { name: "NIFTY FIN SERVICE", value: "25,255.75", color: "text-green-600" },
    { name: "RELCHEMO", value: "162.73", color: "text-green-600" },
  ]

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Market Indices */}
          <div className="flex items-center space-x-4 overflow-x-auto hide-scrollbar">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 2 2 3-3 2 2" />
                </svg>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              {marketIndices.map((index) => (
                <div key={index.name} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{index.name}</span>
                  <span className={cn("text-sm font-bold", index.color)}>{index.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              MARKETWATCH
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <FileText className="h-4 w-4 mr-2" />
              EXCHANGE FILES
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Briefcase className="h-4 w-4 mr-2" />
              PORTFOLIO
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <DollarSign className="h-4 w-4 mr-2" />
              FUNDS
            </Button>
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">
              LK
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Market Indices */}
        <div className="md:hidden overflow-x-auto pb-2 flex items-center space-x-4 hide-scrollbar">
          {marketIndices.map((index) => (
            <div key={index.name} className="flex flex-col items-center whitespace-nowrap">
              <span className="text-xs font-medium">{index.name}</span>
              <span className={cn("text-sm font-bold", index.color)}>{index.value}</span>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                MARKETWATCH
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <FileText className="h-4 w-4 mr-2" />
                EXCHANGE FILES
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Briefcase className="h-4 w-4 mr-2" />
                PORTFOLIO
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                FUNDS
              </Button>
              <div className="flex items-center space-x-2 p-2">
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">
                  LK
                </div>
                <span className="text-sm font-medium">Lalit Kumar</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
