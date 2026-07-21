const Budgets = () => {
  return (
    <div className="flex-1 overflow-y-auto p-md md:p-xl space-y-xl">
      {/* <!-- Summary Bento --> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant col-span-1 md:col-span-2 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 w-32 h-32 bg-primary-container/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-xs">
            Monthly Budget
          </h3>
          <div className="font-display-lg text-display-lg text-on-surface mb-md">
            $8,500.00
          </div>
          <div className="flex items-center gap-md">
            <div className="flex-1 bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary-container h-full rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              65% Used
            </span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant flex flex-col justify-between hover:shadow-md transition-shadow">
          <h3 className="font-label-md text-label-md text-on-surface-variant">
            Remaining
          </h3>
          <div className="font-headline-lg text-headline-lg text-primary-container">
            $2,975.00
          </div>
          <div className="flex items-center gap-xs text-primary font-label-md text-label-md bg-surface-container-low w-fit px-sm py-xs rounded">
            <span className="material-symbols-outlined text-[16px]">
              trending_down
            </span>
            12% vs last month
          </div>
        </div>
        <div className="bg-error-container p-lg rounded-xl shadow-sm border border-error/20 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <h3 className="font-label-md text-label-md text-on-tertiary-container">
              Overspending
            </h3>
            <span className="material-symbols-outlined text-error">
              warning
            </span>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-tertiary-container">
            $450.00
          </div>
          <div className="font-label-md text-label-md text-on-tertiary-container opacity-80">
            In Dining &amp; Entertainment
          </div>
        </div>
      </div>
      {/* <!-- Main Content Grid --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* <!-- Category Budgets --> */}
        <div className="lg:col-span-2 space-y-lg">
          <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">
              pie_chart
            </span>
            Category Budgets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {/* <!-- Housing Card --> */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex justify-between items-start mb-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      home
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface">
                    Housing
                  </h4>
                </div>
                <span className="bg-surface-container px-sm py-xs rounded font-label-md text-label-md text-on-surface-variant">
                  Healthy
                </span>
              </div>
              <div className="flex justify-between items-end mb-sm">
                <span className="font-headline-md text-headline-md text-on-surface">
                  $2,400
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  / $2,500
                </span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary-container h-full rounded-full"
                  style={{ width: "96%" }}
                ></div>
              </div>
            </div>
            {/* <!-- Food Card --> */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-error/50 hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex justify-between items-start mb-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded bg-error-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-[20px]">
                      restaurant
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface">
                    Food
                  </h4>
                </div>
                <span className="bg-error-container px-sm py-xs rounded font-label-md text-label-md text-error flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">
                    error
                  </span>{" "}
                  Exceeded
                </span>
              </div>
              <div className="flex justify-between items-end mb-sm">
                <span className="font-headline-md text-headline-md text-error">
                  $950
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  / $800
                </span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-error h-full rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            {/* <!-- Transport Card --> */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex justify-between items-start mb-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      directions_car
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface">
                    Transport
                  </h4>
                </div>
                <span className="bg-surface-container px-sm py-xs rounded font-label-md text-label-md text-on-surface-variant">
                  Healthy
                </span>
              </div>
              <div className="flex justify-between items-end mb-sm">
                <span className="font-headline-md text-headline-md text-on-surface">
                  $320
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  / $400
                </span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary-container h-full rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            {/* <!-- Entertainment Card --> */}
            <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-[#f59e0b]/50 hover:scale-[1.02] transition-transform cursor-pointer">
              <div className="flex justify-between items-start mb-md">
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded bg-[#fef3c7] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#d97706] text-[20px]">
                      movie
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface">
                    Entertainment
                  </h4>
                </div>
                <span className="bg-[#fef3c7] px-sm py-xs rounded font-label-md text-label-md text-[#d97706] flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">
                    warning
                  </span>{" "}
                  Warning
                </span>
              </div>
              <div className="flex justify-between items-end mb-sm">
                <span className="font-headline-md text-headline-md text-[#d97706]">
                  $280
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  / $300
                </span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#f59e0b] h-full rounded-full"
                  style={{ width: "93%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Savings Goal Side Panel --> */}
        <div className="space-y-lg">
          <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">
              savings
            </span>
            Savings Goals
          </h3>
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 to-transparent pointer-events-none"></div>
            <div className="w-full flex justify-between items-center mb-xl">
              <h4 className="font-title-md text-title-md text-on-surface">
                Emergency Fund
              </h4>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            {/* <!-- Circular Progress Placeholder (CSS implementation) --> */}
            <div className="relative w-40 h-40 mb-lg">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  className="text-surface-container"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-primary-container"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="282.7"
                  strokeDashoffset="70.6"
                  strokeLinecap="round"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-lg text-headline-lg text-on-surface">
                  75%
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Funded
                </span>
              </div>
            </div>
            <div className="w-full space-y-md text-left">
              <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Current Balance
                </span>
                <span className="font-title-md text-title-md text-on-surface">
                  $15,000
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Target Amount
                </span>
                <span className="font-title-md text-title-md text-on-surface">
                  $20,000
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Est. Completion
                </span>
                <span className="font-label-md text-label-md bg-surface-container px-sm py-xs rounded text-primary">
                  Oct 2024
                </span>
              </div>
            </div>
            <button className="w-full mt-lg bg-surface text-primary border border-outline-variant py-sm rounded-lg font-title-md text-title-md hover:bg-surface-container transition-colors">
              Add Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
