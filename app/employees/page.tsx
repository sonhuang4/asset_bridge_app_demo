"use client"

import { useState } from 'react'
import { 
  Search, 
  Plus, 
  Download,
  MoreVertical,
  User,
  Mail,
  Phone,
  MapPin,
  Monitor,
  Smartphone,
  Calendar,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const employees = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    startDate: '2022-03-15',
    avatar: '/api/placeholder/40/40',
    devices: [
      { name: 'MacBook Pro 16"', type: 'Laptop', status: 'Active' },
      { name: 'iPhone 14 Pro', type: 'Mobile', status: 'Active' },
      { name: 'Dell Monitor 27"', type: 'Monitor', status: 'Active' }
    ]
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    department: 'Marketing',
    position: 'Marketing Manager',
    location: 'New York, NY',
    startDate: '2021-08-20',
    avatar: '/api/placeholder/40/40',
    devices: [
      { name: 'MacBook Air M2', type: 'Laptop', status: 'Active' },
      { name: 'iPhone 13', type: 'Mobile', status: 'Active' }
    ]
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@company.com',
    phone: '+1 (555) 345-6789',
    department: 'Design',
    position: 'UX Designer',
    location: 'Austin, TX',
    startDate: '2023-01-10',
    avatar: '/api/placeholder/40/40',
    devices: [
      { name: 'iMac 24"', type: 'Desktop', status: 'Active' },
      { name: 'iPad Pro', type: 'Tablet', status: 'Pending' },
      { name: 'Wacom Tablet', type: 'Peripheral', status: 'Active' }
    ]
  }
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDepartment, setFilterDepartment] = useState('all')
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set())

  const departments = [...new Set(employees.map(emp => emp.department))]

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesDepartment = filterDepartment === 'all' || employee.department === filterDepartment
    
    return matchesSearch && matchesDepartment
  })

  const toggleRowExpansion = (employeeId: number) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(employeeId)) {
      newExpanded.delete(employeeId)
    } else {
      newExpanded.add(employeeId)
    }
    setExpandedRows(newExpanded)
  }

  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'laptop':
      case 'desktop':
        return Monitor
      case 'mobile':
        return Smartphone
      default:
        return Monitor
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
            <p className="mt-2 text-gray-600">
              Manage employee information and device assignments
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500"
              />
            </div>
            <div>
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="space-y-4">
        {filteredEmployees.map((employee, index) => {
          const isExpanded = expandedRows.has(employee.id)
          return (
            <motion.div
              key={employee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleRowExpansion(employee.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {employee.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {employee.position} • {employee.department}
                          </p>
                        </div>
                        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {employee.email}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {employee.location}
                          </div>
                          <div className="flex items-center">
                            <Monitor className="h-4 w-4 mr-2" />
                            {employee.devices.length} devices
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 bg-gray-50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">
                            Contact Information
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-gray-400 mr-3" />
                              <span className="text-gray-600">{employee.email}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-gray-400 mr-3" />
                              <span className="text-gray-600">{employee.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                              <span className="text-gray-600">{employee.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                              <span className="text-gray-600">
                                Started {new Date(employee.startDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">
                            Assigned Devices ({employee.devices.length})
                          </h4>
                          <div className="space-y-2">
                            {employee.devices.map((device, deviceIndex) => {
                              const DeviceIcon = getDeviceIcon(device.type)
                              return (
                                <div 
                                  key={deviceIndex}
                                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <DeviceIcon className="h-4 w-4 text-gray-600" />
                                    <div>
                                      <p className="text-sm font-medium text-gray-900">
                                        {device.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {device.type}
                                      </p>
                                    </div>
                                  </div>
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    device.status === 'Active' 
                                      ? 'bg-green-100 text-green-800'
                                      : device.status === 'Pending'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-red-100 text-red-800'
                                  }`}>
                                    {device.status}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <User className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No employees found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  )
}