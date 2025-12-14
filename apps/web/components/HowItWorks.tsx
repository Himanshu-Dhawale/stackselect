export default function HowItWorks() {
    return (
        <section style={{ padding: 'var(--space-20) 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
                        How It Works
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                        Get your perfect software stack in 3 simple steps
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>

                    {/* Step 1 */}
                    <div className="card" style={{
                        background: 'var(--bg-card)',
                        padding: 'var(--space-6)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-highlight)'
                    }}>
                        <div style={{
                            background: 'rgba(99,102,241,0.1)',
                            color: 'var(--primary)',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            marginBottom: 'var(--space-4)',
                            fontWeight: 'bold'
                        }}>1</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Tell AI about your business</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
                            Input your industry, team size, and budget constraints.
                        </p>
                        {/* Visual */}
                        <div style={{ background: 'var(--bg-page)', padding: '15px', borderRadius: 'var(--radius-md)' }}>
                            <div style={{ height: '8px', width: '30%', background: 'var(--text-muted)', opacity: 0.3, marginBottom: '8px', borderRadius: '2px' }}></div>
                            <div style={{ height: '30px', width: '100%', border: '1px solid var(--border-highlight)', borderRadius: '4px', marginBottom: '10px' }}></div>

                            <div style={{ height: '8px', width: '30%', background: 'var(--text-muted)', opacity: 0.3, marginBottom: '8px', borderRadius: '2px' }}></div>
                            <div style={{ height: '30px', width: '100%', border: '1px solid var(--border-highlight)', borderRadius: '4px' }}></div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="card" style={{
                        background: 'var(--bg-card)',
                        padding: 'var(--space-6)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-highlight)'
                    }}>
                        <div style={{
                            background: 'rgba(168,85,247,0.1)',
                            color: 'var(--secondary)',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            marginBottom: 'var(--space-4)',
                            fontWeight: 'bold'
                        }}>2</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>AI analyzes 10,000+ tools</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
                            Comparing features, pricing, and integrations instantly.
                        </p>
                        {/* Visual */}
                        <div style={{ background: 'var(--bg-page)', padding: '15px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center', minHeight: '100px' }}>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <div style={{ width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%' }}></div>
                                <div style={{ width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%', opacity: 0.5 }}></div>
                                <div style={{ width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%', opacity: 0.2 }}></div>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Processing...</div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="card" style={{
                        background: 'var(--bg-card)',
                        padding: 'var(--space-6)',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border-highlight)'
                    }}>
                        <div style={{
                            background: 'rgba(236,72,153,0.1)',
                            color: 'var(--accent)',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            marginBottom: 'var(--space-4)',
                            fontWeight: 'bold'
                        }}>3</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Get recommendations</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>
                            Receive a tailored list of tools perfect for you.
                        </p>
                        {/* Visual */}
                        <div style={{ background: 'var(--bg-page)', padding: '15px', borderRadius: 'var(--radius-md)' }}>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <div style={{ width: '30px', height: '30px', background: 'var(--accent)', borderRadius: '6px', opacity: 0.2 }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ width: '50%', height: '8px', background: 'var(--text-muted)', opacity: 0.5, marginBottom: '5px' }}></div>
                                    <div style={{ width: '30%', height: '8px', background: 'var(--text-muted)', opacity: 0.2 }}></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <div style={{ width: '30px', height: '30px', background: 'var(--primary)', borderRadius: '6px', opacity: 0.2 }}></div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ width: '50%', height: '8px', background: 'var(--text-muted)', opacity: 0.5, marginBottom: '5px' }}></div>
                                    <div style={{ width: '30%', height: '8px', background: 'var(--text-muted)', opacity: 0.2 }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
