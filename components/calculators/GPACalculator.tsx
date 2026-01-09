"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { validateField, COMMON_RULES } from "@/lib/validation/rules";

interface Course {
  name: string;
  grade: string;
  credits: number;
}

interface CourseErrors {
  name?: string;
  grade?: string;
  credits?: string;
}

export function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { name: "", grade: "", credits: 0 },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const [scale, setScale] = useState<"4.0" | "5.0">("4.0");
  const [errors, setErrors] = useState<Record<number, CourseErrors>>({});

  const gradePoints: Record<string, Record<string, number>> = {
    "4.0": {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      F: 0.0,
    },
    "5.0": {
      A: 5.0,
      "A-": 4.7,
      "B+": 4.3,
      B: 4.0,
      "B-": 3.7,
      "C+": 3.3,
      C: 3.0,
      "C-": 2.7,
      "D+": 2.3,
      D: 2.0,
      F: 0.0,
    },
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", grade: "", credits: 0 }]);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const updateCourse = (index: number, field: keyof Course, value: string | number) => {
    const updated = [...courses];
    updated[index] = { ...updated[index], [field]: value };
    setCourses(updated);
    
    // Clear error when user updates field
    if (errors[index]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[index][field];
      if (Object.keys(updatedErrors[index]).length === 0) {
        delete updatedErrors[index];
      }
      setErrors(updatedErrors);
    }
  };

  const validateCourse = (course: Course, index: number): CourseErrors => {
    const courseErrors: CourseErrors = {};
    
    if (!course.name || course.name.trim() === "") {
      courseErrors.name = "Course name is required";
    }
    
    if (!course.grade || course.grade.trim() === "") {
      courseErrors.grade = "Grade is required";
    }
    
    const creditsError = validateField(course.credits.toString(), COMMON_RULES.credits);
    if (creditsError) {
      courseErrors.credits = creditsError;
    }
    
    return courseErrors;
  };

  const calculateGPA = () => {
    const newErrors: Record<number, CourseErrors> = {};
    let hasErrors = false;

    courses.forEach((course, index) => {
      const courseErrors = validateCourse(course, index);
      if (Object.keys(courseErrors).length > 0) {
        newErrors[index] = courseErrors;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const gradeValue = gradePoints[scale][course.grade.toUpperCase() as keyof typeof gradePoints["4.0"]];
      if (gradeValue !== undefined && course.credits > 0) {
        totalPoints += gradeValue * course.credits;
        totalCredits += course.credits;
      }
    });

    if (totalCredits > 0) {
      setGpa(totalPoints / totalCredits);
    }
  };

  const reset = () => {
    setCourses([{ name: "", grade: "", credits: 0 }]);
    setGpa(null);
    setErrors({});
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={() => setScale("4.0")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                scale === "4.0"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              4.0 Scale
            </button>
            <button
              onClick={() => setScale("5.0")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                scale === "5.0"
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#f1f5f9] text-[#1e293b]"
              }`}
            >
              5.0 Scale
            </button>
          </div>

          <div className="space-y-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
              >
                <div className="md:col-span-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Course name (e.g., Mathematics 101)"
                      value={course.name}
                      onChange={(e) =>
                        updateCourse(index, "name", e.target.value)
                      }
                      onBlur={() => {
                        const courseErrors = validateCourse(course, index);
                        if (courseErrors.name) {
                          setErrors({ ...errors, [index]: { ...errors[index], name: courseErrors.name } });
                        }
                      }}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg bg-white text-[#1e293b] min-h-[44px] ${
                        errors[index]?.name
                          ? "border-[#ef4444] focus:ring-[#ef4444]"
                          : "border-[#e2e8f0]"
                      }`}
                    />
                    <div className="min-h-[20px] mt-1.5">
                      {errors[index]?.name && (
                        <p className="text-[11px] text-[#ef4444] leading-tight whitespace-nowrap overflow-hidden text-ellipsis" role="alert">
                          {errors[index].name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div>
                    <select
                      value={course.grade}
                      onChange={(e) =>
                        updateCourse(index, "grade", e.target.value)
                      }
                      onBlur={() => {
                        const courseErrors = validateCourse(course, index);
                        if (courseErrors.grade) {
                          setErrors({ ...errors, [index]: { ...errors[index], grade: courseErrors.grade } });
                        }
                      }}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg bg-white text-[#1e293b] min-h-[44px] ${
                        errors[index]?.grade
                          ? "border-[#ef4444] focus:ring-[#ef4444]"
                          : "border-[#e2e8f0]"
                      }`}
                    >
                      <option value="">Select Grade</option>
                      {Object.keys(gradePoints[scale]).map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                    <div className="min-h-[20px] mt-1.5">
                      {errors[index]?.grade && (
                        <p className="text-[11px] text-[#ef4444] leading-tight whitespace-nowrap overflow-hidden text-ellipsis" role="alert">
                          {errors[index].grade}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div>
                    <input
                      type="number"
                      placeholder="Credits (e.g., 3)"
                      value={course.credits || ""}
                      onChange={(e) =>
                        updateCourse(index, "credits", parseFloat(e.target.value) || 0)
                      }
                      onBlur={() => {
                        const courseErrors = validateCourse(course, index);
                        if (courseErrors.credits) {
                          setErrors({ ...errors, [index]: { ...errors[index], credits: courseErrors.credits } });
                        }
                      }}
                      step="0.5"
                      min="0.5"
                      max="10"
                      className={`w-full px-4 py-2.5 border-2 rounded-lg bg-white text-[#1e293b] min-h-[44px] ${
                        errors[index]?.credits
                          ? "border-[#ef4444] focus:ring-[#ef4444]"
                          : "border-[#e2e8f0]"
                      }`}
                    />
                    <div className="min-h-[20px] mt-1.5">
                      {errors[index]?.credits && (
                        <p className="text-[11px] text-[#ef4444] leading-tight whitespace-nowrap overflow-hidden text-ellipsis" role="alert">
                          {errors[index].credits}
                        </p>
                      )}
                      {!errors[index]?.credits && (
                        <p className="text-[11px] text-[#64748b] leading-tight">
                          Enter credits (0.5-10)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  {courses.length > 1 && (
                    <Button
                      onClick={() => removeCourse(index)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button onClick={addCourse} variant="outline" className="w-full">
            + Add Course
          </Button>

          <div className="flex gap-3">
            <Button onClick={calculateGPA} className="flex-1">
              Calculate GPA
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </div>

        {gpa !== null && (
          <div className="result-container bg-[#f0fdf4] border-2 border-[#10b981] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
              Your GPA
            </h3>
            <p className="text-4xl font-bold text-[#10b981] font-mono">
              {gpa.toFixed(2)}
            </p>
            <p className="text-sm text-[#64748b] mt-2">
              Based on {scale} scale
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

