import bcrypt from "bcrypt";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("hobbies").del();
  await knex("skills").del();

  await knex("users").insert([
    {
      id: 1,
      email: "siu@cr7.com",
      password: bcrypt.hashSync("goat777", 10),
      gender: "Male",
      firstname: "Cristiano",
      lastname: "Ronaldo",
      image_url:
        "https://www.irishtimes.com/resizer/geEGpNJqT_hxa139T5HWfq8YdYw=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/C752OG447LSTHDRHTADVXYWCPQ.jpg",
    },
    {
      id: 2,
      email: "ney@nj.com",
      password: bcrypt.hashSync("ousadiaealegria", 10),
      gender: "Male",
      firstname: "Neymar",
      lastname: "Jr.",
      image_url:
        "https://pbs.twimg.com/media/EK-YsU9XYAU7R-o?format=jpg&name=medium",
    },
    {
      id: 3,
      email: "laflame@cactusjack.com",
      password: bcrypt.hashSync("itslittt", 10),
      gender: "Female",
      firstname: "Travis",
      lastname: "Scott",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg/500px-Travis_Scott_-_Openair_Frauenfeld_2019_08.jpg",
    },
    {
      id: 4,
      email: "test@test.com",
      password: bcrypt.hashSync("test1234", 10),
      gender: "Male",
      firstname: "Mister",
      lastname: "X",
      image_url:
        "https://th.bing.com/th/id/R.9361b3213e181ebaa3f6282d02fab077?rik=VNRw0lKt92xneA&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      email: "random@user.com",
      password: bcrypt.hashSync("randomuser@123", 10),
      gender: "Female",
      firstname: "Thomas",
      lastname: "A. Anderson",
      image_url:
        "https://th.bing.com/th/id/OIP.bEl-isZYhCmzsIGyhdEatgHaEK?pid=ImgDet&rs=1",
    },
    {
      id: 6,
      email: "liyana@hacktitude.io",
      password: bcrypt.hashSync("hack@1234", 10),
      gender: "Female",
      firstname: "Liyana",
      lastname: "Tan",
      image_url:
        "https://i.pinimg.com/originals/29/a8/20/29a82067b71bd9e3df95e1c0ba5c4daf.jpg",
    },
  ]);

  const hobbies = [
    { id: 1, userId: 1, name: "Soccer", rate: 5 },
    { id: 2, userId: 1, name: "Gym", rate: 4 },
    { id: 3, userId: 1, name: "Sports", rate: 3 },
    { id: 4, userId: 2, name: "Soccer", rate: 5 },
    { id: 5, userId: 2, name: "Music", rate: 1 },
    { id: 6, userId: 2, name: "Video Games", rate: 2 },
    { id: 7, userId: 3, name: "Music", rate: 5 },
    { id: 8, userId: 4, name: "Video Games", rate: 5 },
    { id: 9, userId: 4, name: "Gym", rate: 5 },
    { id: 10, userId: 4, name: "Sports", rate: 3 },
    { id: 11, userId: 4, name: "Rap", rate: 2 },
    { id: 12, userId: 5, name: "Video Games", rate: 1 },
    { id: 13, userId: 5, name: "Gym", rate: 5 },
    { id: 14, userId: 5, name: "Rap", rate: 5 },
    { id: 15, userId: 6, name: "Soccer", rate: 4 },
    { id: 16, userId: 6, name: "Coding", rate: 5 },
    { id: 17, userId: 6, name: "Music", rate: 3 },
  ];

  const skills = [
    { id: 1, userId: 1, name: "Java", rate: 5 },
    { id: 2, userId: 1, name: "C++", rate: 4 },
    { id: 3, userId: 1, name: "Python", rate: 3 },
    { id: 4, userId: 2, name: "Javascript", rate: 5 },
    { id: 5, userId: 2, name: "Photography", rate: 4 },
    { id: 6, userId: 3, name: "Java", rate: 2 },
    { id: 7, userId: 4, name: "Singing", rate: 5 },
    { id: 8, userId: 4, name: "Ruby", rate: 4 },
    { id: 9, userId: 5, name: "Dancing", rate: 3 },
    { id: 10, userId: 5, name: "Docker", rate: 5 },
    { id: 11, userId: 6, name: "Javascript", rate: 4 },
    { id: 12, userId: 6, name: "Photography", rate: 3 },
    { id: 13, userId: 6, name: "Java", rate: 3 },
  ];

  await knex("hobbies").insert(hobbies);
  await knex("skills").insert(skills);
}