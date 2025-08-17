import { Link } from "react-router-dom";
import { Mail, Github, Instagram, Facebook } from "lucide-react";
import finderLogo from "@/assets/finder-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-finder-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={finderLogo} alt="FINDER" className="h-10 w-10" />
              <div className="font-bold text-2xl">FINDER</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              2011년부터 시작된 대학교 최고의 동아리 FINDER입니다. 
              우수한 성과와 함께 지속적으로 성장하고 있는 1등 동아리입니다.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:finder@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  동아리 소개
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">
                  동아리 실적
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-300 hover:text-white transition-colors">
                  멤버
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-300 hover:text-white transition-colors">
                  참가신청
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-300">
              <li>이메일: finder@university.ac.kr</li>
              <li>동아리방: 학생회관 3층</li>
              <li>활동시간: 매주 수, 금 18:00-21:00</li>
              <li>
                <a 
                  href="https://notion.so" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-finder-blue-light hover:text-white transition-colors"
                >
                  노션 페이지 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} FINDER. All rights reserved. | Est. 2011
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;