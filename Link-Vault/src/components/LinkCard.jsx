import { ExternalLink } from 'lucide-react';
import { memo } from 'react';

const LinkCard = memo(({ link }) => {
    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-primary/50"
        >
            <div className="flex items-start justify-between w-full">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <img
                        src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=128`}
                        alt={link.title}
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <ExternalLink className="h-6 w-6 hidden" />
                </div>

                <ExternalLink className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
            </div>

            <div className="flex flex-col gap-1">
                <span className="font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {link.title}
                </span>
                <span className="text-xs text-muted-foreground line-clamp-1 break-all">
                    {new URL(link.url).hostname.replace(/^www\./, '')}
                </span>
            </div>
        </a>
    );
});

LinkCard.displayName = 'LinkCard';
export default LinkCard;
