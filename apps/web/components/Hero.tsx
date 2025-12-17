import Link from 'next/link';

export default function Hero() {
    return (
        <section style={{
            paddingTop: 'calc(var(--nav-height) + var(--space-20))',
            paddingBottom: 'var(--space-20)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1000px',
                height: '1000px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

                    <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        background: 'rgba(99,102,241,0.1)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(99,102,241,0.2)',
                        color: 'var(--primary)',
                        fontSize: '0.875rem',
                        marginBottom: 'var(--space-6)',
                        fontWeight: 500
                    }}>
                        ✨ AI-Powered Software Discovery
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 'var(--space-6)',
                        letterSpacing: '-0.02em'
                    }}>
                        Find Your Perfect <br />
                        <span className="text-gradient">Software Stack</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: 'var(--space-8)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        AI-curated recommendations for entrepreneurs and startups.
                        Save 40+ hours researching tools and focus on building.
                    </p>

                    <div className="flex-center" style={{ gap: '1rem' }}>
                        <Link href="/onboarding" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>
                            Get Started Free →
                        </Link>
                        <button className="btn btn-secondary" style={{ padding: '0.75rem 2rem', fontSize: '1.125rem' }}>
                            View Demo
                        </button>
                    </div>

                    {/* Abstract Dashboard Preview */}
                    <div style={{
                        marginTop: 'var(--space-16)',
                        background: 'rgba(30,41,59,0.5)',
                        border: '1px solid var(--border-highlight)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--space-4)',
                        boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)',
                        position: 'relative'
                    }}>
                        {/* Simple structural representation of dashboard to avoid image dependency */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '250px 1fr',
                            gap: '20px',
                            height: '400px',
                            overflow: 'hidden'
                        }}>
                            {/* Sidebar */}
                            <div style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', padding: '20px' }}>
                                <div style={{ height: '20px', width: '80%', background: 'var(--bg-card-hover)', borderRadius: '4px', marginBottom: '20px' }}></div>
                                <div style={{ height: '12px', width: '100%', background: 'var(--bg-card-hover)', borderRadius: '4px', marginBottom: '10px', opacity: 0.5 }}></div>
                                <div style={{ height: '12px', width: '100%', background: 'var(--bg-card-hover)', borderRadius: '4px', marginBottom: '10px', opacity: 0.5 }}></div>
                                <div style={{ height: '12px', width: '100%', background: 'var(--bg-card-hover)', borderRadius: '4px', marginBottom: '10px', opacity: 0.5 }}></div>
                            </div>
                            {/* Content */}
                            <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '20px' }}>
                                <div style={{ height: '40px', display: 'flex', gap: '10px' }}>
                                    <div style={{ flex: 1, background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}></div>
                                    <div style={{ width: '40px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}></div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', padding: '20px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary)', opacity: 0.2, marginBottom: '15px' }}></div>
                                            <div style={{ height: '16px', width: '70%', background: 'var(--bg-card-hover)', marginBottom: '10px' }}></div>
                                            <div style={{ height: '12px', width: '40%', background: 'var(--bg-card-hover)', opacity: 0.6 }}></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
