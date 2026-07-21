const OverviewPage = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto p-md md:p-xl bg-background pb-24 md:pb-xl">
          <div className="max-w-container-max mx-auto space-y-lg">
            {/* <!-- Welcome & Insights --> */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Overview
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
                  Here's what's happening with your finances today.
                </p>
              </div>
              <div className="bg-surface-container-high border border-outline-variant rounded-lg px-4 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">
                  lightbulb
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Insight: You spent 14% less than last month.
                </span>
              </div>
            </div>
            {/* <!-- Bento Grid for Hero Stats --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
              {/* <!-- Balance --> */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg card-shadow hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                    Total Balance
                  </span>
                  <span className="material-symbols-outlined text-primary bg-primary-container/10 p-1.5 rounded-md">
                    account_balance_wallet
                  </span>
                </div>
                <div>
                  <div className="font-display-lg text-display-lg text-on-surface font-headline-lg tracking-tight">
                    $124,562.00
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-primary-container">
                    <span className="material-symbols-outlined text-sm">
                      trending_up
                    </span>
                    <span className="font-label-md text-label-md">
                      +2.4% vs last month
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Income --> */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg card-shadow hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                    Income
                  </span>
                  <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-1.5 rounded-md">
                    arrow_downward
                  </span>
                </div>
                <div>
                  <div className="font-headline-lg text-headline-lg text-on-surface">
                    $18,240.50
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-primary-container">
                    <span className="material-symbols-outlined text-sm">
                      trending_up
                    </span>
                    <span className="font-label-md text-label-md">
                      +5.1% vs last month
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Expenses --> */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg card-shadow hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                    Expenses
                  </span>
                  <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-1.5 rounded-md">
                    arrow_upward
                  </span>
                </div>
                <div>
                  <div className="font-headline-lg text-headline-lg text-on-surface">
                    $8,450.20
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-tertiary">
                    <span className="material-symbols-outlined text-sm">
                      trending_up
                    </span>
                    <span className="font-label-md text-label-md">
                      +1.2% vs last month
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Savings --> */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg card-shadow hover:scale-[1.02] transition-transform duration-200 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                    Savings
                  </span>
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-1.5 rounded-md">
                    savings
                  </span>
                </div>
                <div>
                  <div className="font-headline-lg text-headline-lg text-on-surface">
                    $45,800.00
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">
                      trending_flat
                    </span>
                    <span className="font-label-md text-label-md">
                      0.0% vs last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Charts Section (Placeholder for complex charts, showing structural approach) --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg h-[400px]">
              {/* <!-- Main Area Chart --> */}
              <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-title-md text-title-md text-on-surface">
                    Income vs Expense
                  </h3>
                  <button className="text-on-surface-variant hover:text-on-surface">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="flex-1 w-full bg-surface-container-low rounded-lg border border-outline-variant/50 relative overflow-hidden flex items-center justify-center">
                  {/* <!-- In a real implementation, Chart.js canvas goes here --> */}
                  <span className="font-body-md text-on-surface-variant">
                    Chart.js Area Chart Placeholder
                  </span>
                  <canvas
                    className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
                    id="mainChart"
                  ></canvas>
                </div>
              </div>
              {/* <!-- Donut Chart --> */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-title-md text-title-md text-on-surface">
                    Expense by Category
                  </h3>
                  <button className="text-on-surface-variant hover:text-on-surface">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="flex-1 w-full flex items-center justify-center relative">
                  {/* <!-- Chart Placeholder --> */}
                  <div className="w-48 h-48 rounded-full border-[16px] border-surface-container-low border-t-primary-container border-r-secondary-container relative flex items-center justify-center">
                    <div className="text-center">
                      <span className="block font-headline-md text-headline-md text-on-surface">
                        42%
                      </span>
                      <span className="block font-label-md text-label-md text-on-surface-variant">
                        Software
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between font-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary-container"></span>{" "}
                      Software
                    </div>
                    <span>42%</span>
                  </div>
                  <div className="flex items-center justify-between font-body-sm text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary-container"></span>{" "}
                      Marketing
                    </div>
                    <span>28%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Bottom Section: Transactions & Budgets --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
              {/* <!-- Transactions Table --> */}
              <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-title-md text-title-md text-on-surface">
                    Recent Transactions
                  </h3>
                  <button className="text-primary font-label-md text-label-md hover:underline">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/50 bg-surface-container-low/50">
                        <th className="py-3 px-4 font-medium rounded-tl-lg">
                          Transaction
                        </th>
                        <th className="py-3 px-4 font-medium">Date</th>
                        <th className="py-3 px-4 font-medium text-right">
                          Amount
                        </th>
                        <th className="py-3 px-4 font-medium text-center rounded-tr-lg">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-body-md text-on-surface divide-y divide-outline-variant/30">
                      <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-md bg-surface-variant flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-surface-variant text-sm">
                              cloud
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">AWS Web Services</div>
                            <div className="text-xs text-on-surface-variant">
                              Infrastructure
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          Oct 24, 2023
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          -$4,250.00
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-md bg-surface-variant flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-surface-variant text-sm">
                              work
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">
                              Acme Corp Consulting
                            </div>
                            <div className="text-xs text-on-surface-variant">
                              Income
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          Oct 22, 2023
                        </td>
                        <td className="py-3 px-4 text-right font-medium text-primary-container">
                          +$12,500.00
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-md bg-surface-variant flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-on-surface-variant text-sm">
                              flight
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">Delta Airlines</div>
                            <div className="text-xs text-on-surface-variant">
                              Travel
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant">
                          Oct 18, 2023
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          -$850.00
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Budget Snapshot --> */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-title-md text-title-md text-on-surface">
                    Budget Snapshot
                  </h3>
                  <button className="text-on-surface-variant hover:text-on-surface">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="space-y-6">
                  {/* <!-- Budget Item 1 --> */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-on-surface-variant">
                          restaurant
                        </span>
                        <span className="font-body-md font-medium text-on-surface">
                          Food &amp; Dining
                        </span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        $850 / $1000
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-primary-container h-1.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  {/* <!-- Budget Item 2 --> */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-on-surface-variant">
                          commute
                        </span>
                        <span className="font-body-md font-medium text-on-surface">
                          Transport
                        </span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant">
                        $200 / $400
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-secondary-container h-1.5 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  {/* <!-- Budget Item 3 --> */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-on-surface-variant">
                          shopping_bag
                        </span>
                        <span className="font-body-md font-medium text-on-surface">
                          Shopping
                        </span>
                      </div>
                      <span className="font-label-md text-label-md text-error">
                        $650 / $500
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-error h-1.5 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors">
                  Adjust Budgets
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Floating Action Buttons (Bottom Right) --> */}
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-3 z-50">
          <button
            className="w-12 h-12 rounded-full bg-surface-container-lowest border border-outline-variant shadow-lg flex items-center justify-center text-tertiary hover:bg-surface-container transition-colors group"
            title="Add Expense"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
              remove
            </span>
          </button>
          <button
            className="w-14 h-14 rounded-full bg-primary-container shadow-lg flex items-center justify-center text-on-primary-container hover:opacity-90 transition-opacity group"
            title="Add Income"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform font-bold">
              add
            </span>
          </button>
        </div>
    </>
  );
};

export default OverviewPage;
