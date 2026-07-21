const AnalyticsPage = () => {
  return (
    <main className="flex-1 p-md md:p-xl overflow-y-auto">
      {/* <!-- Page Header & Actions --> */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-4">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">
            Deep Financial Analysis
          </h1>
          <p className="text-on-surface-variant">
            Detailed insights and trends for your workspace.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* <!-- Filters --> */}
          <div className="bg-surface-container-highest p-1 rounded-lg flex gap-1 mr-2">
            <button className="px-3 py-1 rounded-DEFAULT bg-surface-container-lowest text-on-surface shadow-sm font-label-md text-label-md">
              Monthly
            </button>
            <button className="px-3 py-1 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md">
              Quarterly
            </button>
            <button className="px-3 py-1 rounded-DEFAULT text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-label-md text-label-md">
              Yearly
            </button>
          </div>
          {/* <!-- Export Actions --> */}
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center w-8 h-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant text-primary hover:bg-surface-container transition-colors"
              title="Download PDF"
            >
              <span className="material-symbols-outlined text-[18px]">
                picture_as_pdf
              </span>
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant text-primary hover:bg-surface-container transition-colors"
              title="Download Excel"
            >
              <span className="material-symbols-outlined text-[18px]">
                table_view
              </span>
            </button>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant text-primary hover:bg-surface-container transition-colors"
              title="Download CSV"
            >
              <span className="material-symbols-outlined text-[18px]">
                data_object
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Insight Cards Row --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
        <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-title-md text-title-md text-on-surface-variant">
              Highest Spending Day
            </h3>
            <div className="bg-tertiary-fixed text-on-tertiary-fixed p-1.5 rounded-DEFAULT">
              <span className="material-symbols-outlined text-[18px]">
                trending_up
              </span>
            </div>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface mb-1">
            $4,250.00
          </div>
          <div className="text-label-md font-label-md text-outline">
            Oct 14, 2023 · Server Infrastructure
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-title-md text-title-md text-on-surface-variant">
              Average Daily Spending
            </h3>
            <div className="bg-secondary-fixed text-on-secondary-fixed p-1.5 rounded-DEFAULT">
              <span className="material-symbols-outlined text-[18px]">
                garage
              </span>
            </div>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface mb-1">
            $845.20
          </div>
          <div className="flex items-center gap-1 text-label-md font-label-md text-primary">
            <span className="material-symbols-outlined text-[14px]">
              arrow_downward
            </span>
            <span>12% vs last month</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:scale-[1.02]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-title-md text-title-md text-on-surface-variant">
              Predicted Monthly Expenses
            </h3>
            <div className="bg-surface-container-high text-on-surface p-1.5 rounded-DEFAULT">
              <span className="material-symbols-outlined text-[18px]">
                insights
              </span>
            </div>
          </div>
          <div className="font-headline-lg text-headline-lg text-on-surface mb-1">
            $26,400.00
          </div>
          <div className="w-full h-1 bg-surface-container mt-3 rounded-full overflow-hidden">
            <div className="h-full bg-primary-container w-[75%]"></div>
          </div>
          <div className="mt-1 text-label-md font-label-md text-outline text-right">
            75% of budget
          </div>
        </div>
      </div>
      {/* <!-- Bento Grid Main Charts --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-lg">
        {/* <!-- Net Worth Growth (Spans 2 columns) --> */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">
                Net Worth Growth
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant">
                Historical performance and projection
              </p>
            </div>
            <button className="text-primary hover:bg-surface-container p-1 rounded-DEFAULT transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                more_vert
              </span>
            </button>
          </div>
          <div className="flex-1 relative w-full rounded-lg overflow-hidden border border-outline-variant bg-surface-bright flex items-end justify-between px-4 pb-4">
            {/* <!-- CSS Pattern background to simulate chart area --> */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #6c7a71 1px, transparent 1px), linear-gradient(to bottom, #6c7a71 1px, transparent 1px); background-size: 40px 40px",
              }}
            ></div>
            {/* <!-- Simulated Area Chart Elements --> */}
            <div className="relative z-10 w-full h-[60%] flex items-end justify-between gap-1">
              <div
                className="w-full bg-primary-container/20 rounded-t-sm"
                style={{ height: "30%" }}
              ></div>
              <div
                className="w-full bg-primary-container/30 rounded-t-sm"
                style={{ height: "45%" }}
              ></div>
              <div
                className="w-full bg-primary-container/40 rounded-t-sm"
                style={{ height: "40%" }}
              ></div>
              <div
                className="w-full bg-primary-container/50 rounded-t-sm"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-full bg-primary-container/60 rounded-t-sm"
                style={{ height: "55%" }}
              ></div>
              <div
                className="w-full bg-primary-container/70 rounded-t-sm"
                style={{ height: "75%" }}
              ></div>
              <div
                className="w-full bg-primary-container/80 rounded-t-sm"
                style={{ height: "85%" }}
              ></div>
              <div
                className="w-full bg-primary-container/90 rounded-t-sm"
                style={{ height: "80%" }}
              ></div>
              <div
                className="w-full bg-primary-container rounded-t-sm"
                style={{ height: "100%" }}
              ></div>
            </div>
          </div>
        </div>
        {/* <!-- Category Breakdown (Donut) --> */}
        <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-md text-title-md text-on-surface">
              Category Breakdown
            </h3>
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
              pie_chart
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* <!-- Simulated Donut Chart using CSS --> */}
            <div
              className="w-48 h-48 rounded-full border-[16px] border-surface-container relative flex items-center justify-center"
              style={{
                borderColor: "#10b981",
                borderRightColor: "#acf847",
                borderBottomColor: "#006c49",
                borderLeftColor: "#ffdad6",
                transform: "rotate(-45deg)",
              }}
            >
              <div
                className="w-full h-full rounded-full bg-surface-container-lowest absolute inset-0 -m-[16px]"
                style={{
                  clipPath: "circle(70% at 50% 50%)",
                }}
              ></div>
              <div className="transform rotate-45 text-center relative z-10 flex flex-col items-center justify-center w-32 h-32 bg-surface-container-lowest rounded-full">
                <span className="font-headline-md text-headline-md text-on-surface block">
                  $12.4k
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Total
                </span>
              </div>
            </div>
            <div className="w-full mt-8 space-y-3">
              <div className="flex justify-between items-center text-label-md font-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                  <span>Operations</span>
                </div>
                <span className="text-on-surface font-medium">45%</span>
              </div>
              <div className="flex justify-between items-center text-label-md font-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                  <span>Marketing</span>
                </div>
                <span className="text-on-surface font-medium">25%</span>
              </div>
              <div className="flex justify-between items-center text-label-md font-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Payroll</span>
                </div>
                <span className="text-on-surface font-medium">20%</span>
              </div>
              <div className="flex justify-between items-center text-label-md font-label-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error-container"></div>
                  <span>Misc</span>
                </div>
                <span className="text-on-surface font-medium">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Daily Spending Heatmap --> */}
      <div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant shadow-sm w-full overflow-x-auto">
        <div className="flex justify-between items-center mb-6 min-w-[600px]">
          <div>
            <h3 className="font-title-md text-title-md text-on-surface">
              Daily Spending Heatmap
            </h3>
            <p className="font-label-md text-label-md text-on-surface-variant">
              Activity over the last 30 days
            </p>
          </div>
          <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-xs bg-surface-container"></div>
              <div className="w-3 h-3 rounded-xs bg-primary-fixed-dim opacity-40"></div>
              <div className="w-3 h-3 rounded-xs bg-primary-fixed-dim opacity-70"></div>
              <div className="w-3 h-3 rounded-xs bg-primary-fixed-dim"></div>
              <div className="w-3 h-3 rounded-xs bg-primary"></div>
            </div>
            <span>More</span>
          </div>
        </div>
        {/* <!-- Simulated Heatmap Grid --> */}
        <div className="grid grid-cols-[auto_1fr] gap-4 min-w-[600px]">
          <div className="flex flex-col justify-around text-label-md font-label-md text-on-surface-variant h-32 pr-2 border-r border-outline-variant">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          <div className="grid grid-rows-7 grid-flow-col gap-1 h-32">
            {/* <!-- Generative mock cells --> */}
            <div
              className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"
              title="Day 1: $0"
            ></div>
            <div
              className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
              title="Day 2: $120"
            ></div>
            <div
              className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              title="Day 3: $340"
            ></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-40 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-40 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-40 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-40 hover:opacity-100 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-surface-container hover:bg-outline-variant transition-colors cursor-pointer"></div>
            <div className="w-4 h-full rounded-xs bg-primary-fixed-dim opacity-70 hover:opacity-100 transition-opacity cursor-pointer"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnalyticsPage;
