import Link from 'next/link';

export default function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            borderBottom: '1px solid var(--border-subtle)',
        }} className="bg-glass">
            <div className="container" style={{ height: 'var(--nav-height)' }}>
                <div className="flex-between" style={{ height: '100%' }}>
                    {/* Logo */}
                    <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="text-gradient">StackSelect</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-only" style={{ gap: '2rem' }}>
                        <Link href="#features" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Features</Link>
                        <Link href="#pricing" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Pricing</Link>
                        <Link href="#faq" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>FAQ</Link>
                    </nav>

                    {/* CTA */}
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Link href="/login" style={{ color: 'var(--text-main)', fontWeight: 500 }}>
                            Login
                        </Link>
                        <Link href="/get-started" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
