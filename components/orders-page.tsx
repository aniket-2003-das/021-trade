"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { OrdersTable } from "@/components/orders-table"
import { OrdersFilter } from "@/components/orders-filter"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function OrdersPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["RELIANCE", "ASIANPAINT"])
  const [clientId, setClientId] = useState("AAA002")
  const [nameFilter, setNameFilter] = useState("Lalit")

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  const clearNameFilter = () => {
    setNameFilter("")
  }

  const cancelAllOrders = () => {
    // Implementation for cancelling all orders would go here
    alert("Cancelling all orders")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Open Orders</h1>
            <Button variant="ghost" className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </div>

          <OrdersFilter
            clientId={clientId}
            nameFilter={nameFilter}
            activeFilters={activeFilters}
            onRemoveFilter={removeFilter}
            onClearNameFilter={clearNameFilter}
            onCancelAll={cancelAllOrders}
          />

          <OrdersTable />

          <div className="flex justify-center items-center gap-4 mt-4">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <span className="text-sm">Page 1</span>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
