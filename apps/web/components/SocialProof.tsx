export default function SocialProof() {
    const brands = ['ProductHunt', 'TechCrunch', 'Forbes', 'IndieHackers', 'HackerNews'];

    return (
        <section style={{ padding: 'var(--space-8) 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="container">
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 'var(--space-6)', fontSize: '0.875rem' }}>
                    Trusted by 500+ founders and startups
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-8)',
                    flexWrap: 'wrap',
                    opacity: 0.6
                }}>
                    {brands.map((brand) => (
                        <div key={brand} style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--text-muted)',
                            border: '2px solid var(--border-subtle)',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)'
                        }}>
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
