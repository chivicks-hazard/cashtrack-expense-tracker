const SideBar = () => {
  return (
    <aside className="w-[260px] h-screen sticky left-0 top-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col p-lg overflow-y-auto hidden md:flex z-50">
      <div className="flex items-center gap-3 mb-8 px-2">
        <img
          className="w-8 h-8 rounded-DEFAULT object-cover"
          data-alt="A sleek, minimalist geometric logo representing financial growth and stability. The logo uses a high-contrast palette of vibrant emerald green against a pure white background. The design is modern, abstract, and heavily inspired by high-end fintech aesthetics."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN0bc_EAZKyreuF6XyHcYLiWlNgpnjvIWod1tisFP3yOs3ySt6dYImJ_oDJLZLfE6IhXnsax90z5ZBnBakuJDRwdrLND0lXQ6AyRZKqKVHSlr_s6CmYLPOJ0INYYejzR5PYSiMaZviX-PP8ULRebPUBSgDH3PDNQoBbJHgspvcyyYGJlOvsXGQNYlbJ4vuJ4iMeX9Rvb8NMa8ZCU5P_Z1tkbj1kMDTD7cTzRr4lBb2nYzlyvZif1RhQc7Vxrd84ujFe_o9kEHa77m8"
        />
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">
            FinancePro
          </h1>
          <p className="font-label-md text-label-md text-on-surface-variant">
            Enterprise Plan
          </p>
        </div>
      </div>
      <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors duration-200 py-2 px-4 rounded-lg font-title-md text-title-md flex items-center justify-center gap-2 mb-6">
        <span className="material-symbols-outlined text-[20px]">add</span>
        New Transaction
      </button>
      <nav className="flex-1 space-y-1">
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200"
          href="#"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="dashboard"
          >
            dashboard
          </span>
          <span className="font-title-md text-title-md">Overview</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200"
          href="#"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="payments"
          >
            payments
          </span>
          <span className="font-title-md text-title-md">Transactions</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200"
          href="#"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="category"
          >
            category
          </span>
          <span className="font-title-md text-title-md">Categories</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary font-bold bg-surface-container-high transition-transform transform scale-95"
          href="#"
        >
          <span
            className="material-symbols-outlined fill-icon text-[20px]"
            data-icon="analytics"
          >
            analytics
          </span>
          <span className="font-title-md text-title-md">Analytics</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200"
          href="#"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="account_balance_wallet"
          >
            account_balance_wallet
          </span>
          <span className="font-title-md text-title-md">Budgets</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200"
          href="#"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            data-icon="settings"
          >
            settings
          </span>
          <span className="font-title-md text-title-md">Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
