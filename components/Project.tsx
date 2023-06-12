/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectProps {
  img?: string;
  name: string;
  desc: string;
  link: string;
  sub?: string;
}

export const Project = (props: ProjectProps) => {
  return (
    <div className="flex">
      {props.img ? (
        <img src={props.img} alt="Project Image" className="w-16 h-16" />
      ) : (
        <FaGithub className="w-16 h-16 text-white" />
      )}
      <div className="ml-6">
        {props.sub && <p className="uppercase text-lightGray">{props.sub}</p>}
        <h1 className="text-white font-bold text-2xl flex">
          {props.name}{" "}
          {props.link && (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <FaLink className="ml-2 mt-1 hover:text-lightGray" />
            </a>
          )}
        </h1>
        <p className="text-lightGray text-2xl w-72">{props.desc}</p>
      </div>
    </div>
  );
};
