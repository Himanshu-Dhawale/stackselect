export default function Pricing() {
    return (
        <section id="pricing" style={{ padding: 'var(--space-20) 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-12)', textAlign: 'center' }}>
                    Simple, Transparent Pricing
                </h2>

                <div className="grid-cols-3">
                    {/* Free Tier */}
                    <div style={{
                        background: 'var(--bg-page)',
                        padding: 'var(--space-8)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>Free</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 'var(--space-6)' }}>$0<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span></div>
                        <ul style={{ listStyle: 'none', marginBottom: 'var(--space-8)', flex: 1, color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '10px' }}>• 5 Tool searches/mo</li>
                            <li style={{ marginBottom: '10px' }}>• Basic AI analysis</li>
                            <li style={{ marginBottom: '10px' }}>• Community reviews</li>
                        </ul>
                        <button className="btn btn-secondary" style={{ width: '100%' }}>Get Started</button>
                    </div>

                    {/* Pro Tier */}
                    <div style={{
                        background: 'var(--bg-page)',
                        padding: 'var(--space-8)',
                        borderRadius: 'var(--radius-lg)',
                        border: '2px solid var(--primary)', /* Highlight */
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.75rem',
                            fontWeight: 600
                        }}>RECOMMENDED</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>Pro</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 'var(--space-6)' }}>$29<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mo</span></div>
                        <ul style={{ listStyle: 'none', marginBottom: 'var(--space-8)', flex: 1, color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '10px' }}>• <strong>Unlimited</strong> searches</li>
                            <li style={{ marginBottom: '10px' }}>• Priority AI processing</li>
                            <li style={{ marginBottom: '10px' }}>• API Access</li>
                            <li style={{ marginBottom: '10px' }}>• Comparison tools</li>
                        </ul>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
                    </div>

                    {/* Enterprise Tier */}
                    <div style={{
                        background: 'var(--bg-page)',
                        padding: 'var(--space-8)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>Enterprise</h3>
                        <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: 'var(--space-6)' }}>Custom</div>
                        <ul style={{ listStyle: 'none', marginBottom: 'var(--space-8)', flex: 1, color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '10px' }}>• Everything in Pro</li>
                            <li style={{ marginBottom: '10px' }}>• Dedicated support</li>
                            <li style={{ marginBottom: '10px' }}>• Custom integrations</li>
                            <li style={{ marginBottom: '10px' }}>• SLA</li>
                        </ul>
                        <button className="btn btn-secondary" style={{ width: '100%' }}>Contact Us</button>
                    </div>
                </div>

            </div>
        </section>
    );
}
