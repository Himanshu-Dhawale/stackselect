export default function Features() {
    return (
        <section id="features" style={{ padding: 'var(--space-20) 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-12)', textAlign: 'center' }}>
                    Features geared for growth
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--space-6)'
                }}>

                    <div style={{ padding: 'var(--space-8)', background: 'var(--bg-page)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>🎯</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Highly Personalized</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Recommendations based on your specific industry key performance indicators.</p>
                    </div>

                    <div style={{ padding: 'var(--space-8)', background: 'var(--bg-page)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>💰</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Price Tracking</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We monitor pricing changes so you never overpay for your software stack.</p>
                    </div>

                    <div style={{ padding: 'var(--space-8)', background: 'var(--bg-page)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>🔗</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Integration Check</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Automatic verification that all recommended tools work seamlessly together.</p>
                    </div>

                    <div style={{ padding: 'var(--space-8)', background: 'var(--bg-page)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-highlight)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>📊</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Deep Comparison</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Side-by-side feature comparison charts generated on the fly.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
