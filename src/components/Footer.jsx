function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            LearnSphere
          </h2>

          <p className="text-gray-400">
            Learn new skills from top instructors and boost your career.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categories</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>UI/UX</li>
            <li>Marketing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            support@learnsphere.com
          </p>

          <p className="text-gray-400 mt-2">
            +91 9876543210
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 text-center py-5 text-gray-400">
        © 2026 LearnSphere. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;