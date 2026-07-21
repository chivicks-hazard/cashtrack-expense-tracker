const SettingsPage = () => {
  return (
    <main className="flex-1 p-md md:p-xl overflow-y-auto w-full max-w-container-max mx-auto space-y-lg">
          {/* <!-- Settings Layout: Sidebar + Content --> */}
          <div className="flex flex-col lg:flex-row gap-lg">
            {/* <!-- Inner Settings Nav --> */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <nav className="space-y-1 sticky top-24">
                <a
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-surface-container-high text-primary font-title-md text-title-md transition-colors"
                  href="#profile"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    person
                  </span>
                  <span>Profile</span>
                </a>
                <a
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-title-md text-title-md transition-colors"
                  href="#appearance"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    palette
                  </span>
                  <span>Appearance</span>
                </a>
                <a
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-title-md text-title-md transition-colors"
                  href="#preferences"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    tune
                  </span>
                  <span>Preferences</span>
                </a>
                <a
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-title-md text-title-md transition-colors"
                  href="#notifications"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    notifications_active
                  </span>
                  <span>Notifications</span>
                </a>
                <a
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary font-title-md text-title-md transition-colors"
                  href="#data"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    database
                  </span>
                  <span>Data Management</span>
                </a>
              </nav>
            </aside>
            {/* <!-- Settings Sections --> */}
            <div className="flex-1 space-y-xl">
              {/* <!-- Profile Section --> */}
              <section
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                id="profile"
              >
                <h3 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant pb-4">
                  Profile
                </h3>
                <div className="flex flex-col md:flex-row gap-lg items-start">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative group">
                      <img
                        className="w-24 h-24 rounded-full object-cover border-2 border-outline-variant"
                        data-alt="A professional headshot of a corporate executive in a modern bright office space, soft natural lighting, high resolution, minimalist aesthetic."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDskkbfin3jdc-3D3surxy3zHeqxEcvcooSaOIQyQaZUKKFTY8WPyyT00okE1bl_3i8Rv9kYX8Toy0uW5scA7dHrnR_cvf2iBlZRoaseBMCOQm7Izc-S0SSBLlZrMJlSKzhoNtcLZnlStQI_eCamgHqtAkAPa4s7bAngR6NL7oQxPdai4-miLZT7NTKGw11rP2R1yUQWAM0mMZvj7OPcoI6bzokaiJNK4KxAQ4TPwwNmXVVWeaemKu5N7j1ATevGtBfsQWzP9BEGlJS"
                      />
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        <span className="material-symbols-outlined text-white">
                          photo_camera
                        </span>
                      </div>
                    </div>
                    <button className="text-label-md font-label-md text-primary hover:text-primary-container transition-colors">
                      Upload new
                    </button>
                  </div>
                  <div className="flex-1 space-y-6 w-full">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
                        Full Name
                      </label>
                      <input
                        className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all"
                        type="text"
                        value="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
                        Email Address
                      </label>
                      <input
                        className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all"
                        type="email"
                        value="jane.doe@example.com"
                      />
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-sm">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
  );
};

export default SettingsPage;
