import {
  FaLaptopCode,
  FaChartLine,
  FaPaintBrush,
  FaMobileAlt,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Web Development",
    courses: "120 Courses",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "Data Science",
    courses: "95 Courses",
  },
  {
    id: 3,
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    courses: "80 Courses",
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "App Development",
    courses: "75 Courses",
  },
  {
    id: 5,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    courses: "60 Courses",
  },
  {
    id: 6,
    icon: <FaCloud />,
    title: "Cloud Computing",
    courses: "55 Courses",
  },
];

function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Browse Categories
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Explore the most popular learning categories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >

              <div className="text-5xl text-blue-600 flex justify-center mb-5">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {category.courses}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;