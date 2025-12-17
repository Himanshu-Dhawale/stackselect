'use client';

import { useState } from 'react';

type Step = 'business-type' | 'team-size' | 'main-need' | 'recommendations';

interface FormData {
    businessType: string;
    teamSize: string;
    mainNeed: string;
}

const steps = [
    {
        id: 'business-type',
        title: 'Business Type',
        description: 'What kind of business are you building?',
        options: [
            { id: 'saas', label: 'SaaS', icon: '🚀' },
            { id: 'ecommerce', label: 'E-commerce', icon: '🛍️' },
            { id: 'agency', label: 'Agency', icon: '🏢' },
        ]
    },
    {
        id: 'team-size',
        title: 'Team Size',
        description: 'How big is your team currently?',
        options: [
            { id: 'solo', label: 'Solo Founder', icon: '👤' },
            { id: 'small', label: 'Small Team (2-10)', icon: '👥' },
            { id: 'medium', label: 'Growing (11-50)', icon: '🏢' },
        ]
    },
    {
        id: 'main-need',
        title: 'Primary Goal',
        description: 'What is your main focus right now?',
        options: [
            { id: 'customers', label: 'Get Customers', icon: '📢' },
            { id: 'manage', label: 'Manage Operations', icon: '⚙️' },
            { id: 'finance', label: 'Handle Money', icon: '💰' },
        ]
    }
];

export default function OnboardingStepper() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        businessType: '',
        teamSize: '',
        mainNeed: ''
    });
    const [isAnimating, setIsAnimating] = useState(false);

    const currentStep = steps[currentStepIndex];
    const isLastStep = currentStepIndex === steps.length;

    const handleSelect = (value: string) => {
        setIsAnimating(true);

        // Update data
        if (currentStepIndex === 0) setFormData(prev => ({ ...prev, businessType: value }));
        else if (currentStepIndex === 1) setFormData(prev => ({ ...prev, teamSize: value }));
        else if (currentStepIndex === 2) setFormData(prev => ({ ...prev, mainNeed: value }));

        // Small delay for animation before moving next
        setTimeout(() => {
            setCurrentStepIndex(prev => prev + 1);
            setIsAnimating(false);
        }, 400);
    };

    const reset = () => {
        setCurrentStepIndex(0);
        setFormData({ businessType: '', teamSize: '', mainNeed: '' });
    };

    // Recommendations View
    if (isLastStep) {
        return (
            <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Perfect Stack for your <span className="text-gradient capitalize">{formData.businessType}</span> Business
                    </h2>
                    <p className="text-muted text-xl">
                        Based on your needs, here are our top AI-curated recommendations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { name: 'Notion', category: 'Workspace', desc: 'All-in-one workspace for your team.' },
                        { name: 'Linear', category: 'Project Mgmt', desc: 'Streamline issues, sprints, and product roadmap.' },
                        { name: 'Stripe', category: 'Payments', desc: 'Financial infrastructure for the internet.' },
                    ].map((tool, i) => (
                        <div key={i} className="bg-card hover:bg-card-hover border border-white/10 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-2xl">
                                ⚡
                            </div>
                            <div className="text-sm text-primary font-medium mb-2">{tool.category}</div>
                            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                            <p className="text-muted text-sm">{tool.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Want a complete analysis?</h3>
                    <p className="text-muted mb-6 max-w-lg mx-auto">
                        Get a detailed breakdown of costs, integrations, and alternative options specifically tailored for a {formData.teamSize} team.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="btn btn-primary" onClick={() => alert('Sign up flow would go here!')}>
                            Create Full Profile
                        </button>
                        <button className="btn btn-secondary" onClick={reset}>
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Safe check for currentStep (appease TS although we know it exists here if not isLastStep)
    if (!currentStep) return null;

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12 relative">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
                        style={{ width: `${((currentStepIndex + 1) / 3) * 100}%` }}
                    />
                </div>
                <div className="flex justify-between mt-4 text-sm text-muted">
                    <span>Step {currentStepIndex + 1} of 3</span>
                    <span>{currentStep.title}</span>
                </div>
            </div>

            {/* Card Content */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                <h2 className="text-4xl font-bold mb-4 text-center">{currentStep.title}</h2>
                <p className="text-xl text-muted text-center mb-10">{currentStep.description}</p>

                <div className="grid gap-4">
                    {currentStep.options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className="group flex items-center p-6 rounded-xl border border-white/10 bg-card hover:bg-card-hover hover:border-primary/50 transition-all duration-200 text-left outline-none focus:ring-2 focus:ring-primary/50"
                        >
                            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-2xl mr-6 group-hover:scale-110 transition-transform">
                                {option.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{option.label}</h3>
                                <p className="text-sm text-muted">Select this if you run a {option.label.toLowerCase()} business.</p>
                            </div>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                                →
                            </div>
                        </button>
                    ))}
                </div>

                {currentStepIndex > 0 && (
                    <button
                        onClick={() => setCurrentStepIndex(prev => prev - 1)}
                        className="mt-8 text-muted hover:text-white transition-colors text-sm flex items-center mx-auto"
                    >
                        ← Back to previous question
                    </button>
                )}
            </div>
        </div>
    );
}
