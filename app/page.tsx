export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', textAlign: 'center' }}>
      <h1>🎉 Asset Management Platform</h1>
      <p>✅ Successfully deployed on Vercel!</p>
      <p>🔐 Demo login: admin@assetbridge.com / admin123</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          href="/dashboard" 
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500'
          }}
        >
          📊 View Dashboard
        </a>
        <a 
          href="/devices" 
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#28a745',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500'
          }}
        >
          💻 View Devices
        </a>
        <a 
          href="/login" 
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6c757d',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '500'
          }}
        >
          🔐 Login Page
        </a>
      </div>
    </div>
  )
}