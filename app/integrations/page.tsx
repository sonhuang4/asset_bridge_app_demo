"use client"

import { useState } from 'react'
import { 
  Zap, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Plus,
  RefreshCw,
  Shield,
  Users,
  Monitor,
  Calendar,
  Database,
  Wifi
} from 'lucide-react'
import { motion } from 'framer-motion'

const integrations = [
  {
    id: 1,
    name: 'Microsoft Intune',
    category: 'MDM',
    description: 'Mobile Device Management and application deployment',
    status: 'Connected',
    lastSync: '2 minutes ago',
    icon: Shield,
    color: 'bg-blue-500',
    devices: 847,
    features: ['Device Management', 'App Deployment', 'Security Policies', 'Compliance Reporting']
  },
  {
    id: 2,
    name: 'Jamf Pro',
    category: 'MDM',
    description: 'Apple device management and security',
    status: 'Connected',
    lastSync: '5 minutes ago',
    icon: Monitor,
    color: 'bg-gray-800',
    devices: 312,
    features: ['macOS Management', 'iOS Management', 'App Store Apps', 'Security Configuration']
  },
  {
    id: 3,
    name: 'Azure Active Directory',
    category: 'Identity',
    description: 'User authentication and directory services',
    status: 'Connected',
    lastSync: '1 minute ago',
    icon: Users,
    color: 'bg-blue-600',
    devices: 1247,
    features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Group Management']
  },
  {
    id: 4,
    name: 'ServiceNow',
    category: 'ITSM',
    description: 'IT Service Management and ticketing',
    status: 'Pending',
    lastSync: 'Never',
    icon: Database,
    color: 'bg-green-600',
    devices: 0,
    features: ['Incident Management', 'Asset Tracking', 'Change Management', 'Service Catalog']
  },
  {
    id: 5,
    name: 'Slack',
    category: 'Communication',
    description: 'Team communication and notifications',
    status: 'Connected',
    lastSync: '30 seconds ago',
    icon: Zap,
    color: 'bg-purple-500',
    devices: null,
    features: ['Alert Notifications', 'Status Updates', 'Approval Workflows', 'Team Collaboration']
  },
  {
    id: 6,
    name: 'Google Workspace',
    category: 'Productivity',
    description: 'Email, calendar, and productivity suite integration',
    status: 'Error',
    lastSync: '2 hours ago',
    icon: Calendar,
    color: 'bg-red-500',
    devices: 523,
    features: ['Email Integration', 'Calendar Sync', 'Document Management', 'User Provisioning']
  }
]

