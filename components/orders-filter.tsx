"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, User, X } from "lucide-react"

interface OrdersFilterProps {
  clientId: string
  nameFilter: string
  activeFilters: string[]
  onRemoveFilter: (filter: string) => void
  onClearNameFilter: () => void
  onCancelAll: () => void
}

export function OrdersFilter({
  clientId,
  nameFilter,
  activeFilters,
  onRemoveFilter,
  onClearNameFilter,
  onCancelAll,
}: OrdersFilterProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Client ID */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-4 w-4 text-gray-400" />
          </div>
          <Input value={clientId} className="pl-10" readOnly />
        </div>

        {/* Name Filter */}
        <div className="relative md:col-span-2">
          {nameFilter && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Badge variant="secondary" className="flex items-center gap-1">
                {nameFilter}
                <button onClick={onClearNameFilter}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          )}

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>

          <Input placeholder="Search for a stock, future, option or index" className={nameFilter ? "pl-24" : ""} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map((filter) => (
            <Badge key={filter} variant="secondary" className="flex items-center gap-1">
              {filter}
              <button onClick={() => onRemoveFilter(filter)}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>

        <Button variant="destructive" size="sm" onClick={onCancelAll}>
          <X className="h-4 w-4 mr-2" />
          Cancel all
        </Button>
      </div>
    </div>
  )
}
