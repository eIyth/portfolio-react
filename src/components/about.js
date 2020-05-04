import React from 'react';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AboutMe extends React.Component{
    render(){
        return(
        <div className="md:h-screen flex flex-wrap">
            <div className="flex h-screen w-full p-16 md:w-6/12  md:p-0 items-center justify-center left-block">
                <div className="rounded overflow-hidden text-center">
                    <img className="w-40 mx-auto rounded-full object-top" src="https://pbs.twimg.com/profile_images/1164206749093695488/e_wm8Yhc_400x400.jpg" alt="Gwenc'hlan Le Kerneau" />
                    <div className="px-6 py-4">
                        <div className="text-white text-2xl mb-2 font-mono">Gwenc'hlan Le Kerneau</div>
                    <p className="text-white text-base mt-8 font-mono ">
                        Network Engineering and Telecoms student
                    </p>
                    </div>
                    <div className="px-6 py-4">
                        <ul>
                            <li className="mx-3 inline-block text-red-200">
                                <a class="cursor-pointer" href='CV_Gwenchlan_LE-KERNEAU.pdf'>
                                 <FontAwesomeIcon icon={faFileDownload}  class="w-8"/>
                                </a>
                            </li>
                            <li className="mx-3 inline-block">
                                <a href="https://github.com/eIyth" class="cursor-pointer">
                                    <FontAwesomeIcon icon={faGithubSquare}  class="w-10 text-red-200"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex p-0 w-screen md:w-6/12 items-center justify-center">
                <div className="overflow-hidden">
                    <div className="px-6 py-4">
                        <div className="text-4xl font-light ">About me</div>
                        <div className="flex w-5/12 border-t-4 mb-10 border-indigo-400"></div>
                        <p className="font-thin text-md text-gray-600 max-w-md text-justify">
                            I'm a French Network Engineering and Telecoms student, but I'm also a programming enthousiast. I love creating Websites and learning new languages.
                        </p>
                        <p className="font-thin text-md text-gray-600 max-w-md mt-3 text-justify">
                            You can download my CV by clicking the button on the left. You can also discover all my projects by scrolling under.
                        </p>

                        <p className="font-thin text-md text-gray-600 max-w-md mt-3 text-justify">
                            This website is currently under construction
                        </p>
                    </div>
                    <div className="px-6 py-4">
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AboutMe;