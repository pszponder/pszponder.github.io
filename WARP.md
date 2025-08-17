# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Hugo Operations
```bash
# Start development server with live reload
hugo server -D --bind 0.0.0.0

# Build the site for production
hugo

# Build with specific environment
hugo --environment production

# Check Hugo version and installation
hugo version
```

### Content Creation
```bash
# Create a new blog post
hugo new content/posts/post-name.md

# Create content using archetype
hugo new content/posts/post-name.md --kind post

# Create other content types
hugo new content/about.md
hugo new content/projects.md
```

### Theme Management
```bash
# Update hugo-coder theme submodule
git submodule update --remote themes/hugo-coder

# Initialize submodules (if cloning fresh)
git submodule update --init --recursive
```

### Module Management
```bash
# Update Hugo modules
hugo mod get -u

# Clean module cache
hugo mod clean

# Verify modules
hugo mod graph
```

### Deployment & Publishing
```bash
# Clean and rebuild public directory
rm -rf public/
hugo

# Preview the built site locally
cd public && python -m http.server 8080
```

## Architecture & Structure

### Site Configuration
- **Hugo Configuration**: `hugo.toml` - Main site configuration with theme settings, menu structure, social links, and Catppuccin color scheme
- **Theme**: Uses `hugo-coder` as a Git submodule for clean, minimal design
- **Content Types**: Posts, pages (About, Projects), with JSON output for search functionality

### Content Organization
- `content/posts/` - Blog posts with front matter including tags, categories, dates
- `content/about.md` - Personal biography and technical skills
- `content/projects.md` - Project showcase linking to GitHub repositories
- `content/search.md` - Search page for blog content
- `archetypes/default.md` - Template for new content creation

### Theme Customization
- Custom layouts in `layouts/` directory override theme defaults
- `layouts/index.json` - Generates JSON index for search functionality across posts
- `assets/` directory contains custom SCSS/CSS for Catppuccin color scheme integration
- `static/images/` contains site assets like avatars and favicons

### Key Features
- **Search**: JSON-based search across blog posts using custom layout
- **Tags & Categories**: Taxonomies configured for content organization
- **Social Integration**: GitHub, LinkedIn, Twitter links in site configuration
- **Responsive Design**: Mobile-friendly theme with dark/light mode toggle
- **SEO Optimized**: Proper meta tags, JSON-LD, and sitemap generation
- **Obsidian-style Callouts**: Full support for Obsidian callout syntax via hugo-admonitions module

### Development Workflow
1. Content is written in Markdown with TOML front matter
2. Hugo processes content through the hugo-coder theme
3. Custom SCSS provides Catppuccin color theming
4. JSON index enables client-side search functionality
5. Static site generation creates deployable HTML/CSS/JS

### Hugo Modules
The site uses Hugo modules for enhanced functionality:
- **hugo-coder**: Main theme providing the site layout and design
- **hugo-admonitions**: Enables Obsidian-style callouts in markdown content

### Obsidian-Style Callouts
The site supports native Obsidian callout syntax via the hugo-admonitions module. Use the exact same syntax as in Obsidian:

```markdown
> [!NOTE]
> This is a note callout

> [!WARNING] Custom Title
> This warning has a custom title

> [!TIP]
> Pro tip: Callouts work identically to Obsidian!
```

**Supported callout types:**
- `[!NOTE]`, `[!INFO]`, `[!ABSTRACT]` - Information and context
- `[!TIP]`, `[!IDEA]`, `[!GOAL]` - Tips and guidance
- `[!WARNING]`, `[!CAUTION]`, `[!IMPORTANT]` - Warnings and alerts
- `[!SUCCESS]`, `[!ERROR]`, `[!DANGER]` - Status indicators
- `[!QUESTION]`, `[!TASK]`, `[!EXAMPLE]` - Interactive elements
- `[!CODE]`, `[!EXPERIMENT]`, `[!MEMO]` - Technical content
- `[!QUOTE]`, `[!CONCLUSION]`, `[!NOTIFY]` - Content organization

**Benefits:**
- Copy/paste content between Obsidian and Hugo
- No Hugo-specific shortcodes needed
- Consistent workflow across tools
- Professional styling with icons and colors
