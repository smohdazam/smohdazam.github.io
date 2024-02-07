import Youtube from "../assets/Youtube-Scrrenshot.png";
const ProjectCard = () => {
  return (
    <>
      <section className="w-80 h-80 hover:scale-110 ">
        <article className="w-full h-3/6 p-1 border-[#a5b4fc] border-2 rounded-t-xl">
          <img
            className="w-full h-full rounded-t-xl"
            src={Youtube}
            alt="Image "
          />
        </article>
        <article className="w-full h-3/6 bg-[#a5b4fc] px-10 py-6 rounded-b-xl">
          <article className="w-full h-full">
            <p className="text-white font-semibold text-2xl mb-10">
              Project Name
            </p>
            <article className="flex flex-row justify-between">
              <a href="">
                <p className="text-white text-2xl font-semibold">{"</>"}</p>
              </a>
              <a href="">
                <p className="text-white text-2xl font-semibold">Link</p>
              </a>
            </article>
          </article>
        </article>
      </section>
    </>
  );
};
export default ProjectCard;