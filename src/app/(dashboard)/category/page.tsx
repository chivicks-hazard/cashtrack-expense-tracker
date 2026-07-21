const CategoryPage = () => {
  return (
    <div className="flex-1 overflow-y-auto p-md md:p-xl space-y-xl">
      {/* <!-- Header Section --> */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
        <div>
          <h2 className="font-display-lg text-display-lg md:text-[48px] text-[32px] text-on-surface">
            Category Management
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">
            Track and adjust your visual spending categories.
          </p>
        </div>
        <button className="bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-lg rounded-lg flex items-center gap-sm hover:opacity-90 transition-opacity shadow-sm">
          <span className="material-symbols-outlined text-[18px]">
            add_circle
          </span>
          New Category
        </button>
      </div>
      {/* <!-- Bento Grid Layout --> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* <!-- Main Category Grid (Spans 8 columns on large screens) --> */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-lg">
          {/* <!-- Category Card 1 --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover-card shadow-sm flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Dining
                </h3>
              </div>
              <span className="bg-secondary-fixed/20 text-on-secondary-fixed font-label-md text-label-md px-2 py-1 rounded">
                Active
              </span>
            </div>
            <div>
              <div className="flex justify-between items-end mb-xs">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  $1,240
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  of $1,500
                </span>
              </div>
              <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                <div
                  className="progress-gradient h-full rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
          </div>
          {/* <!-- Category Card 2 --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover-card shadow-sm flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">flight</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Travel
                </h3>
              </div>
              <span className="bg-secondary-fixed/20 text-on-secondary-fixed font-label-md text-label-md px-2 py-1 rounded">
                Active
              </span>
            </div>
            <div>
              <div className="flex justify-between items-end mb-xs">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  $3,450
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  of $4,000
                </span>
              </div>
              <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                <div
                  className="progress-gradient h-full rounded-full"
                  style={{ width: "86%" }}
                ></div>
              </div>
            </div>
          </div>
          {/* <!-- Category Card 3 --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover-card shadow-sm flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Housing
                </h3>
              </div>
              <span className="bg-secondary-fixed/20 text-on-secondary-fixed font-label-md text-label-md px-2 py-1 rounded">
                Active
              </span>
            </div>
            <div>
              <div className="flex justify-between items-end mb-xs">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  $2,800
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  of $2,800
                </span>
              </div>
              <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
          {/* <!-- Category Card 4 --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg hover-card shadow-sm flex flex-col justify-between h-48">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Retail
                </h3>
              </div>
              <span className="bg-error-container text-on-error-container font-label-md text-label-md px-2 py-1 rounded">
                Over
              </span>
            </div>
            <div>
              <div className="flex justify-between items-end mb-xs">
                <span className="font-headline-lg text-headline-lg text-error">
                  $650
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  of $500
                </span>
              </div>
              <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                <div
                  className="bg-error h-full rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Side Panel (Spans 4 columns) --> */}
        <div className="lg:col-span-4 flex flex-col gap-lg">
          {/* <!-- Statistics Panel --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h3 className="font-title-md text-title-md text-on-surface mb-md">
              Category Insights
            </h3>
            <div className="space-y-md">
              <div className="bg-surface-container-low p-md rounded-lg">
                <span className="font-label-md text-label-md text-on-surface-variant block mb-xs">
                  Highest Spending Category
                </span>
                <div className="flex justify-between items-center">
                  <span className="font-title-md text-title-md text-on-surface">
                    Travel
                  </span>
                  <span className="font-headline-md text-headline-md text-primary">
                    $3,450
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-md rounded-lg">
                <span className="font-label-md text-label-md text-on-surface-variant block mb-xs">
                  Average Monthly Spending
                </span>
                <div className="flex justify-between items-center">
                  <span className="font-title-md text-title-md text-on-surface">
                    All Categories
                  </span>
                  <span className="font-headline-md text-headline-md text-primary">
                    $1,850
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Minimalist Chart Area Placeholder --> */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm flex-1 flex flex-col">
            <h3 className="font-title-md text-title-md text-on-surface mb-md">
              Distribution
            </h3>
            <div className="flex-1 rounded-lg overflow-hidden relative min-h-[150px]">
              <div
                className="bg-cover bg-center w-full h-full absolute inset-0 opacity-50 mix-blend-multiply"
                data-alt="A minimalist abstract data visualization showing a smooth, flowing colorful gradient area chart against a clean white background, soft lighting, professional fintech aesthetic, light mode."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvgl-JMod1h-k6lxvKosAzH2i1lmQeCL4MIW3wonDUZOnXbbGSfXuNSrsHp7WLraPmZ3jwIPeoTrcX037VZC0s4c7ZANogRD1VJiIIgGxOAhwnom7WySd6mdCtUMUW9B1zfcnV3Oqz34k_jqyDQSbF3_K0iCiIQNfPznHKIr_fnk73wnDhkm6gpcmz_obJFgcsNXHooKnEFtFEFsASo2vWEZS6W9PbNgHISG8WpUr6BTugG7WN84H7s_If4q3RJDeMMfNGazJ-Ofrf')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
