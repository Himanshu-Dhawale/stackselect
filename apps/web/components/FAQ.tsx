export default function FAQ() {
    const faqs = [
        { q: "How accurate are the recommendations?", a: "Our AI model has a 92% accuracy rate based on user feedback and successful implementation tracking." },
        { q: "Is there a free trial?", a: "Yes! The Basic plan is free forever, and we offer a 14-day trial for the Pro plan." },
        { q: "How often is data updated?", a: "We update our database daily with the latest pricing, feature sets, and user reviews." },
    ];

    return (
        <section id="faq" style={{ padding: 'var(--space-20) 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-12)', textAlign: 'center' }}>
                    Frequently Asked Questions
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    {faqs.map((item, i) => (
                        <div key={i} style={{
                            background: 'var(--bg-card)',
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-subtle)'
                        }}>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--space-2)' }}>{item.q}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.a}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
