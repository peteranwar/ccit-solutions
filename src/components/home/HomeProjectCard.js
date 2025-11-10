import { ArrowTopRight } from "@/icons";
import Image from "next/image";

const HomeProjectCard = ({ project, t }) => {
  return (
    <div className="col-12 col-lg-6 my-3">
      <div className="home-project-card">
        <div className="project-image mb-4">
          <Image
            src={project.image}
            className="img-fluid w-100 h-100 object-fit-fill"
            alt={project.name}
            width={700}
            height={540}
            quality={100}
          />

          {/* View */}
          <a
            target="_blank"
            rel="noreferrer"
            href={
              project?.web_link || project?.ios_link || project?.android_link
            }
            className="view-btn d-flex justify-content-center align-items-center gap-1 px-3 py-2 rounded-5 "
          >
            {t("shared.view")}
            <span className="arrow-icon">{ArrowTopRight}</span>
          </a>
        </div>
        <h5 className="text-white my-3">{project?.name}</h5>

        <p className="project-desc">{project?.description}</p>
      </div>
    </div>
  );
};

export default HomeProjectCard;
