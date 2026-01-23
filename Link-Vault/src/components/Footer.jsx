import { useState } from 'react';
import Modal from './Modal';

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (type) => {
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row md:gap-4 px-4 sm:px-6 lg:px-8">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button onClick={() => openModal('privacy')} className="hover:text-primary transition-colors">Privacy</button>
                        <button onClick={() => openModal('terms')} className="hover:text-primary transition-colors">Terms</button>
                        <button onClick={() => openModal('contact')} className="hover:text-primary transition-colors">Contact</button>
                    </div>
                </div>
            </footer>

            <Modal
                isOpen={activeModal === 'privacy'}
                onClose={closeModal}
                title="Privacy Policy"
            >
                <div className="space-y-4">
                    <p><strong>Last Updated: 2026</strong></p>
                    <p>Link Vault respects your privacy. We do not require users to provide personal information such as name, email address, or phone number to use this website.</p>

                    <h4 className="font-semibold text-foreground">Information We May Collect:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Basic analytics data (e.g., page visits, browser type)</li>
                        <li>Cookies to improve user experience</li>
                    </ul>

                    <h4 className="font-semibold text-foreground">What We Do NOT Do:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>We do not sell, trade, or share personal information</li>
                        <li>We do not track users beyond basic analytics</li>
                    </ul>

                    <p>Link Vault contains links to third-party websites. We are not responsible for the privacy practices, content, or security of external sites. Please review their respective privacy policies.</p>
                </div>
            </Modal>

            <Modal
                isOpen={activeModal === 'terms'}
                onClose={closeModal}
                title="Terms & Conditions"
            >
                <div className="space-y-4">
                    <p>By accessing and using Link Vault, you agree to the following terms:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Link Vault is an informational link directory only</li>
                        <li>We do not host, control, or own any third-party content</li>
                        <li>Users access external links at their own risk</li>
                        <li>Link Vault is not responsible for the accuracy, legality, or availability of linked websites</li>
                        <li>Users must not use this website for illegal, harmful, or unethical activities</li>
                        <li>We reserve the right to modify, add, or remove content at any time without prior notice</li>
                    </ul>
                    <p>Violation of these terms may result in restricted access.</p>
                </div>
            </Modal>

            <Modal
                isOpen={activeModal === 'contact'}
                onClose={closeModal}
                title="Contact Us"
            >
                <div className="space-y-4">
                    <p>If you have questions, suggestions, or would like to report an issue, feel free to contact us.</p>

                    <h4 className="font-semibold text-foreground">You can reach us for:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Reporting broken or incorrect links</li>
                        <li>Suggesting new useful websites</li>
                        <li>General feedback or inquiries</li>
                        <li>Collaboration or partnership opportunities</li>
                    </ul>

                    <h4 className="font-semibold text-foreground">Contact Method:</h4>
                    <p>
                        <a className="font-bold text-primary hover:underline" href="mailto:monjurmorshedosama75@gmail.com">
                            monjurmorshedosama75@gmail.com
                        </a>
                    </p>
                    <p className="text-sm italic">We aim to respond within 24–48 hours.</p>
                </div>
            </Modal>
        </>
    );
}
