export default function DevicesPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>Devices</h1>
        <p style={{ color: '#666' }}>Manage and monitor all your organization's devices</p>
      </div>

      <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <input 
          type="text" 
          placeholder="Search devices..." 
          style={{ 
            width: '100%', 
            padding: '0.75rem', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '1rem'
          }} 
        />
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e9ecef', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Device</th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Type</th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Status</th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Employee</th>
              <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Last Sync</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>MacBook Pro 16"</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Laptop</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                <span style={{ color: '#28a745', fontWeight: 'bold' }}>Active</span>
              </td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>John Smith</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>2 hours ago</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>iPhone 14 Pro</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Mobile</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                <span style={{ color: '#28a745', fontWeight: 'bold' }}>Active</span>
              </td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Sarah Johnson</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>5 minutes ago</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Dell Monitor 27"</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Monitor</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                <span style={{ color: '#ffc107', fontWeight: 'bold' }}>Pending</span>
              </td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>Mike Wilson</td>
              <td style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>1 day ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}