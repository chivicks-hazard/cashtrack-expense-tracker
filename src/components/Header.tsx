const Header = () => {
  return (
    <header className="sticky top-0 w-full z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm flex justify-between items-center h-16 px-xl">
      <div className="flex items-center gap-4 flex-1">
        <h2 className="font-headline-md text-headline-md font-bold text-primary hidden md:block">
          Analytics
        </h2>
        <div className="relative w-64 md:ml-8">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-shadow"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 border border-outline-variant rounded-full px-4 py-1.5 bg-surface-container-lowest text-label-md font-label-md hidden md:flex">
          <span className="material-symbols-outlined text-[16px]">
            calendar_today
          </span>
          Date Range
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="contrast"
          >
            contrast
          </span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="notifications"
          >
            notifications
          </span>
        </button>
        <img
          className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-2"
          data-alt="A small, circular avatar portrait of a professional individual looking confident. The background is a soft, neutral grey to ensure the focus remains on the person. The lighting is clean and bright, fitting a modern corporate or tech platform context."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6cR2cOc8YQSZRCf2JrhdeP9tR4-YlBX3G2vnkvCkeo4unesGbRBNoK0_rm-1atYyR0HDcLTEdJW5GdvJn8U-Uvfj4FLn-uUd5QvrMWgBb-qxZ-GsM4z5a1uGOgduhl4YnezNFTTbOXy7N1k-8WdUtyNMJ0GwU0YLmuoWYkEdBalqeFi6UjokL6DnsDmZyKDNVoCGu9cwDXMo_gtpJb0LXm-mxn6SrMOqfOGEV2mj8Ja8hA2qfDblFNDYiMXVxXY3JNk9Th9BDybwO"
        />
      </div>
    </header>
  );
};

export default Header;
