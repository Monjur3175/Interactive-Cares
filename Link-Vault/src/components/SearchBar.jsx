import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, onClear }) {
    return (
        <div className="relative w-full max-w-2xl">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search across 170+ curated resources..."
                    className="h-14 w-full rounded-2xl border border-border/50 bg-background/50 pl-12 pr-12 text-lg shadow-sm backdrop-blur transition-all placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-4 focus:ring-primary/10"
                />
                {value && (
                    <button
                        onClick={onClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
