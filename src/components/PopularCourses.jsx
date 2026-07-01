const courses = [
  {
    id: 1,
    title: "Complete React.js Course",
    instructor: "John Smith",
    price: "₹499",
    rating: "4.8 ⭐",
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Sarah Wilson",
    price: "₹599",
    rating: "4.9 ⭐",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Mike Lee",
    price: "₹399",
    rating: "4.7 ⭐",
  },
];

function PopularCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Courses
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Learn from our most popular courses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <div className="h-52 bg-blue-100 flex items-center justify-center text-6xl">
                📘
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {course.instructor}
                </p>

                <div className="flex justify-between mt-5">

                  <span className="font-semibold">
                    {course.rating}
                  </span>

                  <span className="text-blue-600 font-bold">
                    {course.price}
                  </span>

                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                  Enroll Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularCourses;