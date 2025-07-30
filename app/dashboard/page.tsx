export default function DashboardPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>Dashboard</h1>
        <p style={{ color: '#666' }}>Monitor your asset management system performance and activity</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Total Assets</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#007bff' }}>1,247</p>
        </div>
        <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Active Devices</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#28a745' }}>1,184</p>
        </div>
        <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Pending Issues</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#ffc107' }}>23</p>
        </div>
        <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Critical Alerts</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, color: '#dc3545' }}>5</p>
        </div>
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <h2 style={{ marginTop: 0, marginBottom: '1rem', color: '#495057' }}>Recent Activity</h2>
        <div style={{ color: '#6c757d' }}>
          <p>• MacBook Pro assigned to John Smith</p>
          <p>• iPhone 14 returned by Sarah Johnson</p>
          <p>• Dell Monitor deployed to Marketing team</p>
          <p>• Security patch applied to 50 devices</p>
        </div>
      </div>
    </div>
  )
}