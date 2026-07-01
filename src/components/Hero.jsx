import heroImage from "../assets/images/hero.png";
import { FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            🚀 Welcome to LearnSphere
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Learn Anytime,
            <br />
            <span className="text-blue-600">
              Anywhere
            </span>
          </h1>

          <p className="text-gray-500 mt-6 text-lg leading-8">
            Discover thousands of courses taught by expert instructors.
            Build your skills and advance your career with LearnSphere.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold">
              Explore Courses
            </button>

            <button className="border border-gray-300 px-7 py-4 rounded-xl flex items-center gap-3 hover:bg-gray-100">
              <FaPlayCircle />
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Hero"
            className="w-[500px]"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;