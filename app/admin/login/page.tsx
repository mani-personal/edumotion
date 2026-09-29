"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminLogin() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900 p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-800 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Admin Access</h2>
        <form className="flex flex-col gap-5">
          <input type="email" placeholder="Admin Email" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" />
          <Link href="/admin/dashboard" className="w-full">
            <button type="button" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors mt-2">
              Access Dashboard
            </button>
          </Link>
        </form>
      </motion.div>
    </div>
  );
}
