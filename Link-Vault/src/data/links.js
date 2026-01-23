import {
    Bot, Image, Globe, Palette, Gamepad2, Film, Tv, Monitor,
    BookOpen, Music, Play, Shield, Video, AlertTriangle,
    Lock, Cpu, Layout, Microscope, DollarSign, UserCheck,
    Mic, User, Search
} from 'lucide-react';

export const linksData = [
    {
        category: "LLMs",
        icon: Bot,
        description: "Large Language Models & Chatbots",
        links: [
            { title: "ChatGPT", url: "https://chatgpt.com/" },
            { title: "Gemini", url: "https://gemini.google.com/app" },
            { title: "DeepSeek", url: "https://www.deepseek.com/" },
            { title: "Claude", url: "https://claude.ai/" },
            { title: "Grok", url: "https://grok.com/" },
            { title: "Llama", url: "https://www.llama.com/" },
            { title: "Qwen", url: "https://qwen.ai/home" },
            { title: "Z.ai", url: "https://chat.z.ai/" },
            { title: "Copilot", url: "https://copilot.microsoft.com/" },
            { title: "Perplexity", url: "https://www.perplexity.ai/" },
            { title: "Meta AI", url: "https://www.meta.ai/" },
            { title: "DeepAI", url: "https://deepai.org/" },
            { title: "Freepik", url: "https://www.freepik.com/" },
        ]
    },
    {
        category: "Self Improvement",
        icon: User,
        description: "Growth & Learning",
        links: [

            { title: "Notion", url: "https://www.notion.com/" },
            { title: "GetFluently", url: "https://getfluently.app/" },
            { title: "Docus", url: "https://docus.ai" },
            { title: "MathGPT", url: "https://math-gpt.org/" },
            { title: "Raena", url: "https://raena.ai/" },
            { title: "Shroomy", url: "https://www.shroomyapp.com/" },
            { title: "SkillDuck", url: "https://skillduck.com/" },
            { title: "Arist", url: "https://www.arist.co/" },
            { title: "Oboe", url: "https://oboe.com/" },
            { title: "BookRead", url: "https://www.bookread.ai" },
        ]
    },
    {
        category: "Research Tools",
        icon: Microscope,
        description: "Academic & Scientific Resources",
        links: [
            // AI
            { title: "Consensus", url: "https://consensus.app/" },
            { title: "Typeset", url: "https://scispace.com/" },
            { title: "Scihub", url: "https://sci-hub.su/" },
            { title: "ResearchGate", url: "https://www.researchgate.net/" },
            // Reference Management
            { title: "EndNote", url: "https://endnote.com/" },
            { title: "Paperpile", url: "https://paperpile.com/" },
            { title: "Mendeley", url: "https://www.mendeley.com/" },
            { title: "RefWorks", url: "https://refworks.proquest.com/" },
            { title: "CrossRef", url: "https://www.crossref.org/" },
            { title: "Cite This For Me", url: "https://www.citethisforme.com/" },
            { title: "Zotero", url: "https://www.zotero.org/" },
            // Data Analysis
            { title: "Tableau", url: "https://www.tableau.com/" },
            { title: "Posit", url: "https://posit.co/" },
            { title: "SPSS", url: "https://www.ibm.com/spss" },
            { title: "Plotly", url: "https://plotly.com/" },
            { title: "NVivo", url: "https://lumivero.com/products/nvivo/" },
            { title: "MindMeister", url: "https://www.mindmeister.com/" },
            { title: "Power BI", url: "https://www.microsoft.com/power-platform/products/power-bi" },
            { title: "Excel", url: "https://www.microsoft.com/en/microsoft-365/excel" },
            // Note Taking
            { title: "Evernote", url: "https://evernote.com/" },
            { title: "Scrivener", url: "https://www.literatureandlatte.com/scrivener/" },
            { title: "OneNote", url: "https://www.onenote.com/" },
            { title: "Google Keep", url: "https://keep.google.com/" },
            { title: "AudioPen", url: "https://audiopen.ai/" },
            { title: "Notion", url: "https://www.notion.so/" },
            // Writing
            { title: "Writefull", url: "https://www.writefull.com/" },
            { title: "LaTeX", url: "https://www.latex-project.org/" },
            { title: "Overleaf", url: "https://www.overleaf.com/" },
            { title: "Google Docs", url: "https://docs.google.com/" },
            { title: "Turnitin", url: "https://www.turnitin.com/" },
            { title: "Scribbr", url: "https://www.scribbr.com/" },
            { title: "Paperpal", url: "https://paperpal.com/" },
            { title: "Trinka", url: "https://www.trinka.ai/" },
            { title: "Grammarly", url: "https://www.grammarly.com/" },
            { title: "QuillBot", url: "https://quillbot.com/" },
            // Literature Review
            { title: "Semantic Scholar", url: "https://www.semanticscholar.org/" },
            { title: "Litmaps", url: "https://www.litmaps.com/" },
            { title: "Scite", url: "https://scite.ai/" },
            { title: "ResearchRabbit", url: "https://www.researchrabbit.ai/" },
            { title: "Connected Papers", url: "https://www.connectedpapers.com/" },
            { title: "Researcher.Life", url: "https://discovery.researcher.life/" },
            // Diagrams
            { title: "Draw.io", url: "https://app.diagrams.net/" },
            { title: "Lucidchart", url: "https://www.lucidchart.com/" },
            { title: "Visio", url: "https://www.microsoft.com/visio" },
            { title: "Inkscape", url: "https://inkscape.org/" },
            { title: "Ipe", url: "https://ipe.otfried.org/" },
            { title: "Keenious", url: "https://keenious.com/" },
            { title: "BioRender", url: "https://biorender.com/" },
            { title: "GraphPad Prism", url: "https://www.graphpad.com/scientific-software/prism/" },
        ]
    },
    {
        category: "Web Development",
        icon: Globe,
        description: "Tools for Modern Web Apps",
        links: [
            { title: "Lovable", url: "https://lovable.dev/" },
            { title: "Bolt", url: "https://bolt.new/" },
            { title: "Emergent", url: "https://app.emergent.sh/landing/" },
            { title: "Dora", url: "https://www.dora.run/" },
        ]
    },
    {
        category: "Image Generation",
        icon: Image,
        description: "AI Art & Image Creation Tools",
        links: [
            { title: "Midjourney", url: "https://www.midjourney.com/home" },
            { title: "DALL-E 3", url: "https://openai.com/index/dall-e-3/" },
            { title: "Stable Diffusion", url: "https://stablediffusionweb.com/" },
            { title: "Adobe Firefly", url: "https://www.adobe.com/products/firefly.html" },
            { title: "Imagen", url: "https://deepmind.google/models/imagen/" },
            { title: "Flux", url: "https://flux1.ai/" },
        ]
    },
    {
        category: "Useful Websites",
        icon: Layout,
        description: "Useful Utilities & Tools",
        links: [
            { title: "GravityWrite", url: "https://app.gravitywrite.com/home" },
            { title: "Remove.bg", url: "https://www.remove.bg/" },
            { title: "TypingBird", url: "https://typingbird.com/" },
            { title: "AutoDraw", url: "https://www.autodraw.com/" },
            { title: "MuscleWiki", url: "https://musclewiki.com/" },
            { title: "CleanPNG", url: "https://www.cleanpng.com/" },
            { title: "VirusTotal", url: "https://www.virustotal.com/gui/home/upload" },
            { title: "PDF Candy", url: "https://pdfcandy.com/" },
            { title: "FutureTools", url: "https://www.futuretools.io/" },
            { title: "Solm8", url: "https://solm8.ai/" },
        ]
    },
    {
        category: "Design",
        icon: Palette,
        description: "UI/UX & Graphic Design",
        links: [
            { title: "v0", url: "https://v0.app/" },
            { title: "Figma", url: "https://www.figma.com/" },
            { title: "Canva", url: "https://www.canva.com/" },
        ]
    },
    {
        category: "Games",
        icon: Gamepad2,
        description: "Gaming Resources & Downloads",
        links: [
            { title: "FitGirl Repacks", url: "https://fitgirl-repacks.site/" }, // Corrected URL primarily, but keeping user's label
            { title: "GOG Games", url: "https://gog-games.to/" },
            { title: "DODI Repacks", url: "https://dodi-repacks.download/" },
            { title: "Anker Games", url: "https://ankergames.net/" },
            { title: "EmuParadise", url: "https://www.emuparadise.me/" },
            { title: "WeMod", url: "https://www.wemod.com/" },
        ]
    },
    {
        category: "Movies",
        icon: Film,
        description: "Streaming & Torrents",
        links: [
            { title: "Flixer", url: "https://flixer.sh/" },
            { title: "Net20", url: "https://net20.cc/home" },
            { title: "Cineby", url: "https://www.cineby.gd/" },
            { title: "Bitcine", url: "https://www.bitcine.app/" },
            { title: "Velora TV", url: "https://veloratv.ru/" },
            { title: "Cinegram", url: "https://cinegram.net/home" },
            { title: "1337x", url: "https://1337x.to/home/" },
        ]
    },
    {
        category: "Streaming",
        icon: Tv,
        description: "Live TV & Sports",
        links: [
            { title: "GoStreamEast", url: "https://v3.gostreameast.link/" },
            { title: "SportyHunter", url: "https://sportyhunter.com/" },
            { title: "Easy Web TV", url: "https://zhangboheng.github.io/Easy-Web-TV-M3u8/routes/countries.html" },
        ]
    },
    {
        category: "Software",
        icon: Monitor,
        description: "App & Tool Downloads",
        links: [
            { title: "AppDoze", url: "https://appdoze.net/" },
            { title: "SCloud", url: "https://scloud.ws/" },
            { title: "DownloadPirate", url: "https://www.downloadpirate.com/" },
            { title: "AE Download", url: "https://aedownload.com/" },
            { title: "AudioZ", url: "https://audioz.download/" },
        ]
    },
    {
        category: "Books",
        icon: BookOpen,
        description: "E-books & Audiobooks",
        links: [
            { title: "Z-Library", url: "https://z-lib.gd/" },
            { title: "Rivestream Manga", url: "https://rivestream.org/manga" },
            { title: "LibGen", url: "https://libgen.li/" },
            { title: "Liber3", url: "https://liber3.eth.limo/" },
            { title: "AudioBookBay", url: "https://audiobookbay.lu/" },
            { title: "Full Length Audiobooks", url: "https://fulllengthaudiobooks.net/" },
        ]
    },
    {
        category: "Music",
        icon: Music,
        description: "Music Streaming & Downloads",
        links: [
            { title: "Racoon", url: "https://shailen.dedyn.io/racoon/" },
            { title: "AzMP3", url: "https://azmp3.cc/pro1/" },
            { title: "EzMP3", url: "https://ezmp3.im/" },
            { title: "Lucida", url: "https://lucida.to/" },
            { title: "CnvMP3", url: "https://cnvmp3.com/v51" },
        ]
    },
    {
        category: "Anime",
        icon: Play,
        description: "Anime Streaming Sites",
        links: [
            { title: "Anikai", url: "https://anikai.to/" },
            { title: "XPrime", url: "https://xprime.stream/" },
            { title: "KickAss Anime", url: "https://kickass-anime.ro/" },
            { title: "HiAnime", url: "https://hianime.to/" },
            { title: "Rivestream", url: "https://rivestream.org/" },
        ]
    },
    {
        category: "VPN",
        icon: Shield,
        description: "Privacy & Security Tools",
        links: [
            { title: "NordVPN", url: "https://nordvpn.com/" },
            { title: "ExpressVPN", url: "https://www.expressvpn.com/" },
            { title: "CyberGhost", url: "https://www.cyberghostvpn.com/" },
            { title: "Private Internet Access", url: "https://www.privateinternetaccess.com/" },
            { title: "Surfshark", url: "https://surfshark.com/download" },
            { title: "SafeShell", url: "https://www.safeshellvpn.com/" },
        ]
    },
    {
        category: "Video Generation",
        icon: Video,
        description: "AI Video Creation",
        links: [
            { title: "Higgsfield", url: "https://higgsfield.ai/cinema-studio" },
            { title: "VideoAny", url: "https://videoany.io/" },
            { title: "Veo 3", url: "https://aistudio.google.com/models/veo-3" },
            { title: "InVideo", url: "https://invideo.io/make/ai-video-generator/" },
            { title: "Yollo", url: "https://www.yollo.ai/" },
        ]
    },
    {
        category: "Ad Blocker",
        icon: AlertTriangle,
        description: "Remove Ads & Trackers",
        links: [
            { title: "AdGuard", url: "https://adguard.com/en/welcome.html?aid=135720" },
            { title: "Adblock Plus", url: "https://adblockplus.org/" },
            { title: "uBlock Origin", url: "https://ublockorigin.com/" },
        ]
    },
    {
        category: "Cyber Security",
        icon: Lock,
        description: "Hacking & Pen-testing",
        links: [
            { title: "CrowdStrike", url: "https://www.crowdstrike.com/en-us/" },
            { title: "Darktrace", url: "https://www.darktrace.com/" },
            { title: "PentestGPT", url: "https://pentestgpt.com/" },
            { title: "HackerAI", url: "https://hackerai.co/" },
            { title: "VulnGPT", url: "https://www.yeschat.ai/gpts-2OToJMEAIZ-VulnGPT" },
        ]
    },
    {
        category: "AI Agents",
        icon: Cpu,
        description: "Autonomous AI Tools",
        links: [
            { title: "Cursor", url: "https://cursor.com/" },
            { title: "Antigravity", url: "https://antigravity.google/" },
            { title: "WindSurf", url: "https://windsurf.com/" },
            { title: "ByteBot", url: "https://www.bytebot.ai/" },
            { title: "Refly", url: "https://refly.ai/" },
        ]
    },


    {
        category: "Image Improvement",
        icon: Search,
        description: "Upscale & Enhance Images",
        links: [
            { title: "ArchiQuill", url: "https://archiquill.com/" },
            { title: "Daisy", url: "https://daisy.so/" },
            { title: "RoomX AI", url: "https://roomxai.com" },
            { title: "Deptho", url: "https://deptho.ai/en" },
            { title: "Enhancor", url: "https://www.enhancor.ai/" },
            { title: "Caimera", url: "https://www.caimera.ai/" },
        ]
    },
    {
        category: "Finance",
        icon: DollarSign,
        description: "Financial Tools & Analysis",
        links: [
            { title: "ParserData", url: "https://parserdata.com/" },
            { title: "InvoiceAgent", url: "https://invoiceagent.ai/" },
            { title: "Floowed", url: "https://www.floowed.com/" },
            { title: "Zola Analytics", url: "https://www.zolaanalytics.com/" },
        ]
    },
    {
        category: "AI Detection",
        icon: UserCheck,
        description: "Detect Generated Content",
        links: [
            { title: "PromptGuard", url: "https://promptguard.co/" },
            { title: "CopyrightCheck", url: "https://copyrightcheck.ai/" },
            { title: "Nuanced", url: "https://www.nuanced.dev/" },
            { title: "EyePop", url: "https://www.eyepop.ai/" },
            { title: "Luxand", url: "https://luxand.cloud/" },
            { title: "AirParser", url: "https://airparser.com/" },
            { title: "Cerebrium", url: "https://www.cerebrium.ai/" },
        ]
    },
    {
        category: "Podcast AI",
        icon: Mic,
        description: "Podcast Generation & Editing",
        links: [
            { title: "PodManager", url: "https://www.podmanager.ai/" },
            { title: "Sonofa", url: "https://sonofa.ai/login" },
            { title: "PodSnap", url: "https://podsnap.ai/" },
        ]
    },
    {
        category: "AI Automation",
        icon: Bot,
        description: "AI Automation Tools",
        links: [
            { title: "n8n", url: "https://n8n.io/" },
            { title: "Sim", url: "https://www.sim.ai/" },
        ]
    }
];
