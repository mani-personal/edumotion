"use client";
import { motion } from "framer-motion";
import { FileText, Eye } from "lucide-react";

const materials = [
  { id: 1, title: "IBPS PO Prelims Mock Test", date: "Oct 1, 2026" },
  { id: 2, title: "Banking Awareness 2026", date: "Sept 29, 2026" },
  { id: 3, title: "Quantitative Aptitude Formulas", date: "Sept 28, 2026" },
];

export default function BankFolder() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Banking Exams Study Materials</h1>
        <p className="text-slate-600">Access all your uploaded files for IBPS, SBI, and RBI preparation here.</p>
      </motion.div>

      <div className="space-y-4">
        {materials.map((file, index) => (
          <motion.div 
            key={file.id} 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{file.title}</h3>
                <span className="text-xs text-slate-500">Added: {file.date}</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium transition-colors">
              <Eye className="w-4 h-4" /> Read Online
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
