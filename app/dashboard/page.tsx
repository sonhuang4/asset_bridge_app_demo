"use client"

import { AppShell } from "@/components/layout/app-shell"
import { MetricCards } from "@/components/dashboard/metric-cards"
import { SyncActivityChart } from "@/components/dashboard/sync-activity-chart"
import { DevicesOverviewTable } from "@/components/dashboard/devices-overview-table"
import { motion } from "framer-motion"

export default function DashboardPage() {
  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Monitor your asset management system performance and activity</p>
        </div>

        <MetricCards />
        <SyncActivityChart />
        <DevicesOverviewTable />
      </motion.div>
    </AppShell>
  )
}