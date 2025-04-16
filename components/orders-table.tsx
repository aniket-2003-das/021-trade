"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreVertical, ArrowUpDown, Filter, Volume2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface Order {
  id: string
  time: string
  client: string
  ticker: string
  hasAudio: boolean
  side: "Buy" | "Sell"
  product: string
  executedQty: number
  totalQty: number
  price: number
}

export function OrdersTable() {
  const [orders] = useState<Order[]>([
    {
      id: "1",
      time: "08:14:31",
      client: "AAA001",
      ticker: "RELIANCE",
      hasAudio: true,
      side: "Buy",
      product: "CNC",
      executedQty: 50,
      totalQty: 100,
      price: 250.5,
    },
    {
      id: "2",
      time: "08:14:31",
      client: "AAA003",
      ticker: "MRF",
      hasAudio: false,
      side: "Buy",
      product: "NRML",
      executedQty: 10,
      totalQty: 20,
      price: 2700.0,
    },
    {
      id: "3",
      time: "08:14:31",
      client: "AAA002",
      ticker: "ASIANPAINT",
      hasAudio: true,
      side: "Buy",
      product: "NRML",
      executedQty: 10,
      totalQty: 30,
      price: 1500.6,
    },
    {
      id: "4",
      time: "08:14:31",
      client: "AAA002",
      ticker: "TATAINVEST",
      hasAudio: false,
      side: "Sell",
      product: "INTRADAY",
      executedQty: 10,
      totalQty: 10,
      price: 2300.1,
    },
  ])

  return (
    <div className="rounded-md border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">
                <div className="flex items-center gap-1">
                  Time <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex items-center gap-1">
                  Client <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">Ticker</TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex items-center gap-1">
                  Side <Filter className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex items-center gap-1">
                  Product <ArrowUpDown className="h-3 w-3" /> <Filter className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap text-right">
                <div className="flex items-center justify-end gap-1">
                  Qty (Executed/Total) <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap text-right">
                <div className="flex items-center justify-end gap-1">
                  Price <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.time}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {order.ticker}
                    {order.hasAudio && <Volume2 className="h-4 w-4 text-blue-500" />}
                  </div>
                </TableCell>
                <TableCell className={cn(order.side === "Buy" ? "text-green-600" : "text-red-600")}>
                  {order.side}
                </TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell className="text-right">
                  {order.executedQty}/{order.totalQty}
                </TableCell>
                <TableCell className="text-right">
                  {order.price.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Modify order</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Cancel order</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile View of Orders */}
      <div className="md:hidden">
        {orders.map((order) => (
          <div key={order.id} className="p-4 border-t">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-1 font-medium">
                  {order.ticker}
                  {order.hasAudio && <Volume2 className="h-4 w-4 text-blue-500" />}
                </div>
                <div className="text-sm text-muted-foreground">{order.client}</div>
              </div>
              <div className="text-right">
                <div className={cn("font-medium", order.side === "Buy" ? "text-green-600" : "text-red-600")}>
                  {order.side}
                </div>
                <div className="text-sm text-muted-foreground">{order.product}</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-muted-foreground">Time:</span> {order.time}
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Qty:</span> {order.executedQty}/{order.totalQty}
              </div>
              <div className="text-sm font-medium">
                ₹
                {order.price.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4 mr-1" />
                    Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Modify order</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Cancel order</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
