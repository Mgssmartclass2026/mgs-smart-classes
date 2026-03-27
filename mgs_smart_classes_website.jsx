import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MGSWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <header className="text-center py-6">
        <img
          src="/mnt/data/WhatsApp Image 2026-03-13 at 12.43.55 PM.jpeg"
          alt="MG'S Smart Classes Banner"
          className="mx-auto rounded-2xl shadow-md"
        />
      </header>

      {/* About, Courses, Why Choose Us */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-600">
              MG's Smart Classes provides quality education using modern teaching methods, digital tools,
              and personalized attention to help students achieve academic success.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Our Courses</h2>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Class 1 – 8: All Subjects</li>
              <li>Class 9 – 10: Mathematics & Science</li>
              <li>Class 11 – 12: Biology</li>
              <li>Exam Preparation & Concept Building</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Concept-based teaching</li>
              <li>Regular tests and progress tracking</li>
              <li>Friendly and disciplined environment</li>
              <li>Small batch size for personal attention</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-10 space-y-4">
        <div>
          <p className="text-lg text-gray-700">📞 Phone & WhatsApp: 7002772856</p>
          <p className="text-gray-700">📍 Address: Melachakar Tiniali, near Pakshalika School</p>
        </div>
        <a href="https://wa.me/917002772856" target="_blank" rel="noopener noreferrer">
          <Button className="rounded-2xl px-6 py-3 text-lg">Chat on WhatsApp</Button>
        </a>
      </section>

      {/* Location and Gallery */}
      <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Melachakar+Tiniali+near+Pakshalika+School&output=embed"
            className="w-full h-64 rounded-2xl border"
            loading="lazy"
          ></iframe>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Classroom Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="/mnt/data/WhatsApp Image 2026-03-13 at 12.09.11 PM.jpeg" alt="Classroom 1" className="rounded-xl" />
            <img src="/mnt/data/WhatsApp Image 2026-03-13 at 12.43.55 PM.jpeg" alt="Classroom 2" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Student Admission Enquiry</h2>
        <form className="grid gap-4 bg-white p-6 rounded-2xl shadow-md">
          <input className="border p-2 rounded" placeholder="Student Name" />
          <input className="border p-2 rounded" placeholder="Class" />
          <input className="border p-2 rounded" placeholder="Parent Phone Number" />
          <textarea className="border p-2 rounded" placeholder="Message"></textarea>
          <Button className="rounded-2xl">Submit Enquiry</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10 pb-4">
        © {new Date().getFullYear()} MG'S Smart Classes. All rights reserved.
      </footer>
    </div>
  );
}
