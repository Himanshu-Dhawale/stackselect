import OnboardingStepper from '../../components/OnboardingStepper';

export default function OnboardingPage() {
    return (
        <main className="min-h-screen py-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(15,23,42,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(15,23,42,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="container mx-auto">
                <OnboardingStepper />
            </div>
        </main>
    );
}
