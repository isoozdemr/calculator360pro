"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  convertScoreToGPA,
  TURKEY_GRADE_SCALE_4,
  GPA_INFO,
  DATA_VERSION,
} from "@/lib/data/turkey-2026-data";

interface Course {
  name: string;
  credit: number;
  score: number;
  gradeType: "score" | "letter";
  letterGrade?: string;
}

interface GPAFormData {
  courses: Course[];
}

interface GPAResult {
  totalCredits: number;
  totalGradePoints: number;
  gpa: number;
  status: string;
  courseResults: {
    name: string;
    credit: number;
    score: number;
    gpa: number;
    letter: string;
    gradePoints: number;
  }[];
}

export function TurkeyGPACalculator() {
  const [result, setResult] = useState<GPAResult | null>(null);
  const { register, control, handleSubmit, watch } = useForm<GPAFormData>({
    defaultValues: {
      courses: [
        { name: "", credit: 3, score: 0, gradeType: "score" },
        { name: "", credit: 3, score: 0, gradeType: "score" },
        { name: "", credit: 3, score: 0, gradeType: "score" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
  });

  const onSubmit = (data: GPAFormData) => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    const courseResults: GPAResult["courseResults"] = [];

    data.courses.forEach((course, index) => {
      if (course.credit > 0) {
        let gpa: number;
        let letter: string;

        if (course.gradeType === "letter" && course.letterGrade) {
          const gradeInfo = TURKEY_GRADE_SCALE_4.find(g => g.letter === course.letterGrade);
          gpa = gradeInfo?.gpa || 0;
          letter = course.letterGrade;
        } else {
          const gradeInfo = convertScoreToGPA(course.score);
          gpa = gradeInfo.gpa;
          letter = gradeInfo.letter;
        }

        const gradePoints = gpa * course.credit;
        totalCredits += course.credit;
        totalGradePoints += gradePoints;

        courseResults.push({
          name: course.name || `Ders ${index + 1}`,
          credit: course.credit,
          score: course.score,
          gpa,
          letter,
          gradePoints,
        });
      }
    });

    const finalGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

    let status = "Başarısız";
    if (finalGPA >= GPA_INFO.highHonorGPA) {
      status = "Yüksek Onur Öğrencisi";
    } else if (finalGPA >= GPA_INFO.honorGPA) {
      status = "Onur Öğrencisi";
    } else if (finalGPA >= GPA_INFO.passingGPA) {
      status = "Başarılı";
    }

    setResult({
      totalCredits,
      totalGradePoints,
      gpa: finalGPA,
      status,
      courseResults,
    });
  };

  return (
    <div className="bg-white rounded-lg border-2 border-[#e2e8f0] p-6">
      {/* Güncelleme Bilgisi */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <strong>Son Güncelleme:</strong> {DATA_VERSION.lastUpdatedDisplay} | 
          <strong> Sistem:</strong> YÖK 4&apos;lük Not Sistemi
        </p>
      </div>

      {/* GPA Bilgisi */}
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">
          Türkiye Not Sistemi Bilgisi
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-green-600">Geçme Notu:</span>
            <span className="font-semibold text-green-800 ml-2">{GPA_INFO.passingGPA}</span>
          </div>
          <div>
            <span className="text-green-600">Onur:</span>
            <span className="font-semibold text-green-800 ml-2">{GPA_INFO.honorGPA}+</span>
          </div>
          <div>
            <span className="text-green-600">Yüksek Onur:</span>
            <span className="font-semibold text-green-800 ml-2">{GPA_INFO.highHonorGPA}+</span>
          </div>
          <div>
            <span className="text-green-600">Maksimum:</span>
            <span className="font-semibold text-green-800 ml-2">{GPA_INFO.maxGPA}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-[#1e293b]">Dersler</h4>
            <button
              type="button"
              onClick={() => append({ name: "", credit: 3, score: 0, gradeType: "score" })}
              className="text-sm text-[#2563eb] hover:underline"
            >
              + Ders Ekle
            </button>
          </div>

          {fields.map((field, index) => {
            const gradeType = watch(`courses.${index}.gradeType`);
            return (
              <div key={field.id} className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-[#64748b] mb-1">
                      Ders Adı
                    </label>
                    <input
                      type="text"
                      {...register(`courses.${index}.name`)}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none text-sm"
                      placeholder={`Ders ${index + 1}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#64748b] mb-1">
                      Kredi
                    </label>
                    <select
                      {...register(`courses.${index}.credit`, { valueAsNumber: true })}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((credit) => (
                        <option key={credit} value={credit}>
                          {credit}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#64748b] mb-1">
                      Not Türü
                    </label>
                    <select
                      {...register(`courses.${index}.gradeType`)}
                      className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none text-sm"
                    >
                      <option value="score">100&apos;lük</option>
                      <option value="letter">Harf Notu</option>
                    </select>
                  </div>

                  <div className="flex items-end gap-2">
                    {gradeType === "score" ? (
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-[#64748b] mb-1">
                          Puan (0-100)
                        </label>
                        <input
                          type="number"
                          {...register(`courses.${index}.score`, { valueAsNumber: true })}
                          min="0"
                          max="100"
                          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none text-sm"
                          placeholder="85"
                        />
                      </div>
                    ) : (
                      <div className="flex-1">
                        <label className="block text-xs font-medium text-[#64748b] mb-1">
                          Harf Notu
                        </label>
                        <select
                          {...register(`courses.${index}.letterGrade`)}
                          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-lg focus:border-[#2563eb] focus:outline-none text-sm"
                        >
                          {TURKEY_GRADE_SCALE_4.map((grade) => (
                            <option key={grade.letter} value={grade.letter}>
                              {grade.letter} ({grade.gpa})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Not Ortalaması Hesapla
        </button>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1e293b] border-b pb-2">
            GANO Hesaplama Sonuçları
          </h3>

          {/* Ana Sonuçlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600">Genel Ağırlıklı Not Ortalaması (GANO)</p>
              <p className="text-3xl font-bold text-blue-700">
                {result.gpa.toFixed(2)}
              </p>
            </div>
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">Toplam Kredi</p>
              <p className="text-2xl font-bold text-[#1e293b]">
                {result.totalCredits}
              </p>
            </div>
            <div className={`p-4 rounded-lg border ${
              result.gpa >= GPA_INFO.highHonorGPA 
                ? "bg-green-50 border-green-200" 
                : result.gpa >= GPA_INFO.passingGPA 
                  ? "bg-yellow-50 border-yellow-200" 
                  : "bg-red-50 border-red-200"
            }`}>
              <p className="text-sm text-[#64748b]">Durum</p>
              <p className={`text-xl font-bold ${
                result.gpa >= GPA_INFO.highHonorGPA 
                  ? "text-green-700" 
                  : result.gpa >= GPA_INFO.passingGPA 
                    ? "text-yellow-700" 
                    : "text-red-700"
              }`}>
                {result.status}
              </p>
            </div>
          </div>

          {/* Ders Detayları */}
          <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
            <h4 className="font-semibold text-[#1e293b] mb-4">Ders Detayları</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e2e8f0]">
                    <th className="text-left py-2 px-3 text-[#64748b]">Ders</th>
                    <th className="text-center py-2 px-3 text-[#64748b]">Kredi</th>
                    <th className="text-center py-2 px-3 text-[#64748b]">Puan</th>
                    <th className="text-center py-2 px-3 text-[#64748b]">Harf</th>
                    <th className="text-center py-2 px-3 text-[#64748b]">4&apos;lük</th>
                    <th className="text-right py-2 px-3 text-[#64748b]">Ağırlıklı Puan</th>
                  </tr>
                </thead>
                <tbody>
                  {result.courseResults.map((course, index) => (
                    <tr key={index} className="border-b border-[#e2e8f0] last:border-0">
                      <td className="py-2 px-3 text-[#1e293b]">{course.name}</td>
                      <td className="py-2 px-3 text-center text-[#1e293b]">{course.credit}</td>
                      <td className="py-2 px-3 text-center text-[#1e293b]">{course.score}</td>
                      <td className="py-2 px-3 text-center font-semibold text-[#2563eb]">{course.letter}</td>
                      <td className="py-2 px-3 text-center text-[#1e293b]">{course.gpa.toFixed(1)}</td>
                      <td className="py-2 px-3 text-right font-semibold text-[#1e293b]">
                        {course.gradePoints.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50">
                    <td className="py-2 px-3 font-semibold text-[#1e293b]" colSpan={4}>Toplam</td>
                    <td className="py-2 px-3 text-center font-bold text-[#1e293b]">{result.totalCredits}</td>
                    <td className="py-2 px-3 text-right font-bold text-blue-700">
                      {result.totalGradePoints.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Not Dönüşüm Tablosu */}
      <div className="mt-8 bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0]">
        <h4 className="font-semibold text-[#1e293b] mb-4">
          Türkiye Not Dönüşüm Tablosu (YÖK Standardı)
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0]">
                <th className="text-left py-2 px-3 text-[#64748b]">Harf Notu</th>
                <th className="text-center py-2 px-3 text-[#64748b]">4&apos;lük Karşılığı</th>
                <th className="text-center py-2 px-3 text-[#64748b]">100&apos;lük Aralık</th>
                <th className="text-left py-2 px-3 text-[#64748b]">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              {TURKEY_GRADE_SCALE_4.map((grade, index) => (
                <tr key={index} className="border-b border-[#e2e8f0] last:border-0">
                  <td className="py-2 px-3 font-semibold text-[#2563eb]">{grade.letter}</td>
                  <td className="py-2 px-3 text-center text-[#1e293b]">{grade.gpa.toFixed(1)}</td>
                  <td className="py-2 px-3 text-center text-[#1e293b]">
                    {grade.minScore} - {grade.maxScore}
                  </td>
                  <td className="py-2 px-3 text-[#64748b]">{grade.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
