"use client"

import { useState } from "react"
import { AppShell } from "@/components/layout/app-shell"
import { DevicesFilter } from "@/components/devices/devices-filter"
import { DevicesTable } from "@/components/devices/devices-table"
import { motion } from "framer-motion"

export default function DevicesPage() {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    status: "all",
    department: "all",
    employee: "all"
  })

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Devices</h1>
          <p className="text-gray-600">Manage and monitor all your organization's devices</p>
        </div>

        <DevicesFilter onFiltersChange={setFilters} />
        <DevicesTable filters={filters} />
      </motion.div>
    </AppShell>
  )
}