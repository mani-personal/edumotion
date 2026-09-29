"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Book, Shield, GraduationCap, BookOpen } from "lucide-react";

const courses = [
  { title: "UPSC", id: "upsc", icon: Book, color: "bg-orange-50 text-blue-600" },
  { title: "TNPSC", id: "tnpsc", icon: Book, color: "bg-blue-100 text-blue-600" },
  { title: "TET", id: "tet", icon: GraduationCap, color: "bg-green-100 text-green-600" },
  { title: "TN Police", id: "police", icon: Shield, color: "bg-red-100 text-red-600" },
  { title: "Banking", id: "bank", icon: BookOpen, color: "bg-purple-100 text-purple-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Master Your Future with <span className="text-indigo-600">EduMotion</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8">
          Access high-quality study materials for TNPSC, TET, and Police examinations. Motion-animated, perfectly organized, and updated daily.
        </motion.p>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div key={course.id} variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href={`/courses/${course.id}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col items-center text-center cursor-pointer">
                <div className={`p-4 rounded-full ${course.color} mb-6`}>
                  <course.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-500">Access PDFs, daily quizzes, and mock exams neatly organized into folders.</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
