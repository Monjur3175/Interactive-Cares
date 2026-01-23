import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LinkCard from './LinkCard';

export default function CategoryCard({ category, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const Icon = category.icon;

    return (
        <div className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 transition-colors hover:bg-muted/50 rounded-xl"
            >
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold leading-none tracking-tight">
                            {category.category}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {category.links.length} Resources
                        </p>
                    </div>
                </div>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="grid gap-4 p-6 pt-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {category.links.map((link, index) => (
                                <LinkCard key={`${link.title}-${index}`} link={link} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
