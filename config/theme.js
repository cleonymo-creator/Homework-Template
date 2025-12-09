// ============================================
// THEME CONFIGURATION
// ============================================
// Customize the visual appearance of your homework
// The AI can generate this based on your preferred style
// ============================================

window.THEME_CONFIG = {
  // Color scheme
  colors: {
    primary: "#2563eb",      // Main brand color (buttons, headers)
    secondary: "#3b82f6",    // Secondary accent
    accent: "#f59e0b",       // Highlight color (points, badges)
    background: "#f8fafc",   // Page background
    surface: "#ffffff",      // Card backgrounds
    text: "#1e293b",         // Main text color
    textLight: "#64748b",    // Secondary text
    success: "#10b981",      // Correct answers
    error: "#ef4444",        // Incorrect answers
    warning: "#f59e0b"       // Warnings, partial scores
  },
  
  // Typography
  fonts: {
    heading: "'Playfair Display', serif",  // For titles and headings
    body: "'Source Sans 3', sans-serif"     // For body text
  },
  
  // Optional hero image (displayed on login screen)
  // Place your image in assets/images/ and reference it here
  heroImage: null, // e.g., "assets/images/hero.png"
  
  // Optional character/mascot images
  characterImages: [], // e.g., ["assets/images/mascot.png"]
  
  // Style preset (affects overall feel)
  // Options: "modern", "playful", "academic", "minimal", "vintage"
  style: "modern"
};

// ============================================
// PRESET THEMES (for reference)
// ============================================
// You can copy any of these into the THEME_CONFIG above

/*
// PLAYFUL THEME - Great for younger students
{
  colors: {
    primary: "#8b5cf6",
    secondary: "#a78bfa",
    accent: "#fbbf24",
    background: "#fdf4ff",
    surface: "#ffffff",
    text: "#1e1b4b",
    success: "#22c55e",
    error: "#f43f5e",
    warning: "#fb923c"
  },
  fonts: {
    heading: "'Nunito', sans-serif",
    body: "'Nunito', sans-serif"
  },
  style: "playful"
}

// ACADEMIC THEME - Formal, scholarly feel
{
  colors: {
    primary: "#1e3a5f",
    secondary: "#2d5a87",
    accent: "#c9a227",
    background: "#f5f5f0",
    surface: "#ffffff",
    text: "#1a1a1a",
    success: "#2d6a4f",
    error: "#9b2c2c",
    warning: "#b45309"
  },
  fonts: {
    heading: "'Crimson Pro', serif",
    body: "'Source Sans 3', sans-serif"
  },
  style: "academic"
}

// NATURE THEME - Calming, organic feel
{
  colors: {
    primary: "#059669",
    secondary: "#10b981",
    accent: "#fbbf24",
    background: "#ecfdf5",
    surface: "#ffffff",
    text: "#064e3b",
    success: "#22c55e",
    error: "#dc2626",
    warning: "#d97706"
  },
  fonts: {
    heading: "'Merriweather', serif",
    body: "'Open Sans', sans-serif"
  },
  style: "nature"
}

// DARK THEME - Modern, high contrast
{
  colors: {
    primary: "#6366f1",
    secondary: "#818cf8",
    accent: "#fbbf24",
    background: "#0f172a",
    surface: "#1e293b",
    text: "#f1f5f9",
    textLight: "#94a3b8",
    success: "#22c55e",
    error: "#ef4444",
    warning: "#f59e0b"
  },
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif"
  },
  style: "dark"
}
*/
