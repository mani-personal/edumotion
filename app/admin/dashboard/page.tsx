"use client";
import { motion } from "framer-motion";
import { Upload, PlusCircle, LogOut } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Admin Console</h1>
        <Link href="/">
          <button className="flex items-center gap-2 text-red-600 font-semibold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" /> Sign Off
          </button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><PlusCircle className="text-indigo-600" /> Update Current Affairs</h2>
          <textarea rows={5} placeholder="Type today's current affairs update here..." className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 mb-4" />
          <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">Post Update</button>
        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Upload className="text-indigo-600" /> Upload Study Material</h2>
          <select className="w-full p-4 rounded-xl border border-slate-200 mb-4">
            <option>TNPSC Folder</option>
            <option>TET Folder</option>
            <option>Police Questions Folder</option>
          </select>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 flex justify-center items-center text-slate-500 cursor-pointer hover:bg-slate-50 transition-colors mb-4">
            Drag & Drop PDF files here
          </div>
          <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">Upload to Folder</button>
        </motion.div>
      </div>
    </div>
  );
}
