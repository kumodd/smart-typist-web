/**
 * Smart Typist Landing Page Configuration
 * ========================================
 * ALL content is configurable from this single file.
 * Edit values here to update the landing page instantly.
 */

const CONFIG = {
    //============================================================
    // SECTION VISIBILITY (Toggle any section on/off)
    //============================================================
    sections: {
        announcement: true,
        hero: true,
        trustBadges: true,
        features: true,
        aiModes: true,
        comparison: true,
        howItWorks: true,
        pricing: true,
        roadmap: false,
        testimonials: true,
        faq: true,
        newsletter: true,
        download: true
    },

    //============================================================
    // APP INFO
    //============================================================
    app: {
        name: "Smart Typist",
        tagline: "Type Smarter, Not Harder",
        description: "AI-powered Android keyboard that transforms your typing with intelligent grammar correction, tone adjustments, and smart suggestions.",
        version: "1.5.0",
        minAndroid: "Android 7.0+",
        playStoreLink: "#", // TODO: Add Play Store URL when published
        apkDownloadLink: "../SmartTypist-v1.5.0-debug.apk",
        privacyPolicyLink: "privacy-policy.html",
        termsLink: "terms.html",
        logo: {
            emoji: "⌨️",
            imageUrl: null, // Set to image path to use image instead of emoji
            alt: "Smart Typist Logo"
        }
    },

    //============================================================
    // ANNOUNCEMENT BAR
    //============================================================
    announcement: {
        enabled: true,
        text: "🎉 Now Available! Download Smart Typist v1.5.0 with 8 AI Modes",
        link: "#download",
        linkText: "Download Now →",
        bgGradient: "linear-gradient(90deg, #6C5CE7 0%, #00CEC9 100%)"
    },

    //============================================================
    // THEME SETTINGS
    //============================================================
    theme: {
        defaultMode: "dark", // "dark" or "light"
        colors: {
            primary: "#6C5CE7",
            primaryLight: "#A29BFE",
            primaryDark: "#5849BE",
            accent: "#00CEC9",
            accentLight: "#55EFC4",
            gradient: "linear-gradient(135deg, #6C5CE7 0%, #A29BFE 50%, #00CEC9 100%)"
        }
    },

    //============================================================
    // HERO SECTION
    //============================================================
    hero: {
        badge: "🚀 AI-Powered Keyboard",
        headline: "Type Smarter, <span class='gradient-text'>Not Harder</span>",
        subheadline: "Transform your typing with AI that understands context, fixes grammar, and adapts to your tone — all in real-time.",
        ctaPrimary: "Download APK",
        ctaSecondary: "View Features",
        typingEffect: {
            enabled: true,
            phrases: [
                "Fix grammar instantly",
                "Write professional emails",
                "Convert to Hinglish",
                "Create perfect tweets",
                "Summarize long texts"
            ]
        },
        stats: [
            { value: "8+", label: "AI Tones", icon: "🎨" },
            { value: "5", label: "AI Actions", icon: "⚡" },
            { value: "50ms", label: "Response", icon: "🚀" },
            { value: "100%", label: "Private", icon: "🔒" }
        ]
    },

    //============================================================
    // TRUST BADGES
    //============================================================
    trustBadges: {
        title: "Built with Trust",
        items: [
            { icon: "🔒", text: "Privacy First", description: "Your data stays on your device" },
            { icon: "🇮🇳", text: "Made in India", description: "Built for Indian users" },
            { icon: "⚡", text: "Lightning Fast", description: "50ms AI response time" },
            { icon: "🛡️", text: "Secure API", description: "Encrypted data transfer" }
        ]
    },

    //============================================================
    // FEATURES (Current)
    //============================================================
    features: {
        title: "Everything You Need to <span class='gradient-text'>Type Better</span>",
        subtitle: "Powerful AI features for everyday typing, accessible right from your keyboard.",
        items: [
            {
                icon: "✓",
                title: "Grammar Fix",
                description: "Instantly correct spelling and grammar mistakes with AI precision.",
                tag: "Free",
                highlight: true
            },
            {
                icon: "✍️",
                title: "AI Rewrite",
                description: "Get 8 different versions of your text in various tones and styles.",
                tag: "Free",
                highlight: false
            },
            {
                icon: "💼",
                title: "Formal Tone",
                description: "Transform casual messages into professional business communication.",
                tag: "Free",
                highlight: false
            },
            {
                icon: "💬",
                title: "Casual Tone",
                description: "Make formal text sound friendly and conversational.",
                tag: "Free",
                highlight: false
            },
            {
                icon: "📧",
                title: "Email Mode",
                description: "Convert any text into a properly formatted professional email.",
                tag: "Pro",
                highlight: true
            },
            {
                icon: "🐦",
                title: "Tweet Mode",
                description: "Optimize text for Twitter/X with perfect length and engagement.",
                tag: "Pro",
                highlight: false
            },
            {
                icon: "📝",
                title: "Summarize",
                description: "Condense long text into concise 1-2 sentence summaries.",
                tag: "Pro",
                highlight: false
            },
            {
                icon: "📖",
                title: "Expand",
                description: "Add more details, examples, and context to your writing.",
                tag: "Pro",
                highlight: false
            },
            {
                icon: "💡",
                title: "Smart Replies",
                description: "AI-generated contextual reply suggestions based on conversation.",
                tag: "Free",
                highlight: false
            },
            {
                icon: "🇮🇳",
                title: "Hinglish Support",
                description: "Native support for Hindi-English mixed typing and corrections.",
                tag: "Free",
                highlight: true
            },
            {
                icon: "😀",
                title: "Emoji Picker",
                description: "Full emoji keyboard with categories and quick access.",
                tag: "Free",
                highlight: false
            },
            {
                icon: "🎨",
                title: "Custom Themes",
                description: "Multiple keyboard themes to match your style preference.",
                tag: "Free",
                highlight: false
            }
        ]
    },

    //============================================================
    // AI MODES (Detailed)
    //============================================================
    aiModes: {
        title: "See the <span class='gradient-text'>AI Magic</span> in Action",
        subtitle: "Watch how Smart Typist transforms your text with a single tap.",
        items: [
            {
                name: "Grammar",
                icon: "✓",
                description: "Fix grammar and spelling",
                color: "#00CEC9",
                example: {
                    before: "i am going tomorow to the meting",
                    after: "I am going tomorrow to the meeting."
                }
            },
            {
                name: "Formal",
                icon: "💼",
                description: "Professional business tone",
                color: "#6C5CE7",
                example: {
                    before: "need this asap pls",
                    after: "I would appreciate receiving this at your earliest convenience."
                }
            },
            {
                name: "Casual",
                icon: "💬",
                description: "Friendly relaxed tone",
                color: "#FD79A8",
                example: {
                    before: "Please confirm receipt of my email",
                    after: "Just checking if you got my message!"
                }
            },
            {
                name: "Concise",
                icon: "📌",
                description: "Shorten to essentials",
                color: "#FDCB6E",
                example: {
                    before: "I wanted to reach out to let you know that I am going to be a little bit late today",
                    after: "Running late today."
                }
            },
            {
                name: "Friendly",
                icon: "🤗",
                description: "Warm and enthusiastic",
                color: "#E17055",
                example: {
                    before: "Thank you for your help",
                    after: "Thank you so much! You're amazing! 🙌"
                }
            },
            {
                name: "Hinglish",
                icon: "🇮🇳",
                description: "Hindi-English mix",
                color: "#FF7675",
                example: {
                    before: "I will come tomorrow",
                    after: "Kal aa jaunga bro"
                }
            },
            {
                name: "Email",
                icon: "📧",
                description: "Convert to email format",
                color: "#74B9FF",
                example: {
                    before: "send me the report by friday",
                    after: "Hi,\n\nCould you please send me the report by Friday?\n\nThank you,\n[Your Name]"
                }
            },
            {
                name: "Tweet",
                icon: "🐦",
                description: "Twitter-optimized format",
                color: "#0984E3",
                example: {
                    before: "just launched my new app that helps people type faster",
                    after: "🚀 Just launched my new app!\n\nType faster. Type smarter.\n\nCheck it out 👇 #ProductLaunch #Tech"
                }
            }
        ]
    },

    //============================================================
    // COMPARISON (vs Competitors)
    //============================================================
    comparison: {
        title: "Why Choose <span class='gradient-text'>Smart Typist?</span>",
        subtitle: "See how we compare to other keyboards",
        features: [
            { name: "AI Grammar Fix", smartTypist: true, gboard: "Basic", swiftkey: "Basic" },
            { name: "8 Tone Variants", smartTypist: true, gboard: false, swiftkey: false },
            { name: "Email Formatting", smartTypist: true, gboard: false, swiftkey: false },
            { name: "Tweet Optimization", smartTypist: true, gboard: false, swiftkey: false },
            { name: "Hinglish Support", smartTypist: true, gboard: "Basic", swiftkey: "Basic" },
            { name: "Text Summarization", smartTypist: true, gboard: false, swiftkey: false },
            { name: "Content Expansion", smartTypist: true, gboard: false, swiftkey: false },
            { name: "Privacy First", smartTypist: true, gboard: false, swiftkey: false }
        ],
        competitors: [
            { name: "Gboard", logo: "G" },
            { name: "SwiftKey", logo: "S" }
        ]
    },

    //============================================================
    // HOW IT WORKS
    //============================================================
    howItWorks: {
        title: "Get Started in <span class='gradient-text'>4 Steps</span>",
        subtitle: "From download to enhanced typing in under 2 minutes.",
        steps: [
            {
                step: 1,
                icon: "📥",
                title: "Install & Enable",
                description: "Download Smart Typist and enable it in your Android settings as an input method."
            },
            {
                step: 2,
                icon: "📱",
                title: "Start Typing",
                description: "Use Smart Typist in any app - WhatsApp, Gmail, Notes, everywhere."
            },
            {
                step: 3,
                icon: "✨",
                title: "Tap to Enhance",
                description: "Tap AI buttons to fix grammar, change tone, or transform your text."
            },
            {
                step: 4,
                icon: "🚀",
                title: "Go Pro",
                description: "Upgrade for unlimited AI calls and all premium features."
            }
        ]
    },

    //============================================================
    // PRICING
    //============================================================
    pricing: {
        title: "Simple, <span class='gradient-text'>Transparent</span> Pricing",
        subtitle: "Start free. Upgrade when you need more power.",
        currency: "₹",
        currencySymbol: "₹",
        showApiCost: false,
        apiCostNote: "",
        plans: [
            {
                name: "Free",
                price: 0,
                period: "",
                description: "Get started with basic features",
                badge: null,
                features: [
                    "Grammar correction",
                    "Basic tone adjustments",
                    "Emoji picker",
                    "Basic themes",
                    "5 AI calls/day"
                ],
                notIncluded: [
                    "All 8 AI tones",
                    "Email mode",
                    "Tweet mode",
                    "Summary & Expand",
                    "Unlimited AI calls",
                    "Priority support"
                ],
                cta: "Download Free",
                ctaLink: "#download",
                highlighted: false
            },
            {
                name: "Monthly",
                price: 49,
                period: "month",
                description: "Full access, cancel anytime",
                badge: null,
                features: [
                    "Everything in Free",
                    "All 8 AI tone versions",
                    "Email conversion mode",
                    "Tweet optimization",
                    "Text summarization",
                    "Content expansion",
                    "Unlimited AI calls",
                    "Hinglish support"
                ],
                notIncluded: [],
                cta: "Subscribe Monthly",
                ctaLink: "#download",
                highlighted: false
            },
            {
                name: "Yearly",
                price: 449,
                originalPrice: 588, // 12 months x 49 = 588
                period: "year",
                description: "Best value • Save 24%",
                badge: "Best Value",
                features: [
                    "Everything in Monthly",
                    "Priority support",
                    "Early access to new features",
                    "All future updates included"
                ],
                notIncluded: [],
                cta: "Get Yearly",
                ctaLink: "#download",
                highlighted: true
            }
        ]
    },

    //============================================================
    // UPCOMING FEATURES (Roadmap)
    //============================================================
    upcomingFeatures: {
        title: "What's <span class='gradient-text'>Coming Next</span>",
        subtitle: "We're constantly improving. Here's what's on the horizon.",
        items: [
            {
                title: "Voice to Text",
                description: "Speak and let AI transcribe with perfect accuracy",
                icon: "🎤",
                status: "In Development",
                eta: "Q2 2026",
                progress: 60
            },
            {
                title: "Custom AI Prompts",
                description: "Create your own AI transformation prompts",
                icon: "🎯",
                status: "Planned",
                eta: "Q2 2026",
                progress: 30
            },
            {
                title: "Clipboard AI",
                description: "Enhance any copied text with one tap",
                icon: "📋",
                status: "Planned",
                eta: "Q3 2026",
                progress: 20
            },
            {
                title: "Multi-language Support",
                description: "Support for more Indian languages",
                icon: "🌐",
                status: "Research",
                eta: "Q3 2026",
                progress: 10
            },
            {
                title: "Offline Mode",
                description: "Basic features without internet",
                icon: "📴",
                status: "Research",
                eta: "Q4 2026",
                progress: 5
            }
        ]
    },

    //============================================================
    // TESTIMONIALS
    //============================================================
    testimonials: {
        title: "Loved by <span class='gradient-text'>Users</span>",
        subtitle: "See what people are saying about Smart Typist.",
        items: [
            {
                quote: "Finally a keyboard that understands how Indians actually type! The Hinglish support is incredible.",
                author: "Priya S.",
                role: "Content Creator",
                avatar: null, // Can set image URL
                rating: 5
            },
            {
                quote: "The email mode saved me so much time. I just type rough notes and it formats perfect emails.",
                author: "Rahul M.",
                role: "Startup Founder",
                avatar: null,
                rating: 5
            },
            {
                quote: "Grammar fixes are instant and accurate. Way better than the default keyboard suggestions.",
                author: "Ananya K.",
                role: "Student",
                avatar: null,
                rating: 5
            },
            {
                quote: "I was skeptical about another AI keyboard, but the tone options are genuinely useful for work.",
                author: "Vikram T.",
                role: "Marketing Manager",
                avatar: null,
                rating: 4
            }
        ]
    },

    //============================================================
    // FAQ
    //============================================================
    faq: {
        title: "Frequently Asked <span class='gradient-text'>Questions</span>",
        subtitle: "Got questions? We've got answers.",
        items: [
            {
                question: "Is my data private?",
                answer: "Yes! Your text is only processed when you explicitly tap an AI button. We don't store any typed content. All AI processing happens via secure encrypted connections and nothing is saved on our servers."
            },
            {
                question: "What's included in the Free plan?",
                answer: "The Free plan includes grammar correction, basic tone adjustments, emoji picker, and 5 AI calls per day. Perfect for trying out Smart Typist before upgrading!"
            },
            {
                question: "Can I cancel my subscription?",
                answer: "Yes! You can cancel your Monthly or Yearly subscription anytime from the app. Your premium features will remain active until the end of your billing period."
            },
            {
                question: "Why is Smart Typist better than Gboard?",
                answer: "We're not trying to replace Gboard. Smart Typist is purpose-built for AI text enhancement with 8 tone options, email formatting, tweet optimization, and Hinglish support. Gboard is great for general typing, we focus on making your writing better."
            },
            {
                question: "Does it work offline?",
                answer: "Basic typing works offline. AI features require an internet connection to process your text. We're working on offline support for future versions."
            },
            {
                question: "Which Android versions are supported?",
                answer: "Smart Typist supports Android 7.0 (Nougat) and above. This covers 95%+ of active Android devices."
            },
            {
                question: "Is it available on iOS?",
                answer: "Currently, Smart Typist is Android-only. iOS version is coming soon!"
            },
            {
                question: "How do I upgrade to Pro?",
                answer: "Simply download the app, go to Settings, and choose your preferred plan - Monthly (₹49) or Yearly (₹449). Payment is processed securely through Google Play."
            }
        ]
    },

    //============================================================
    // NEWSLETTER
    //============================================================
    newsletter: {
        enabled: true,
        title: "Stay Updated",
        subtitle: "Get notified about new features and updates",
        placeholder: "Enter your email",
        buttonText: "Subscribe",
        successMessage: "Thanks for subscribing! 🎉",
        // For actual implementation, set up a service like Mailchimp, ConvertKit, etc.
        formAction: "#",
        note: "No spam. Unsubscribe anytime."
    },

    //============================================================
    // DOWNLOAD CTA
    //============================================================
    downloadCta: {
        title: "Ready to <span class='gradient-text'>Type Smarter?</span>",
        subtitle: "Download Smart Typist now and transform your Android typing experience with AI.",
        apkButton: "Download APK",
        playStoreButton: "Coming to Play Store",
        showQRCode: false
    },

    //============================================================
    // SOCIAL & CONTACT
    //============================================================
    social: {
        twitter: "#",
        github: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
        discord: "#"
    },

    contact: {
        email: "hello@smarttypist.app",
        support: "support@smarttypist.app"
    },

    //============================================================
    // FOOTER
    //============================================================
    footer: {
        copyright: "© 2026 Smart Typist. All rights reserved.",
        madeWith: "Made with ❤️ in India",
        links: [
            { label: "Privacy Policy", url: "privacy-policy.html" },
            { label: "Terms of Service", url: "terms.html" },
            { label: "Contact", url: "#contact" }
        ],
        showBackToTop: true
    },

    //============================================================
    // SEO & META
    //============================================================
    seo: {
        title: "Smart Typist - AI-Powered Android Keyboard",
        description: "Transform your typing with AI. Grammar correction, tone adjustment, email formatting, and Hinglish support. Download free for Android.",
        keywords: "AI keyboard, Android keyboard, grammar correction, Hinglish keyboard, smart keyboard, text enhancement, GPT keyboard",
        ogImage: null, // OpenGraph image URL
        twitterHandle: "@smarttypist"
    },

    //============================================================
    // ANIMATIONS
    //============================================================
    animations: {
        enabled: true,
        reduceMotion: false, // Respect prefers-reduced-motion
        heroTyping: true,
        counterAnimation: true,
        scrollReveal: true,
        parallax: true
    },

    //============================================================
    // ANALYTICS (Optional)
    //============================================================
    analytics: {
        googleAnalyticsId: null, // e.g., "G-XXXXXXXXXX"
        facebookPixelId: null,
        enabled: false
    }
};

// Export for use in scripts.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
