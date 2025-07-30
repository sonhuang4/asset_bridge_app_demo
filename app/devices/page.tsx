"use client"

import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Plus, 
  Download,
  MoreVertical,
  Monitor,
  Smartphone,
  Laptop,
  Printer,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock
} from 'lucide-react'
import { motion } from 'framer-motion'

const devices = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    type: 'Laptop',
    model: 'MacBook Pro M2',
    serialNumber: 'FVFG2LL/A',
    status: 'Active',
    employee: 'John Smith',
    department: 'Engineering',
    lastSync: '2 hours ago',
    batteryLevel: 87,
    osVersion: 'macOS 14.2',
    icon: Laptop,
    statusColor: 'text-green-600',
    statusBg: 'bg-green-50'
  },
  {
    id: 2,
    name: 'iPhone 14 Pro',
    type: 'Mobile',
    model: 'iPhone 14 Pro',
    serialNumber: 'G6GZL8L3Q1',
    status: 'Active',
    employee: 'Sarah Johnson',
    department: 'Marketing',
    lastSync: '5 minutes ago',
    batteryLevel: 92,
    osVersion: 'iOS 17.2',
    icon: Smartphone,
    statusColor: 'text-green-600',
    statusBg: 'bg-green-50'
  },
  {
    id: 3,
    name: 'Dell Monitor 27"',
    type: 'Monitor',
    model: 'Dell U2720Q',
    serialNumber: 'CN0H8F593',
    status: 'Pending',
    employee: 'Mike Wilson',
    department: 'Design',
    lastSync: '1 day ago',
    batteryLevel: null,
    osVersion: 'N/A',
    icon: Monitor,
    statusColor: 'text-yellow-600',
    statusBg: 'bg-yellow-50'
  },
  {
    id: 4,
    name: 'Surface Pro 9',
    type: 'Tablet',
    model: 'Surface Pro 9',
    serialNumber: '012345678901',
    status: 'Inactive',
    employee: 'Lisa Chen',
    department: 'Finance',
    lastSync: '3 days ago',
    batteryLevel: 45,
    osVersion: 'Windows 11',
    icon: Laptop,
    statusColor: 'text-red-600',
    statusBg: 'bg-red-50'
  },
  {
    id: 5,
    name: 'HP LaserJet Pro',
    type: 'Printer',
    model: 'HP LaserJet Pro M404n',
    serialNumber: 'VNC2M04567',
    status: 'Maintenance',
    employee: 'Shared Resource',
    department: 'Office',
    lastSync: '12 hours ago',
    batteryLevel: null,
    osVersion: 'N/A',
    icon: Printer,
    statusColor: 'text-orange-600',
    statusBg: 'bg-orange-50'
  }
]

const statusIcons = {
  Active: CheckCircle,
  Pending: Clock,
  Inactive: XCircle,
  Maintenance: AlertTriangle
}

export default function DevicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filterType === 'all' || device.type.toLowerCase() === filterType.toLowerCase()
    const matchesStatus = filterStatus === 'all' || device.status.toLowerCase() === filterStatus.toLowerCase()
    
    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Devices</h1>
            <p className="mt-2 text-gray-600">
              Manage and monitor all your organization's devices
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <Plus className="h-4 w-4 mr-2" />
              Add Device
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search devices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
            </div>
            <div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
              >
                <option value="all">All Types</option>
                <option value="laptop">Laptops</option>
                <option value="mobile">Mobile</option>
                <option value="monitor">Monitors</option>
                <option value="tablet">Tablets</option>
                <option value="printer">Printers</option>
              </select>
            </div>
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Devices Table */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Sync
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDevices.map((device, index) => {
                const DeviceIcon = device.icon
                const StatusIcon = statusIcons[device.status as keyof typeof statusIcons]
                return (
                  <motion.tr
                    key={device.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                            <DeviceIcon className="h-6 w-6 text-gray-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {device.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {device.serialNumber}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 ${device.statusBg} p-2 rounded-lg mr-3`}>
                          <StatusIcon className={`h-4 w-4 ${device.statusColor}`} />
                        </div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${device.statusBg} ${device.statusColor}`}>
                          {device.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {device.employee}
                      </div>
                      <div className="text-sm text-gray-500">
                        {device.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{device.model}</div>
                      <div className="text-xs">{device.osVersion}</div>
                      {device.batteryLevel && (
                        <div className="text-xs text-green-600">
                          Battery: {device.batteryLevel}%
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {device.lastSync}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {filteredDevices.length === 0 && (
        <div className="text-center py-12">
          <Monitor className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No devices found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  )
}