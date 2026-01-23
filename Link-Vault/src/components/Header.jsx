import { Moon, Sun, Info, User, Menu, X } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';
import linkVaultLogo from '../assets/LinkVault.png';
import monjurPic from '../assets/Monjur-pic.jpeg';
import Modal from './Modal';
import { useState } from 'react';

export default function Header() {
    const [isDark, setIsDark] = useDarkMode();
    const [activeModal, setActiveModal] = useState(null); // 'about' | 'author' | null
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeModals = () => setActiveModal(null);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
                            <img
                                src={linkVaultLogo}
                                alt="LinkVault"
                                className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                            />
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold leading-none tracking-tight sm:text-xl">
                                    LinkVault
                                </h1>
                                <p className="text-xs text-muted-foreground">
                                    Hub of Curated Resources
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <button
                            onClick={() => setActiveModal('about')}
                            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
                        >
                            <Info className="h-4 w-4" />
                            About
                        </button>

                        <button
                            onClick={() => setActiveModal('author')}
                            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
                        >
                            <User className="h-4 w-4" />
                            Author
                        </button>

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="h-4 w-4 transition-all" />
                            ) : (
                                <Moon className="h-4 w-4 transition-all" />
                            )}
                        </button>

                        <button
                            className="flex items-center justify-center sm:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="border-t border-border bg-background px-4 py-4 sm:hidden">
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => {
                                    setActiveModal('about');
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Info className="h-4 w-4" />
                                About
                            </button>
                            <button
                                onClick={() => {
                                    setActiveModal('author');
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                <User className="h-4 w-4" />
                                Author
                            </button>
                        </div>
                    </div>
                )}
            </header>

            <Modal
                isOpen={activeModal === 'about'}
                onClose={closeModals}
                title="About LinkVault"
            >
                <div className="space-y-4">
                    <p>
                        Link Vault is a centralized platform that organizes essential websites and tools for students, developers, and researchers, enabling faster access, better productivity, and simplified resource discovery across multiple domains.
                    </p>
                    <p className="font-medium text-foreground">
                        The website was created January 2026.
                    </p>
                </div>
            </Modal>

            <Modal
                isOpen={activeModal === 'author'}
                onClose={closeModals}
                title="Meet the Author"
            >
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    <img
                        src={monjurPic}
                        alt="Monjur Morshed"
                        className="h-24 w-24 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="space-y-2">
                        <h4 className="font-bold text-xl text-foreground text-center">Monjur Morshed</h4>
                        <p>
                            An undergraduate engineering student in Information and Communication Engineering at Pabna University of Science and Technology with a strong interest in Web Development, AI tools, and Cybersecurity. He created Link Vault to organize valuable online resources in one place, helping students, developers, and researchers work smarter and save time.
                        </p>
                        <p>
                            <a className="font-bold text-primary hover:underline" href="https://github.com/Monjur3175" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </p>

                    </div>
                </div>
            </Modal>
        </>
    );
}
