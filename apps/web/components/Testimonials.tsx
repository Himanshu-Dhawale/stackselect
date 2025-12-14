export default function Testimonials() {
    return (
        <section style={{ padding: 'var(--space-20) 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-12)', textAlign: 'center' }}>
                    Loved by Founders
                </h2>

                <div className="grid-cols-2">
                    <div style={{ background: 'var(--bg-card)', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: 'var(--space-6)' }}>
                            "Saved 40+ hours of research. I used to spend days comparing tools, now StackSelect does it in seconds."
                        </p>
                        <div className="flex-between">
                            <div>
                                <div style={{ fontWeight: 700 }}>Sarah J.</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>SaaS Founder</div>
                            </div>
                            <div style={{ color: '#fbbf24' }}>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-card)', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: 'var(--space-6)' }}>
                            "Found tools we didn't know existed. The AI recommended a CRM that fits our specific niche perfectly."
                        </p>
                        <div className="flex-between">
                            <div>
                                <div style={{ fontWeight: 700 }}>Mark T.</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>E-commerce Store</div>
                            </div>
                            <div style={{ color: '#fbbf24' }}>⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
