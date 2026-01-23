import { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryCard from './components/CategoryCard';
import AnalyticsSection from './components/AnalyticsSection';
import SearchBar from './components/SearchBar';
import { linksData } from './data/links';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // Enhanced search logic
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return linksData;

    const query = searchQuery.toLowerCase();
    return linksData.map(category => {
      // Check if category name matches
      const categoryMatches = category.category.toLowerCase().includes(query);

      // Filter links within category
      const filteredLinks = category.links.filter(link =>
        link.title.toLowerCase().includes(query) ||
        link.url.toLowerCase().includes(query)
      );

      // Return category if it matches or has matching links
      if (categoryMatches || filteredLinks.length > 0) {
        return {
          ...category,
          links: categoryMatches ? category.links : filteredLinks
        };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />

      <main className="container mx-auto flex flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
              Your Gateway to the <br className="hidden sm:inline" />
              <span className="text-primary">Best of the Web</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Curated collection of AI tools, development resources, entertainment, research tools, and more. All in one place.
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
          />

          {/* Quick Stats/Categories Chips could go here */}
        </div>

        {/* Categories Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h3 className="text-xl font-semibold">
              {searchQuery ? 'Search Results' : 'Browse Categories'}
            </h3>
            <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              {filteredCategories.reduce((acc, cat) => acc + cat.links.length, 0)} Resources
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.category}
                category={category}
                defaultOpen={!!searchQuery} // Auto-expand on search
              />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 text-center">
              <p className="text-lg font-medium text-muted-foreground">No results found for "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </section>

        {/* Analytics Section */}
        {!searchQuery && (
          <>
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <AnalyticsSection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
