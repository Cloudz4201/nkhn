import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  ClipboardList, 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Download, 
  ChevronRight,
  Search,
  Plus,
  User,
  Building2,
  FileCode2,
  History,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Tab = 'policy' | 'form' | 'register';

interface RegisterEntry {
  id: string;
  name: string;
  owner: string;
  requester: string;
  date: string;
  reviewer: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  version: string;
}

// --- Components ---

const Badge = ({ status }: { status: RegisterEntry['status'] }) => {
  const styles = {
    Approved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Rejected: 'bg-rose-50 text-rose-700 border-rose-200',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border uppercase tracking-wider ${styles[status]}`}>
      {status}
    </span>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('policy');

  const printDocument = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header - No Print */}
      <header className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-zinc-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-zinc-900 p-2 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-zinc-900">Macro Governance Portal</h1>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Security Compliance Framework</p>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl">
          {(['policy', 'form', 'register'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-white text-zinc-900 shadow-sm' 
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={printDocument}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print SOP
          </button>
          <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-12">
        <AnimatePresence mode="wait">
          {activeTab === 'policy' && (
            <motion.div
              key="policy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white p-8 md:p-16 rounded-3xl shadow-card border border-zinc-200 relative overflow-hidden"
            >
              {/* Document Header */}
              <div className="mb-12 border-b border-zinc-100 pb-12">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Official Policy Document</span>
                    <h2 className="text-4xl font-bold text-zinc-900 tracking-tight leading-tight">Macro Approval and Code Signing Procedure</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-zinc-400">DOC-ID: SEC-MAC-001</p>
                    <p className="text-xs font-mono text-zinc-400">VERSION: 2.1.0</p>
                    <p className="text-xs font-mono text-zinc-400">DATE: MAR 2026</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                      <Info className="w-3 h-3" /> Purpose
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      To ensure that Microsoft Office macros used within the organisation are necessary, secure, and digitally signed before use, reducing the risk of malicious code execution while supporting legitimate business automation.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3" /> Scope
                    </h3>
                    <p className="text-zinc-600 leading-relaxed text-sm">
                      Applies to all Microsoft Office macro-enabled documents (e.g. Excel, Word, Access) used within the organisation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Body */}
              <div className="space-y-12">
                {/* Section 1 */}
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="text-xl font-bold text-zinc-900">Overview of the Approval Process</h3>
                  </div>
                  <div className="pl-12 space-y-4">
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      All macros must undergo a three-stage approval and security process before they are digitally signed and made available for use.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { title: 'Stage 1', desc: 'Business Justification and Request' },
                        { title: 'Stage 2', desc: 'Business Review and Approval' },
                        { title: 'Stage 3', desc: 'IT Security Review and Code Signing' }
                      ].map((stage, i) => (
                        <div key={i} className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase mb-1">{stage.title}</p>
                          <p className="text-sm font-semibold text-zinc-900">{stage.desc}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-rose-600 flex items-center gap-2 mt-4">
                      <AlertCircle className="w-3 h-3" /> Only macros that complete all stages will be allowed to run in the environment.
                    </p>
                  </div>
                </section>

                {/* Section 2 & 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">2</div>
                      <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Macro Request Submission</h3>
                    </div>
                    <div className="pl-12 space-y-4">
                      <ul className="space-y-2 text-sm text-zinc-600">
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Business purpose and automation description</li>
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Expected benefits and target document</li>
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Source confirmation (Internal/External)</li>
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Integrity check for external sources</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">3</div>
                      <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Business Review</h3>
                    </div>
                    <div className="pl-12 space-y-4">
                      <ul className="space-y-2 text-sm text-zinc-600">
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Verification of business necessity</li>
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Assessment of standard system alternatives</li>
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Confidentiality and regulatory alignment</li>
                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-zinc-300 mt-0.5" /> Formal approval recording in request system</li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* Section 4 - IT Security Review */}
                <section className="bg-zinc-900 text-white p-8 rounded-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-8 rounded-full bg-white text-zinc-900 flex items-center justify-center text-sm font-bold">4</div>
                    <h3 className="text-xl font-bold">IT Security Review & Validation</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pl-12">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Code Review</h4>
                      <ul className="text-xs space-y-2 text-zinc-300 font-mono">
                        <li>- External calls</li>
                        <li>- Shell commands</li>
                        <li>- PowerShell execution</li>
                        <li>- Registry modification</li>
                        <li>- Network connections</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Security Validation</h4>
                      <ul className="text-xs space-y-2 text-zinc-300">
                        <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> No external code execution</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> No internet file downloads</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> No credential exposure</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Operational Validation</h4>
                      <ul className="text-xs space-y-2 text-zinc-300">
                        <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> Controlled test environment</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> Functionality validation</li>
                        <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> System behavior monitoring</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5 & 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">5</div>
                      <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Digital Code Signing</h3>
                    </div>
                    <div className="pl-12 space-y-4">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Apply trusted organisational code-signing certificate and lock the VBA project. Any modification invalidates the signature.
                      </p>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">6</div>
                      <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Controlled Distribution</h3>
                    </div>
                    <div className="pl-12 space-y-4">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        Distribution via SharePoint library or approved templates repository. No email distribution permitted for macros.
                      </p>
                    </div>
                  </section>
                </div>

                {/* Section 9 - Security Enforcement */}
                <section className="border-t border-zinc-100 pt-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-bold">9</div>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Security Enforcement Controls</h3>
                  </div>
                  <div className="pl-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { icon: <Lock className="w-5 h-5" />, title: 'Block Unsigned', desc: 'Office configured to block all unsigned macros.' },
                      { icon: <ShieldCheck className="w-5 h-5" />, title: 'Trusted Sources', desc: 'Allow macros only from trusted signed certificates.' },
                      { icon: <AlertCircle className="w-5 h-5" />, title: 'Internet Block', desc: 'Prevent macros from running in files from the internet.' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="text-zinc-900">{item.icon}</div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="mt-24 pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex gap-8">
                  <span>© 2026 Corporate Security</span>
                  <span>Confidential</span>
                </div>
                <div className="flex gap-8">
                  <span>Essential Eight Aligned</span>
                  <span>ISO 27001 Compliant</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-card border border-zinc-200"
            >
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-zinc-100">
                <div className="bg-emerald-100 p-3 rounded-2xl">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">Macro Approval Request Form</h2>
                  <p className="text-sm text-zinc-500">Submit new macro for security review and code signing</p>
                </div>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                      <User className="w-3 h-3" /> Requester Name
                    </label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all" placeholder="e.g. John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                      <Building2 className="w-3 h-3" /> Department
                    </label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all" placeholder="e.g. Finance" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <ClipboardList className="w-3 h-3" /> Business Purpose & Automation Description
                  </label>
                  <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all" placeholder="Describe what the macro does and why it is needed..." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                      <FileCode2 className="w-3 h-3" /> Macro Source
                    </label>
                    <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all appearance-none">
                      <option>Internal Developer</option>
                      <option>External Consultant</option>
                      <option>Downloaded Template</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                      <Download className="w-3 h-3" /> File Upload (.xlsm, .docm)
                    </label>
                    <div className="border-2 border-dashed border-zinc-200 rounded-xl p-4 text-center hover:bg-zinc-50 transition-colors cursor-pointer">
                      <p className="text-xs text-zinc-400">Click to upload or drag and drop</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Compliance Confirmation</h4>
                  <div className="space-y-3">
                    {[
                      'I confirm this macro is required for business operations.',
                      'I confirm the source is trusted and code is unmodified.',
                      'I understand that any modifications require re-approval.'
                    ].map((text, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded border border-zinc-300 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-zinc-600">{text}</span>
                        <input type="checkbox" className="hidden" />
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <button className="bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10">
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {activeTab === 'register' && (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-3xl shadow-card border border-zinc-200 overflow-hidden"
            >
              <div className="p-8 border-b border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">Macro Governance Register</h2>
                  <p className="text-sm text-zinc-500">Audit trail and version control for all approved macros</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none" placeholder="Search register..." />
                  </div>
                  <button className="bg-zinc-900 text-white p-2 rounded-xl hover:bg-zinc-800 transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50/50 border-b border-zinc-100">
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Macro Name</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Owner</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Status</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Reviewer</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date</th>
                      <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Version</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {[
                      { id: '1', name: 'Finance_Consolidation_V4', owner: 'Finance', requester: 'S. Miller', date: '2026-03-10', reviewer: 'IT-SEC-01', status: 'Approved', version: '4.2.0' },
                      { id: '2', name: 'HR_Onboarding_Automation', owner: 'HR', requester: 'A. Chen', date: '2026-03-11', reviewer: 'IT-SEC-03', status: 'Pending', version: '1.0.0' },
                      { id: '3', name: 'Sales_Report_Generator', owner: 'Sales', requester: 'M. Ross', date: '2026-03-05', reviewer: 'IT-SEC-01', status: 'Approved', version: '2.1.5' },
                      { id: '4', name: 'Legacy_Inventory_Sync', owner: 'Ops', requester: 'D. Knight', date: '2026-02-28', reviewer: 'IT-SEC-02', status: 'Rejected', version: '0.9.0' },
                      { id: '5', name: 'Audit_Log_Processor', owner: 'Compliance', requester: 'E. White', date: '2026-03-12', reviewer: 'IT-SEC-01', status: 'Approved', version: '1.1.0' },
                    ].map((row) => (
                      <tr key={row.id} className="hover:bg-zinc-50/50 transition-colors group">
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-zinc-900 transition-colors" />
                            <span className="text-sm font-semibold text-zinc-900">{row.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5 text-sm text-zinc-600">{row.owner}</td>
                        <td className="px-8 py-5">
                          <Badge status={row.status as any} />
                        </td>
                        <td className="px-8 py-5 text-sm font-mono text-zinc-500">{row.reviewer}</td>
                        <td className="px-8 py-5 text-sm text-zinc-500">{row.date}</td>
                        <td className="px-8 py-5">
                          <span className="text-xs font-mono bg-zinc-100 px-2 py-1 rounded text-zinc-600">{row.version}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-8 bg-zinc-50/50 border-t border-zinc-100 flex justify-between items-center">
                <p className="text-xs text-zinc-400 font-medium">Showing 5 of 128 registered macros</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">Previous</button>
                  <button className="px-3 py-1 text-xs font-bold text-zinc-900 bg-white border border-zinc-200 rounded shadow-sm">1</button>
                  <button className="px-3 py-1 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">2</button>
                  <button className="px-3 py-1 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">Next</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Print Only Footer */}
      <div className="hidden print-only fixed bottom-0 left-0 right-0 p-8 text-center border-t border-zinc-100 bg-white">
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          Macro Governance SOP | Document ID: SEC-MAC-001 | Printed: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
