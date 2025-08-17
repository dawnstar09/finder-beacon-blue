import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Users, Calendar, Award } from "lucide-react";

const Members = () => {
  const currentMembers = [
    {
      name: "김민수",
      role: "회장", 
      year: "3학년",
      major: "이과",
      email: "minsu.kim@school.ac.kr",
      achievements: ["전국 대회 대상", "프로그래밍 대회 금상"],
      skills: ["리더십", "프로젝트 관리", "Python", "AI"],
      avatar: "SW",
      color: "bg-blue-500"
    },
    {
      name: "이지영",
      role: "부회장",
      year: "3학년", 
      major: "문과",
      email: "jiyoung.lee@school.ac.kr",
      achievements: ["창업 공모전 최우수상", "기획 경진대회 수상"],
      skills: ["기획", "마케팅", "데이터 분석", "Excel"],
      avatar: "HW",
      color: "bg-purple-500"
    },
    {
      name: "박준호",
      role: "학술부장",
      year: "2학년",
      major: "이과", 
      email: "junho.park@school.ac.kr",
      achievements: ["과학 논문 발표", "로봇 대회 수상"],
      skills: ["연구", "하드웨어", "C++", "임베디드"],
      avatar: "NS",
      color: "bg-teal-500"
    },
    {
      name: "최수진",
      role: "대외협력부장",
      year: "2학년",
      major: "문과",
      email: "sujin.choi@school.ac.kr", 
      achievements: ["영어 말하기 대회 수상", "교환학생 프로그램"],
      skills: ["협상", "영어", "네트워킹", "프레젠테이션"],
      avatar: "MT",
      color: "bg-green-500"
    },
    {
      name: "정동현",
      role: "홍보부장",
      year: "2학년",
      major: "예체능",
      email: "donghyun.jung@school.ac.kr",
      achievements: ["디자인 공모전 수상", "브랜딩 프로젝트"],
      skills: ["디자인", "브랜딩", "포토샵", "영상편집"],
      avatar: "DS",
      color: "bg-indigo-500"
    },
    {
      name: "한소영",
      role: "총무",
      year: "1학년",
      major: "문과", 
      email: "soyoung.han@school.ac.kr",
      achievements: ["신입생 우수상", "장학금 수여"],
      skills: ["회계", "기획", "Excel", "커뮤니케이션"],
      avatar: "TR",
      color: "bg-pink-500"
    }
  ];

  const alumni = [
    {
      name: "서민재",
      graduationYear: "2023",
      currentPosition: "서울대학교 컴퓨터공학과 재학",
      major: "이과"
    },
    {
      name: "윤하림",
      graduationYear: "2022", 
      currentPosition: "연세대학교 경영학과 재학",
      major: "문과"
    },
    {
      name: "조승우",
      graduationYear: "2021",
      currentPosition: "KAIST 전자공학과 재학",
      major: "이과"
    },
    {
      name: "김나영",
      graduationYear: "2020",
      currentPosition: "고려대학교 국제학부 재학",
      major: "문과"
    }
  ];

  const stats = [
    { label: "현재 활동 멤버", value: "24명", icon: Users },
    { label: "동문 네트워크", value: "200+명", icon: Award },
    { label: "평균 활동 기간", value: "2.5년", icon: Calendar }
  ];

  const getRoleColor = (role: string) => {
    if (role === "회장") return "bg-yellow-500";
    if (role === "부회장") return "bg-finder-blue";
    if (role.includes("부장")) return "bg-green-500";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Team Members
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-pretendard">
              FINDER 멤버
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-pretendard font-light">
              함께 성장하며 최고를 추구하는 FINDER의 멤버들을 소개합니다.
              다양한 전공과 배경을 가진 우수한 학생들이 모여 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Members */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-pretendard">현재 임원진</h2>
            <p className="text-xl text-muted-foreground font-pretendard font-light">2024년 FINDER를 이끌어가는 핵심 멤버들</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentMembers.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0">
                <CardContent className="p-8 text-center">
                  {/* Avatar Circle */}
                  <div className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <span className="text-white font-bold text-xl font-pretendard">{member.avatar}</span>
                  </div>
                  
                  {/* Member Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 font-pretendard">{member.name}</h3>
                    <Badge className={`${getRoleColor(member.role)} text-white mb-2`}>
                      {member.role}
                    </Badge>
                    <div className="text-sm text-muted-foreground font-pretendard font-light">
                      {member.year} • {member.major}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground font-pretendard font-light">
                      {member.email}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm font-pretendard">주요 성과</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="secondary" className="text-xs font-pretendard">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm font-pretendard">전문 분야</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs font-pretendard">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Button */}
                  <Button 
                    variant="finder-outline" 
                    size="sm" 
                    className="w-full font-pretendard"
                    onClick={() => window.location.href = `mailto:${member.email}`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    연락하기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">동문 현황</h2>
            <p className="text-xl text-muted-foreground">FINDER 출신들의 뛰어난 진로 현황</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {alumni.map((alumnus, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{alumnus.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {alumnus.graduationYear}년 졸업
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-2">{alumnus.major}</p>
                  <p className="text-sm font-medium text-finder-blue">
                    {alumnus.currentPosition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              더 많은 동문들이 다양한 분야에서 활약하고 있습니다
            </p>
            <Button variant="finder-outline">
              <Github className="w-4 h-4 mr-2" />
              전체 동문 네트워크 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 하고 싶다면?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              FINDER와 함께 성장하고 최고가 되고 싶은 분들을 언제나 환영합니다.
              지금 바로 지원해보세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="finder" size="lg">
                지원서 작성하기
              </Button>
              <Button variant="finder-outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;