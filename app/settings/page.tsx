"use client"

import { useState } from 'react'
import { 
  Settings as SettingsIcon, 
  User, 
  Building, 
  Shield, 
  Bell,
  Palette,
  Globe,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'
import { motion } from 'framer-motion'

const settingsSections = [
  { id: 'company', name: 'Company Profile', icon: Building },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'appearance', name: 'Appearance', icon: Palette },
  { id: 'integrations', name: 'Integration Settings', icon: Globe },
]

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('company')
  const [showApiKey, setShowApiKey] = useState(false)
  const [settings, setSettings] = useState({
    company: {
      name: 'TechCorp Solutions',
      address: '123 Business Ave, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      website: 'https://techcorp.com',
      logo: ''
    },
    security: {
      twoFactorEnabled: true,
      passwordExpiry: 90,
      sessionTimeout: 480,
      apiKey: 'sk_live_xxxxxxxxxxxxxxxxxxxx'
    },
    notifications: {
      emailAlerts: true,
      slackNotifications: true,
      criticalAlerts: true,
      deviceUpdates: false,
      weeklyReports: true
    },
    appearance: {
      theme: 'light',
      language: 'en',
      timezone: 'America/Los_Angeles',
      dateFormat: 'MM/DD/YYYY'
    },
    integrations: {
      autoSync: true,
      syncInterval: 15,
      retryAttempts: 3,
      enableWebhooks: true
    }
  })

  const updateSetting = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }))
  }

  const renderCompanySettings = () => (
    <div className=\"space-y-6\">
      <div>
        <label className=\"block text-sm font-medium text-gray-700 mb-2\">
          Company Name
        </label>
        <input
          type=\"text\"
          value={settings.company.name}
          onChange={(e) => updateSetting('company', 'name', e.target.value)}
          className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
        />
      </div>
      
      <div>
        <label className=\"block text-sm font-medium text-gray-700 mb-2\">
          Address
        </label>
        <textarea
          value={settings.company.address}
          onChange={(e) => updateSetting('company', 'address', e.target.value)}
          rows={3}
          className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
        />
      </div>
      
      <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Phone Number
          </label>
          <input
            type=\"tel\"
            value={settings.company.phone}
            onChange={(e) => updateSetting('company', 'phone', e.target.value)}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
        </div>
        
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Website
          </label>
          <input
            type=\"url\"
            value={settings.company.website}
            onChange={(e) => updateSetting('company', 'website', e.target.value)}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
        </div>
      </div>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className=\"space-y-6\">
      <div className=\"flex items-center justify-between\">
        <div>
          <h3 className=\"text-sm font-medium text-gray-900\">Two-Factor Authentication</h3>
          <p className=\"text-sm text-gray-500\">Add an extra layer of security to your account</p>
        </div>
        <button
          onClick={() => updateSetting('security', 'twoFactorEnabled', !settings.security.twoFactorEnabled)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
            settings.security.twoFactorEnabled ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              settings.security.twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
      
      <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Password Expiry (days)
          </label>
          <input
            type=\"number\"
            value={settings.security.passwordExpiry}
            onChange={(e) => updateSetting('security', 'passwordExpiry', parseInt(e.target.value))}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
        </div>
        
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Session Timeout (minutes)
          </label>
          <input
            type=\"number\"
            value={settings.security.sessionTimeout}
            onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
        </div>
      </div>
      
      <div>
        <label className=\"block text-sm font-medium text-gray-700 mb-2\">
          API Key
        </label>
        <div className=\"relative\">
          <input
            type={showApiKey ? 'text' : 'password'}
            value={settings.security.apiKey}
            onChange={(e) => updateSetting('security', 'apiKey', e.target.value)}
            className=\"block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
          <button
            type=\"button\"
            onClick={() => setShowApiKey(!showApiKey)}
            className=\"absolute inset-y-0 right-0 pr-3 flex items-center\"
          >
            {showApiKey ? (
              <EyeOff className=\"h-4 w-4 text-gray-400\" />
            ) : (
              <Eye className=\"h-4 w-4 text-gray-400\" />
            )}
          </button>
        </div>
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className=\"space-y-6\">
      {[
        { key: 'emailAlerts', label: 'Email Alerts', description: 'Receive important alerts via email' },
        { key: 'slackNotifications', label: 'Slack Notifications', description: 'Send notifications to Slack channels' },
        { key: 'criticalAlerts', label: 'Critical Alerts', description: 'Immediate notifications for critical issues' },
        { key: 'deviceUpdates', label: 'Device Updates', description: 'Notifications when devices are updated' },
        { key: 'weeklyReports', label: 'Weekly Reports', description: 'Weekly summary reports via email' }
      ].map((item) => (
        <div key={item.key} className=\"flex items-center justify-between\">
          <div>
            <h3 className=\"text-sm font-medium text-gray-900\">{item.label}</h3>
            <p className=\"text-sm text-gray-500\">{item.description}</p>
          </div>
          <button
            onClick={() => updateSetting('notifications', item.key, !settings.notifications[item.key as keyof typeof settings.notifications])}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
              settings.notifications[item.key as keyof typeof settings.notifications] ? 'bg-primary-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                settings.notifications[item.key as keyof typeof settings.notifications] ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className=\"space-y-6\">
      <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Theme
          </label>
          <select
            value={settings.appearance.theme}
            onChange={(e) => updateSetting('appearance', 'theme', e.target.value)}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          >
            <option value=\"light\">Light</option>
            <option value=\"dark\">Dark</option>
            <option value=\"auto\">Auto</option>
          </select>
        </div>
        
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Language
          </label>
          <select
            value={settings.appearance.language}
            onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          >
            <option value=\"en\">English</option>
            <option value=\"es\">Spanish</option>
            <option value=\"fr\">French</option>
            <option value=\"de\">German</option>
          </select>
        </div>
        
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Timezone
          </label>
          <select
            value={settings.appearance.timezone}
            onChange={(e) => updateSetting('appearance', 'timezone', e.target.value)}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          >
            <option value=\"America/Los_Angeles\">Pacific Time (PT)</option>
            <option value=\"America/Denver\">Mountain Time (MT)</option>
            <option value=\"America/Chicago\">Central Time (CT)</option>
            <option value=\"America/New_York\">Eastern Time (ET)</option>
          </select>
        </div>
        
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Date Format
          </label>
          <select
            value={settings.appearance.dateFormat}
            onChange={(e) => updateSetting('appearance', 'dateFormat', e.target.value)}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          >
            <option value=\"MM/DD/YYYY\">MM/DD/YYYY</option>
            <option value=\"DD/MM/YYYY\">DD/MM/YYYY</option>
            <option value=\"YYYY-MM-DD\">YYYY-MM-DD</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderIntegrationSettings = () => (
    <div className=\"space-y-6\">
      <div className=\"flex items-center justify-between\">
        <div>
          <h3 className=\"text-sm font-medium text-gray-900\">Auto Sync</h3>
          <p className=\"text-sm text-gray-500\">Automatically sync data with integrations</p>
        </div>
        <button
          onClick={() => updateSetting('integrations', 'autoSync', !settings.integrations.autoSync)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
            settings.integrations.autoSync ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              settings.integrations.autoSync ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
      
      <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Sync Interval (minutes)
          </label>
          <input
            type=\"number\"
            value={settings.integrations.syncInterval}
            onChange={(e) => updateSetting('integrations', 'syncInterval', parseInt(e.target.value))}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
        </div>
        
        <div>
          <label className=\"block text-sm font-medium text-gray-700 mb-2\">
            Retry Attempts
          </label>
          <input
            type=\"number\"
            value={settings.integrations.retryAttempts}
            onChange={(e) => updateSetting('integrations', 'retryAttempts', parseInt(e.target.value))}
            className=\"block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500\"
          />
        </div>
      </div>
      
      <div className=\"flex items-center justify-between\">
        <div>
          <h3 className=\"text-sm font-medium text-gray-900\">Enable Webhooks</h3>
          <p className=\"text-sm text-gray-500\">Allow integrations to send webhook notifications</p>
        </div>
        <button
          onClick={() => updateSetting('integrations', 'enableWebhooks', !settings.integrations.enableWebhooks)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
            settings.integrations.enableWebhooks ? 'bg-primary-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              settings.integrations.enableWebhooks ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  )

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'company':
        return renderCompanySettings()
      case 'security':
        return renderSecuritySettings()
      case 'notifications':
        return renderNotificationSettings()
      case 'appearance':
        return renderAppearanceSettings()
      case 'integrations':
        return renderIntegrationSettings()
      default:
        return renderCompanySettings()
    }
  }

  return (
    <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
      <div className=\"mb-8\">
        <h1 className=\"text-3xl font-bold text-gray-900\">Settings</h1>
        <p className=\"mt-2 text-gray-600\">
          Configure your asset management platform settings
        </p>
      </div>

      <div className=\"grid grid-cols-1 lg:grid-cols-4 gap-8\">
        {/* Settings Navigation */}
        <div className=\"lg:col-span-1\">
          <nav className=\"space-y-1\">
            {settingsSections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700 border-primary-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`flex-shrink-0 -ml-1 mr-3 h-5 w-5 ${
                    activeSection === section.id ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  {section.name}
                </motion.button>
              )
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className=\"lg:col-span-3\">
          <div className=\"bg-white shadow-sm rounded-lg border border-gray-200\">
            <div className=\"px-6 py-4 border-b border-gray-200\">
              <h2 className=\"text-lg font-semibold text-gray-900\">
                {settingsSections.find(s => s.id === activeSection)?.name}
              </h2>
            </div>
            <div className=\"px-6 py-6\">
              {renderActiveSection()}
            </div>
            <div className=\"px-6 py-4 border-t border-gray-200 flex justify-end\">
              <button className=\"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500\">
                <Save className=\"h-4 w-4 mr-2\" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}"