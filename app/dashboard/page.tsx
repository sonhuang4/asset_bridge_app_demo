"use client"

import { 
  Monitor, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Activity,
  Calendar,
  BarChart3
} from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    name: 'Total Assets',
    value: '1,247',
    change: '+12%',
    changeType: 'positive',
    icon: Monitor,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    name: 'Active Devices',
    value: '1,184',
    change: '+5.4%',
    changeType: 'positive',
    icon: CheckCircle,
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    name: 'Pending Issues',
    value: '23',
    change: '-8%',
    changeType: 'positive',
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50'
  },
  {
    name: 'Critical Alerts',
    value: '5',
    change: '+2',
    changeType: 'negative',
    icon: Activity,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
]

const recentActivity = [
  {
    id: 1,
    action: 'Device assigned',
    details: 'MacBook Pro 16" assigned to John Smith (Engineering)',
    time: '2 hours ago',
    type: 'assignment'
  },
  {
    id: 2,
    action: 'Device returned',
    details: 'iPhone 14 Pro returned by Sarah Johnson (Marketing)',
    time: '4 hours ago',
    type: 'return'
  },
  {
    id: 3,
    action: 'New deployment',
    details: '15x Dell Monitors deployed to Finance department',
    time: '6 hours ago',
    type: 'deployment'
  },
  {
    id: 4,
    action: 'Security update',
    details: 'Security patch applied to 127 Windows devices',
    time: '1 day ago',
    type: 'security'
  },
  {
    id: 5,
    action: 'Integration sync',
    details: 'Automated sync completed with Microsoft Intune',
    time: '1 day ago',
    type: 'sync'
  }
]

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Monitor your asset management system performance and activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${stat.bg} p-3 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-600 truncate">
                      {stat.name}
                    </p>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </p>
                      <p className={`ml-2 text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {activity.details}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Device Utilization</span>
                <span className="text-sm font-semibold">94.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94.8%' }}></div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-gray-600">Compliance Score</span>
                <span className="text-sm font-semibold">98.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '98.2%' }}></div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-gray-600">Security Rating</span>
                <span className="text-sm font-semibold">92.1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '92.1%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Tasks
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Security Audit</p>
                  <p className="text-xs text-gray-500">Due tomorrow</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">License Renewal</p>
                  <p className="text-xs text-gray-500">Due in 3 days</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Hardware Refresh</p>
                  <p className="text-xs text-gray-500">Due next week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}