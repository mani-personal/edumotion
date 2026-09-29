"use client";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
        <form className="flex flex-col gap-5">
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button type="button" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors mt-2">
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
}
