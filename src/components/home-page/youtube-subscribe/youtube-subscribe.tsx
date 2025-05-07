import { Bell } from "lucide-react";
import React, { FC } from "react";

const YoutubeSubscribe: FC = () => {
  return (
    <div className="bg-[#0E0F19] h-fit">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap text-white py-16 gap-10 md:gap-0">
        <div className="md:flex-2 text-[1.5rem] md:text-[3rem] leading-[1.5rem]md:leading-[3rem] text-center md:text-left">
          Підпишіться на наш{" "}
          <span className="text-destructive">Youtube-канал</span> та
          дізнавайтесь про авто, які ми можемо якісно підібрати та вигідно
          придбати для вас.
        </div>
        <div className="md:flex-1 flex flex-col items-center justify-center text-lg gap-8 text-center">
          Не забудьте натиснути дзвіночок щоб не пропустити нове відео
          <a
            href="https://www.youtube.com/@ADVISORAUTO"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit gap-2 inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200"
          >
            <Bell /> Підписатись
          </a>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSubscribe;
