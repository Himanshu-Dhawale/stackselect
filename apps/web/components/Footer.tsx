export default function Footer() {
    return (
        <footer style={{
            padding: 'var(--space-12) 0',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: 'var(--space-20)',
            background: 'var(--bg-card)'
        }}>
            <div className="container">
                <div className="flex-between" style={{ flexWrap: 'wrap', gap: '2rem' }}>

                    <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-2)' }}>StackSelect</div>
                        <p style={{ color: 'var(--text-muted)' }}>© 2025 StackSelect. All rights reserved.</p>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-6)', color: 'var(--text-muted)' }}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                        <a href="#">Twitter</a>
                        <a href="#">GitHub</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