const categories = ['All', 'MDM', 'Identity', 'ITSM', 'Communication', 'Productivity']

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showConfigModal, setShowConfigModal] = useState(false)

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(integration => integration.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected':
        return 'text-green-700 bg-green-50 border-green-200'
      case 'Pending':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200'
      case 'Error':
        return 'text-red-700 bg-red-50 border-red-200'
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Connected':
        return CheckCircle
      case 'Error':
        return AlertCircle
      default:
        return RefreshCw
    }
  }

  return (
    <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
      <div className=\"mb-8\">
        <div className=\"flex justify-between items-center\">
          <div>
            <h1 className=\"text-3xl font-bold text-gray-900\">Integrations</h1>
            <p className=\"mt-2 text-gray-600\">
              Connect and manage your third-party integrations
            </p>
          </div>
          <button className=\"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500\">
            <Plus className=\"h-4 w-4 mr-2\" />
            Add Integration
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className=\"mb-8\">
        <div className=\"flex flex-wrap gap-2\">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-100 text-primary-700 border-primary-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              } border`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Integration Stats */}
      <div className=\"grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 mb-8\">
        <div className=\"bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200\">
          <div className=\"p-6\">
            <div className=\"flex items-center\">
              <div className=\"flex-shrink-0 bg-green-50 p-3 rounded-lg\">
                <CheckCircle className=\"h-6 w-6 text-green-600\" />
              </div>
              <div className=\"ml-4\">
                <p className=\"text-sm font-medium text-gray-600\">Active</p>
                <p className=\"text-2xl font-semibold text-gray-900\">
                  {integrations.filter(i => i.status === 'Connected').length}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className=\"bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200\">
          <div className=\"p-6\">
            <div className=\"flex items-center\">
              <div className=\"flex-shrink-0 bg-yellow-50 p-3 rounded-lg\">
                <RefreshCw className=\"h-6 w-6 text-yellow-600\" />
              </div>
              <div className=\"ml-4\">
                <p className=\"text-sm font-medium text-gray-600\">Pending</p>
                <p className=\"text-2xl font-semibold text-gray-900\">
                  {integrations.filter(i => i.status === 'Pending').length}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className=\"bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200\">
          <div className=\"p-6\">
            <div className=\"flex items-center\">
              <div className=\"flex-shrink-0 bg-red-50 p-3 rounded-lg\">
                <AlertCircle className=\"h-6 w-6 text-red-600\" />
              </div>
              <div className=\"ml-4\">
                <p className=\"text-sm font-medium text-gray-600\">Errors</p>
                <p className=\"text-2xl font-semibold text-gray-900\">
                  {integrations.filter(i => i.status === 'Error').length}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className=\"bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200\">
          <div className=\"p-6\">
            <div className=\"flex items-center\">
              <div className=\"flex-shrink-0 bg-blue-50 p-3 rounded-lg\">
                <Monitor className=\"h-6 w-6 text-blue-600\" />
              </div>
              <div className=\"ml-4\">
                <p className=\"text-sm font-medium text-gray-600\">Total Devices</p>
                <p className=\"text-2xl font-semibold text-gray-900\">
                  {integrations.reduce((acc, i) => acc + (i.devices || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className=\"grid grid-cols-1 gap-6 lg:grid-cols-2\">
        {filteredIntegrations.map((integration, index) => {
          const Icon = integration.icon
          const StatusIcon = getStatusIcon(integration.status)
          
          return (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className=\"bg-white shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200\"
            >
              <div className=\"p-6\">
                <div className=\"flex items-start justify-between\">
                  <div className=\"flex items-start space-x-4\">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${integration.color} bg-opacity-10`}>
                      <Icon className={`h-8 w-8 ${integration.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className=\"flex-1\">
                      <h3 className=\"text-lg font-semibold text-gray-900\">
                        {integration.name}
                      </h3>
                      <p className=\"text-sm text-gray-600 mb-2\">
                        {integration.description}
                      </p>
                      <div className=\"flex items-center space-x-4 text-sm text-gray-500\">
                        <span className=\"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800\">
                          {integration.category}
                        </span>
                        {integration.devices !== null && (
                          <span>{integration.devices} devices</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className=\"flex flex-col items-end space-y-2\">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(integration.status)}`}>
                      <StatusIcon className=\"h-3 w-3 mr-1\" />
                      {integration.status}
                    </span>
                    <span className=\"text-xs text-gray-500\">
                      {integration.lastSync}
                    </span>
                  </div>
                </div>
                
                <div className=\"mt-6\">
                  <h4 className=\"text-sm font-medium text-gray-900 mb-2\">Features</h4>
                  <div className=\"flex flex-wrap gap-2\">
                    {integration.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className=\"inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700\"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className=\"mt-6 flex justify-between items-center\">
                  <div className=\"flex space-x-2\">
                    <button className=\"inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500\">
                      <Settings className=\"h-4 w-4 mr-1\" />
                      Configure
                    </button>
                    {integration.status === 'Connected' && (
                      <button className=\"inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500\">
                        <RefreshCw className=\"h-4 w-4 mr-1\" />
                        Sync Now
                      </button>
                    )}
                  </div>
                  <button className=\"text-gray-400 hover:text-gray-500\">
                    <ExternalLink className=\"h-4 w-4\" />
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {filteredIntegrations.length === 0 && (
        <div className=\"text-center py-12\">
          <Zap className=\"mx-auto h-12 w-12 text-gray-400\" />
          <h3 className=\"mt-2 text-sm font-medium text-gray-900\">No integrations found</h3>
          <p className=\"mt-1 text-sm text-gray-500\">
            Try selecting a different category.
          </p>
        </div>
      )}
    </div>
  )
}"