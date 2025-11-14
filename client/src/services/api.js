// Example API file for future fetch/axios requests
export const getCourses = async () => {
  const res = await fetch("/api/courses");
  return res.json();
};
